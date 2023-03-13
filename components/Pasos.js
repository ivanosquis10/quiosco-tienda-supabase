import { useRouter } from 'next/router'

const pasos = [
  { paso: 1, nombre: 'Menú', url: '/' },
  { paso: 2, nombre: 'Resumen', url: '/resumen' },
  { paso: 3, nombre: 'Datos y total', url: '/total' },
]

export default function Pasos() {
  const router = useRouter()

  const calcularProgreso = () => {
    let valor
    if (router.pathname === '/') {
      valor = 2
    } else if (router.pathname === '/resumen') {
      valor = 46
    } else {
      valor = 100
    }

    return valor
  }

  return (
    <>
      <div className="flex items-center justify-between mb-5">
        {pasos.map((paso) => (
          <button
            onClick={() => {
              router.push(paso.url)
            }}
            className="font-bold text-slate-800 text-xl lg:text-2xl"
            key={paso.paso}
          >
            {paso.nombre}
          </button>
        ))}
      </div>
      <div className="bg-slate-200 mb-10">
        <div
          className="rounded-full bg-amber-500 h-2 text-xs leading-none text-center text-white w-10"
          style={{ width: `${calcularProgreso()}%` }}
        ></div>
      </div>
    </>
  )
}
