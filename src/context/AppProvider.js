import { createContext } from 'react'

export const AppContext = createContext()

export const AppProvider = (props) => {

  const hola = 'Hola des de un a variable global'

  const hola2="prueba 2"

  return (
    <AppContext.Provider value={{ hola,hola2}}>
      {props.children}
    </AppContext.Provider>
  )
}