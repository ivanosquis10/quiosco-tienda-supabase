import { useEffect, useState, createContext } from 'react'

const QuioscoContext = createContext()

export function QuioscoProvider({ children }) {
  return (
    <QuioscoContext.Provider value={{}}>{children}</QuioscoContext.Provider>
  )
}

export default QuioscoContext
