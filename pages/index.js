import { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import useQuiosco from '../hooks/useQuiosco'
import { supabase } from '../supabase/supabase'
import Producto from '../components/Producto'

export default function Home({ productosCate }) {
  const { categoriaActual } = useQuiosco()
  const [productoCategoria, setProductoCategoria] = useState([])

  async function getProductoCategoria(id) {
    const { data } = await supabase
      .from('producto')
      .select()
      .eq('categoriaId', id)
    return setProductoCategoria(data)
  }

  useEffect(() => {
    getProductoCategoria(categoriaActual?.id)
  }, [categoriaActual])

  return (
    <Layout
      pagina={`- ${
        categoriaActual?.nombre === undefined ? '' : categoriaActual.nombre
      } `}
    >
      <h1 className="text-4xl font-bold text-slate-800 uppercase mt-2">
        Menú de {categoriaActual?.nombre}
      </h1>
      <p className="text-2xl text-slate-700 my-8 font-medium">
        Elige y personaliza tu pedido a continuación
      </p>
      <div className="grid grid-cols-4">
        {productoCategoria?.map((producto) => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
    </Layout>
  )
}
