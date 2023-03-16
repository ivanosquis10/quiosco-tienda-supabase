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
  const { data: dataOrdenes, isLoading } = useSWR('/api/ordenes', fetcher, {
    refreshInterval: 1000,
  })

  return (
    <AdminLayout pagina={'Admin'}>
      <div>
        <h1 className="text-4xl uppercase font-bold text-gray-200 mb-10">
          Panel de Administración
        </h1>
      </div>

      {isLoading ? (
        <Spinner />
      ) : (
        dataOrdenes.map((orden) => <Orden key={orden.id} orden={orden} />)
      )}

      {dataOrdenes && dataOrdenes.length === 0 && (
        <p className="text-xl uppercase font-bold text-white">
          No hay órdenes pendientes!
        </p>
      )}
    </AdminLayout>
  )
}
