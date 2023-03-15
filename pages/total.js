import { useEffect, useCallback } from 'react'
import Layout from '../layout/Layout'
import useQuiosco from '../hooks/useQuiosco'
import { formatMoney } from '../helpers'

export default function Total() {
  const { pedido, nombre, setNombre, handleOrden, total } = useQuiosco()

  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === '' || nombre.length < 3
  }, [pedido, nombre])

  useEffect(() => {
    comprobarPedido()
  }, [pedido, comprobarPedido])

  return (
    <Layout pagina={'- Total'}>
      <h2 className="text-4xl uppercase font-bold text-slate-700 mt-10">
        Total y confirmar pedido
      </h2>
      <p className="text-2xl my-5 text-slate-700 font-bold">
        Confirma tu pedido a continuación
      </p>

      <form onSubmit={handleOrden}>
        <div>
          <label
            className="block text-xl font-bold text-slate-800 uppercase"
            htmlFor="nombre"
          >
            Nombre
          </label>
          <input
            id="nombre"
            className="w-full lg:w-1/3 bg-gray-200 text-xl rounded-md mt-3 py-2 text-slate-800 px-2 outline-none"
            type="text"
            autoComplete="off"
            placeholder="Ingresa tu nombre..."
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mt-10">
          <p className="text-2xl text-slate-700 font-medium">
            Total a pagar:{' '}
            <span className="font-bold text-slate-800">
              {formatMoney(total)}
            </span>
          </p>
        </div>

        <input
          type="submit"
          className={` ${
            comprobarPedido()
              ? 'bg-amber-200'
              : 'bg-amber-600 hover:bg-amber-500 cursor-pointer'
          } w-full lg:w-auto px-5 py-2 rounded-md uppercase text-slate-100 font-bold text-center mt-5 ease-in-out duration-300 outline-none`}
          value="confirmar pedido"
          disabled={comprobarPedido()}
        />
      </form>
    </Layout>
  )
}
