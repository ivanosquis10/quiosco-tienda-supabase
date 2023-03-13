import Layout from '../layout/Layout'
import useQuiosco from '../hooks/useQuiosco'
import ResumenCard from '../components/ResumenCard'

export default function Resumen() {
  const { pedido } = useQuiosco()
  return (
    <Layout pagina={'- Resumen'}>
      <h2 className="text-4xl uppercase font-bold text-slate-700 mt-10">
        Resumen
      </h2>
      <p className="text-2xl my-5 text-slate-700 font-bold">Revisa tu pedido</p>

      <div className="grid grid-cols-1">
        {pedido.length === 0 ? (
          <p className="text-2xl my-5 text-slate-600 font-bold">
            No hay elementos en tu orden
          </p>
        ) : (
          pedido?.map((producto) => (
            <ResumenCard key={producto.id} producto={producto} />
          ))
        )}
      </div>
    </Layout>
  )
}
