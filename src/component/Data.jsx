import React, { createContext, useState } from 'react'

export const Store = createContext();
export default function Data({children}) {
    const [recipe,setRecipe] = useState([])
  return (
    <Store.Provider value={{recipe,setRecipe}}>
        {children}
    </Store.Provider>
  )
}
