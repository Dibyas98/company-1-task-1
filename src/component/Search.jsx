import React, { useContext, useRef } from 'react'
import './search.css'
import { Store } from './Data'

export default function Search() {
    const {setRecipe} = useContext(Store)
    const searchRef = useRef()
    const handelSearch= () =>{
        setRecipe()
    }
    
  return (
    <div className='search'>
      <input type="text" name="" id="" />
      <button onClick={handelSearch}>Search</button>
    </div>
  )
}
