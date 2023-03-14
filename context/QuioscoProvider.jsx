import { useEffect, useState, createContext } from 'react'
import { supabase } from '../supabase/supabase'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

const QuioscoContext = createContext()

export function QuioscoProvider({ children }) {
  const [categorias, setCategorias] = useState([])
  const [categoriaActual, setCategoriaActual] = useState({})
  const [producto, setProducto] = useState({})
  const [modal, setModal] = useState(false)
  const [pedido, setPedido] = useState([])

  const router = useRouter()

  const obtenerCategorias = async () => {
    try {
      const { data } = await supabase.from('categoria').select('*')
      setCategorias(data)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    obtenerCategorias()
  }, [])

  useEffect(() => {
    setCategoriaActual(categorias[0])
  }, [categorias])

  const handleCategoriaActual = (id) => {
    const categoria = categorias.filter((cate) => cate.id === id)
    setCategoriaActual(categoria[0])
    router.push('/')
  }

  const handleSetProducto = (product) => {
    setProducto(product)
  }

  const handleChangeModal = () => {
    setModal(!modal)
  }

  const handleAgregarPedido = ({ categoriaId, ...producto }) => {
    // valida si el producto esta o no en el state
    if (pedido.some((productoState) => productoState.id === producto.id)) {
      // en caso de yes, Actualizar la cantidad
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

  const handleEditarCantidades = (id) => {
    const productoActualizar = pedido.filter((producto) => producto.id === id)
    setProducto(productoActualizar[0])
    setModal(!modal)
  }

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
      }}
    >
      {children}
    </QuioscoContext.Provider>
  )
}

export default QuioscoContext
