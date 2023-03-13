import Image from 'next/image'
import { formatMoney } from '../helpers'
import useQuiosco from '../hooks/useQuiosco'

export default function ModalProducto() {
  const { handleChangeModal, producto } = useQuiosco()
  const { nombre, imagen, precio } = producto

  return (
    <div
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-slate-900/90 transition-opacity "></div>

      <div class="fixed inset-0 z-10 overflow-hidden">
        <div class="flex items-center justify-center h-screen px-3">
          <div class="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all  w-full md:w-6/12 mx-auto">
            <div class="bg-white p-6">
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
                    <h3
                      class="text-4xl font-bold text-slate-800"
                      id="modal-title"
                    >
                      {nombre}
                    </h3>
                    <p className="text-xl font-bold text-slate-600 mt-1">
                      Precio:{' '}
                      <span className="font-bold text-2xl text-slate-800">
                        {formatMoney(precio)}
                      </span>
                    </p>
                  </div>
                  <div className="">
                    <button
                      type="button"
                      class="w-full justify-center rounded-md bg-red-600 px-4 py-2 text-xl font-bold text-white shadow-sm hover:bg-red-500 mt-5"
                      onClick={() => handleChangeModal()}
                    >
                      Cerrar
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

/*
    <div className="md:flex gap-10 p-10 h-full">
      <div className="md:w-1/3 border">
        <Image
          className="rounded-md"
          src={`/${imagen}.jpg`}
          width={250}
          height={400}
          alt={`Imagen del platillo ${nombre}`}
        />
      </div>

      <div className="md:w-2/3 border">
        <div className="flex justify-end">
          <button onClick={() => handleChangeModal()}>cerrar</button>
        </div>

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
    </div>
    */
