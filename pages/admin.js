import useSWR from 'swr'
import Orden from '../components/Orden'
import AdminLayout from '../layout/AdminLayout'

export default function Admin() {
  const fetcher = async () => {
    try {
      const res = await fetch('/api/ordenes')
      const { data } = await res.json()
      return data
    } catch (e) {
      console.error(e)
    }
  }
  const {
    data: dataOrdenes,
    error,
    isLoading,
  } = useSWR('/api/ordenes', fetcher)

  return (
    <AdminLayout pagina={'Admin'}>
      <div>
        <h1 className="text-4xl uppercase font-bold text-slate-100">
          Panel de Administración
        </h1>
        <p className="text-2xl my-5 text-slate-300 font-bold">
          Administra las órdenes
        </p>
      </div>

      {dataOrdenes && dataOrdenes.length
        ? dataOrdenes.map((orden) => <Orden key={orden.id} orden={orden} />)
        : 'Todavía no hay órdenes!'}
    </AdminLayout>
  )
}
