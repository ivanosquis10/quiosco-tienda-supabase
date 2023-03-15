import Image from 'next/image'
import useQuiosco from '../hooks/useQuiosco'
import { formatMoney } from '../helpers'

export default function Producto({ producto }) {
  const { handleSetProducto, handleChangeModal } = useQuiosco()
  const { imagen, nombre, precio } = producto

  return (
    <div className="flex flex-col justify-between p-3 rounded-md bg-slate-300/60 h-full shadow-md">
      <div className="flex justify-center">
        <Image
          className="rounded-md"
          src={`/${imagen}.jpg`}
          width={250}
          height={400}
          alt={`Imagen del platillo ${nombre}`}
        />
      </div>
      <div className="px-2">
        <h3 className="text-2xl font-bold text-slate-800 whitespace-pre-wrap tracking-tight mt-2">
          {nombre}
        </h3>
        <p className="text-xl font-bold text-slate-600 mt-1">
          Precio:{' '}
          <span className="font-bold text-2xl text-slate-800">
            {formatMoney(precio)}
          </span>
        </p>
      </div>
      <button
        className="w-full bg-slate-900 font-bold mt-5 p-3 uppercase text-slate-100 rounded-md hover:bg-slate-800 ease-in-out duration-300"
        onClick={() => {
          handleChangeModal()
          handleSetProducto(producto)
        }}
      >
        agregar
      </button>
    </div>
  )
}
