import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
 export const BasketContext= createContext()
function BasketProvider({children}) {

const [Basket, setBasket] = useState([])

function addBasket(obj) {
  setBasket([...Basket,{...obj,count:1}])

}
let value={Basket,setBasket,addBasket}
  return (
    <BasketContext.Provider value={value}>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider