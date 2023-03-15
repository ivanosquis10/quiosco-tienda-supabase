import { useEffect, useState, createContext } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '../supabase/supabase'
import { toast } from 'react-toastify'

const QuioscoContext = createContext()

export function QuioscoProvider({ children }) {
  const [categorias, setCategorias] = useState([])
  const [categoriaActual, setCategoriaActual] = useState({})
  const [producto, setProducto] = useState({})
  const [modal, setModal] = useState(false)
  const [pedido, setPedido] = useState([])
  const [nombre, setNombre] = useState('')
  const [total, setTotal] = useState(0)

  const router = useRouter()

  const obtenerCategorias = async () => {
    try {
      const { data } = await supabase.from('categoria').select('*')
      setCategorias(data)
    } catch (e) {
      console.error(e)
    }
  }

  // Se encarga de cargar las categorias
  useEffect(() => {
    obtenerCategorias()
  }, [])

  // Se encargar de obtener la categoria actual y setearla en el state
  useEffect(() => {
    setCategoriaActual(categorias[0])
  }, [categorias])

  // Se encargar de hacer el calculo de todos los productos y sumarlos en el total a pagar
  useEffect(() => {
    const nuevoTotal = pedido.reduce(
      (total, producto) => producto.precio * producto.cantidad + total,
      0
    )

    setTotal(nuevoTotal)
  }, [pedido])

  // Se encarga de detectar la categoria actual segun el id que reciba y setearla
  const handleCategoriaActual = (id) => {
    const categoria = categorias.filter((cate) => cate.id === id)
    setCategoriaActual(categoria[0])
    router.push('/')
  }

  // Se encarga de setear los productos en el state
  const handleSetProducto = (product) => {
    setProducto(product)
  }

  // Se encarga de manejar el state del modal
  const handleChangeModal = () => {
    setModal(!modal)
  }

  // Se encarga de agregar los productos al carrito
  const handleAgregarPedido = ({ categoriaId, ...producto }) => {
    // valida si el producto esta o no en el state
    if (pedido.some((productoState) => productoState.id === producto.id)) {
      // en caso de si este, actualiza la cantidad
      const pedidoActualizado = pedido.map((productoState) =>
        productoState.id === producto.id ? producto : productoState
      )
      setPedido(pedidoActualizado)

      toast.success('Pedido actualizado!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      })
    } else {
      // en caso de no, se agrega al state
      setPedido([...pedido, producto])
      toast.success('Agregado el pedido!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      })
    }

    setModal(false)
  }

  // Se encarga de actualizar las cantidad en caso de que se edite
  const handleEditarCantidades = (id) => {
    const productoActualizar = pedido.filter((producto) => producto.id === id)
    setProducto(productoActualizar[0])
    setModal(!modal)
  }

  // se encarga de eliminar el producto dependiendo del id
  const handleEliminar = (id) => {
    const productoActualizado = pedido.filter((producto) => producto.id !== id)
    setPedido(productoActualizado)

    toast.error('Eliminado correctamente!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
    })
  }

  // Se encarga de tomar el pedido, el nombre y la cantidad y agregarla a la base de datos en la tabla de ordenes para que luego sea leida en la parte del admin
  async function handleOrden(e) {
    e.preventDefault()
    try {
      const { data } = await supabase.from('orden').insert({
        nombre,
        pedido,
        total,
      })

      // reseteamos la app
      setCategoriaActual(categorias[0])
      setPedido([])
      setNombre('')
      setTotal(0)

      toast.success('Pedido realizado correctamente!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      })

      setTimeout(() => {
        router.push('/')
      }, 3000)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleCategoriaActual,
        producto,
        handleSetProducto,
        modal,
        handleChangeModal,
        handleAgregarPedido,
        pedido,
        handleEditarCantidades,
        handleEliminar,
        nombre,
        setNombre,
        handleOrden,
        total,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  )
}

export default QuioscoContext
