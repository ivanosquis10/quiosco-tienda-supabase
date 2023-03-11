import Image from 'next/image'

export default function Producto({ producto }) {
  const { imagen, nombre, precio } = producto
  return (
    <div>
      <Image
        className=""
        src={`/${imagen}.jpg`}
        width={200}
        height={400}
        alt={`Imagen del platillo ${nombre}`}
      />
      <p>{nombre}</p>
      <p>${precio}</p>
    </div>
  )
}
