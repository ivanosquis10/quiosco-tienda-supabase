import Image from 'next/image'
import { formatMoney } from '../helpers'
import useQuiosco from '../hooks/useQuiosco'

export default function ResumenCard({ producto }) {
  return (
    <div className="rounded-md bg-slate-200 shadow p-5 mb-3 flex flex-col md:flex-row gap-10 items-center">
      <div className="md:w-1/6">
        <Image
          className="rounded-md"
          width={200}
          height={200}
          alt={`Imagen producto ${producto.nombre}`}
          src={`/${producto.imagen}.jpg`}
        />
      </div>

      <div className="md:w-4/6">
        <p className="text-3xl font-bold text-slate-800">{producto.nombre}</p>
        <p className="text-xl font-bold mt-2 text-slate-700">
          Cantidad: {producto.cantidad}
        </p>
        <p className="text-xl font-bold text-slate-700 mt-2">
          Precio: {formatMoney(producto.precio)}
        </p>

        <p className="text-base text-gray-700 mt-2">
          Subtotal: {formatMoney(producto.precio * producto.cantidad)}
        </p>
      </div>

      <div className="w-10/12 lg:w-3/12 flex flex-col items-center">
        <button
          type="button"
          className="bg-slate-700 flex items-center justify-center gap-2 px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full text-center hover:bg-slate-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
          Editar
        </button>

        <button
          type="button"
          className="bg-red-600 flex items-center justify-center px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full text-center mt-3 hover:bg-red-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          Eliminar
        </button>
      </div>
    </div>
  )
}
