import Layout from '../layout/Layout'
import useQuiosco from '../hooks/useQuiosco'

export default function Home() {
  const { categoriaActual } = useQuiosco()
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
    </Layout>
  )
}
