import Image from 'next/image'
import { formatMoney } from '../helpers'
import useQuiosco from '../hooks/useQuiosco'

export default function Producto({ producto }) {
  const { handleSetProducto } = useQuiosco()
  const { imagen, nombre, precio } = producto

  return (
    <div className="border p-3 rounded-md bg-slate-300/60">
      <Image
        className="rounded-md"
        src={`/${imagen}.jpg`}
        width={400}
        height={500}
        alt={`Imagen del platillo ${nombre}`}
      />
      <div>
        <h3 className="text-xl font-bold text-slate-800 mt-2">{nombre}</h3>
        <p className="text-xl font-bold text-slate-800">
          Precio: <span className="font-bold">{formatMoney(precio)}</span>
        </p>
      </div>
      <button
        className="w-full bg-slate-900 font-bold mt-5 p-3 uppercase text-slate-100 rounded-md hover:bg-slate-800 ease-in-out duration-300"
        onClick={() => handleSetProducto(producto)}
      >
        agregar
      </button>
    </div>
  )
}
