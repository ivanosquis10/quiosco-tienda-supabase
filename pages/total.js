import Layout from '../layout/Layout'

export default function Total() {
  // const handleOrden = (e) => {
  //  e.preventDefault()
  //  alert('agregando orden')
  //}

  return (
    <Layout pagina={'- Total'}>
      <h2 className="text-4xl uppercase font-bold text-slate-700 mt-10">
        Total y confirmar pedido
      </h2>
      <p className="text-2xl my-5 text-slate-700 font-bold">
        Confirma tu pedido a continuación
      </p>

      <form>
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
            autocomplete="off"
            placeholder="Ingresa tu nombre..."
          />
        </div>

        <div className="mt-10">
          <p className="text-2xl text-slate-700 font-medium">
            Total a pagar:{' '}
            <span className="font-bold text-slate-800">$200</span>
          </p>
        </div>

        <input
          type="submit"
          className="bg-amber-600 hover:bg-amber-500 w-full lg:w-auto px-5 py-2 rounded-md uppercase text-slate-100 font-bold text-center mt-5 cursor-pointer ease-in-out duration-300 outline-none"
          value="confirmar pedido"
        />
      </form>
    </Layout>
  )
}
