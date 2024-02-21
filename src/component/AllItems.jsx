import React, { useContext } from 'react'
import './search.css'
import { Store } from './Data'
import Card from './Card';
export default function AllItems() {
    const {recipe} = useContext(Store);
    
  return (
    <>
    {
        recipe.length>0?recipe.map((ele)=>{
            return <Card></Card>
        }):<></>
    }
    </>
  )
}
