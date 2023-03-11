import Image from 'next/image'
import useQuiosco from '../hooks/useQuiosco'
import Categoria from './Categoria'

export default function Sidebar() {
  const { categorias } = useQuiosco()
  return (
    <>
      <Image
        className=""
        src="/logo.svg"
        width={250}
        height={100}
        alt="logotipo kiosko"
      />
      <nav className="mt-5 mb-2">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </nav>
    </>
  )
}
