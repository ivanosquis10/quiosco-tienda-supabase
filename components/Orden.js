import Image from 'next/image'
import { formatMoney } from '../helpers'

export default function Orden({ orden }) {
  const { id, nombre, pedido, total } = orden
  return (
    <div className="p-5 rounded-md bg-slate-700 mb-4">
      <h3 className="text-2xl text-gray-300 text-medium">
        Orden: <span className="text-white font-bold ">{id}</span>
      </h3>
      <p className="text-lg my-3 text-gray-300 font-medium">
        Cliente: <span className="text-white font-bold ">{nombre}</span>
      </p>

      <div>
        {pedido.map((platillo) => (
          <div
            key={platillo.id}
            className="py-3 flex flex-col md:flex-row items-center border-b last-of-type:border-0"
          >
            <div className="w-32">
              <Image
                className="rounded-md"
                width={150}
                height={100}
                src={`/${platillo.imagen}.jpg`}
                alt={`Imagen del platillo ${platillo.nombre} `}
                priority
              />
            </div>

            <div className="p-5">
              <h4 className="text-xl font-bold text-white">
                {platillo.nombre}
              </h4>
              <p className="text-lg font-medium text-gray-400">
                Cantidad:{' '}
                <span className="text-white font-bold">
                  {platillo.cantidad}
                </span>{' '}
              </p>
            </div>
          </div>
        ))}
        <div className="md:flex md:items-center md:justify-between mt-5">
          <p className="font-bold text-4xl text-white ">
            Total a pagar: {formatMoney(total)}
          </p>
        </div>
      </div>
    </div>
  )
}
