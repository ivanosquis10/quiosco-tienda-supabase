import { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import useQuiosco from '../hooks/useQuiosco'
import { supabase } from '../supabase/supabase'
import Producto from '../components/Producto'

export default function Home({ data }) {
  const { categoriaActual } = useQuiosco()

  const [productoCategoria, setProductoCategoria] = useState([])

  useEffect(() => {
    async function getProductoCategoria(id) {
      const { data } = await supabase
        .from('producto')
        .select()
        .eq('categoriaId', id)
      setProductoCategoria(data)
    }

    if (categoriaActual?.id) {
      getProductoCategoria(categoriaActual.id)
    }
  }, [categoriaActual])

  return (
    <Layout
      pagina={`- ${categoriaActual?.nombre ? categoriaActual.nombre : ''} `}
    >
      <h1 className="text-4xl font-bold text-slate-800 uppercase mt-2">
        Menú de {categoriaActual?.nombre}
      </h1>
      <p className="text-2xl text-slate-700 my-8 font-medium">
        Elige y personaliza tu pedido a continuación
      </p>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {productoCategoria?.map((producto) => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
    </Layout>
  )
}
