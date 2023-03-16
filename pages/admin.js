import useSWR from 'swr'
import AdminLayout from '../layout/AdminLayout'
import Orden from '../components/Orden'
import Spinner from '../components/Spinner'

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
        <h1 className="text-4xl uppercase font-bold text-slate-800">
          Panel de Administración
        </h1>
        <p className="text-2xl my-5 text-gray-700 font-bold">
          Administra las órdenes
        </p>
      </div>

      {isLoading ? (
        <Spinner />
      ) : (
        dataOrdenes.map((orden) => <Orden key={orden.id} orden={orden} />)
      )}

      {dataOrdenes && dataOrdenes.length === 0 && 'No hay órdenes pendientes!'}
    </AdminLayout>
  )
}
