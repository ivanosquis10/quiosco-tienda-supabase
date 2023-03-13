import { useState } from 'react'
import Image from 'next/image'
import { formatMoney } from '../helpers'
import useQuiosco from '../hooks/useQuiosco'

export default function ModalProducto() {
  const { producto, handleChangeModal, handleAgregarPedido } = useQuiosco()
  const { nombre, imagen, precio } = producto

  const [cantidad, setCantidad] = useState(1)

  return (
    <div
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-slate-900/90 transition-opacity "></div>

      <div class="fixed inset-0 z-10 overflow-hidden backdrop-blur">
        <div class="flex items-center justify-center h-screen px-3">
          <div class="relative transform overflow-hidden rounded-lg shadow-xl shadow-slate-600 transition-all w-full md:w-6/12 mx-auto">
            <div class="bg-slate-900 p-6 text-slate-100">
              <div class="flex flex-col lg:flex-row justify-center gap-4 ">
                {/*imagen */}
                <div class="flex flex-shrink-0 items-center justify-center">
                  <Image
                    className="rounded-md"
                    src={`/${imagen}.jpg`}
                    width={250}
                    height={400}
                    alt={`Imagen del platillo ${nombre}`}
                  />
                </div>

                {/*boody */}
                <div class="text-start flex flex-col justify-between">
                  <div class="mt-2">
                    <h3 class="text-4xl font-bold" id="modal-title">
                      {nombre}
                    </h3>
                    <p className="text-2xl font-bold mt-2 text-slate-300">
                      Precio:{' '}
                      <span className="font-bold text-2xl text-slate-100">
                        {precio}
                      </span>
                    </p>

                    <div className="flex items-center gap-4 mt-5 p-2 w-fit rounded-md bg-slate-800">
                      <button
                        className="border border-transparent hover:border-slate-200 rounded-full"
                        type="button"
                        onClick={() => {
                          if (cantidad >= 5) return
                          setCantidad(cantidad + 1)
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-10 h-10"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </button>
                      <p className="text-3xl font-bold"> {cantidad} </p>
                      <button
                        className="border border-transparent hover:border-slate-200 rounded-full"
                        type="button"
                        onClick={() => {
                          if (cantidad <= 1) return
                          setCantidad(cantidad - 1)
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-10 h-10"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center justify-center">
                    <button
                      type="button"
                      class="w-11/12 justify-center rounded-md bg-slate-800 p-2 text-xl font-bold text-white shadow-sm hover:bg-slate-700 mt-5 uppercase"
                      onClick={() =>
                        handleAgregarPedido({ ...producto, cantidad })
                      }
                    >
                      Añadir al pedido
                    </button>
                    <button
                      type="button"
                      class="rounded-md bg-red-600 p-2 text-xl font-bold text-white shadow-sm hover:bg-red-500 mt-5"
                      onClick={() => handleChangeModal()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
