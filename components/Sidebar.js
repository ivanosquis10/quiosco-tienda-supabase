import Image from 'next/image'
import useQuiosco from '../hooks/useQuiosco'
import Categoria from './Categoria'

export default function Sidebar() {
  const { categorias } = useQuiosco()
  return (
    <>
      <div className="flex justify-center">
        <Image
          className=""
          src="/logo.svg"
          width={150}
          height={100}
          alt="logotipo kiosko"
        />
      </div>
      <nav className="mt-5 mb-2">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </nav>
    </>
  )
}
