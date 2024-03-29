import Head from 'next/head'
import Image from 'next/image'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function AdminLayout({ children, pagina }) {
  return (
    <>
      <Head>
        <title>{`Café - ${pagina}`}</title>
        <meta name="description" content="Quiosco Cafetería" />
      </Head>

      <div className="md:flex bg-slate-800">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 p-5 bg-slate-600">
          <Image
            className="mb-10"
            width={300}
            height={100}
            src="/logo.svg"
            alt="imagen logotipo"
          />
          <p className="text-slate-800 font-bold">
            Made by Ivanosquis13 on twitter
          </p>
          <p className="text-slate-800 font-bold">
            Made by Ivanosquis10 on github
          </p>
        </aside>

        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">{children}</div>
        </main>
      </div>
      <ToastContainer />
    </>
  )
}
