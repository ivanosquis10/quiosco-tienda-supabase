import { useEffect, useState, createContext } from 'react'
import { supabase } from '../supabase/supabase'

const QuioscoContext = createContext()

export function QuioscoProvider({ children }) {
  const [categorias, setCategorias] = useState([])
  const [categoriaActual, setCategoriaActual] = useState({})
  const [producto, setProducto] = useState({})

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
  }

  const handleSetProducto = (product) => {
    setProducto(product)
  }

  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleCategoriaActual,
        producto,
        handleSetProducto,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  )
}

export default QuioscoContext
