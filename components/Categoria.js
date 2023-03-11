import Image from 'next/image'
import useQuiosco from '../hooks/useQuiosco'

export default function Categoria({ categoria }) {
  const { categoriaActual, handleCategoriaActual } = useQuiosco()
  const { nombre, icono, id } = categoria
  return (
    <div
      className={`${
        categoriaActual?.id === id && 'bg-amber-500/70'
      } flex items-center gap-4 w-full shadow-md rounded-md p-2 hover:bg-amber-500/80 ease-in-out duration-200`}
    >
      <Image
        width={70}
        height={70}
        src={`/icono_${icono}.svg`}
        alt={`Imagen icono de ${nombre}`}
        priority
      />
      <button
        type="button"
        className="text-2xl font-bold text-slate-700 hover:cursor-pointer"
        onClick={() => handleCategoriaActual(id)}
      >
        {nombre}
      </button>
    </div>
  )
}
