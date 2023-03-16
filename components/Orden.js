export default function Orden({ orden }) {
  const { id, nombre, pedido, total } = orden
  return (
    <div className="border-2 p-2 space-y-5">
      <h3 className="text-2xl font-bold text-slate-200">Orden: {id}</h3>
      <p className="text-lg my-3 text-slate-200 font-bold">Cliente: {nombre}</p>
    </div>
  )
}