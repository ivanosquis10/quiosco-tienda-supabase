import Head from 'next/head'
import Modal from 'react-modal'
import Sidebar from '../components/Sidebar'
import ModalProducto from '../components/ModalProducto'
import useQuiosco from '../hooks/useQuiosco'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
  },
}

Modal.setAppElement('#__next')

export default function Layout({ children, pagina }) {
  const { modal } = useQuiosco()
  return (
    <>
      <Head>
        <title>{`Menú ${pagina}`}</title>
        <meta name="description" content="Quiosco Cafetería" />
      </Head>

      <div className="md:flex md:flex-row-reverse">
        <aside className="md:fixed md:top-0 md:left-0 md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <Sidebar />
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen">
          <div className="p-10">{children}</div>
        </main>
      </div>
      {modal && <ModalProducto />}
    </>
  )
}
