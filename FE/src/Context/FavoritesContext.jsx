import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
export const FavoritesContext=createContext()
function FavoritesProvider({children}) {
    const [Favorites, setFavorites] = useState([])
    let value={
        Favorites,setFavorites
    }
 function AddFavorites(obj) {
 const finded= Favorites.find((item)=>item._id==obj.id)
  if (finded) {
   setFavorites([...Favorites])
  }
     else{
        setFavorites([...obj,Favorites])
     }   
    }  
    function removeFavorites(obj) {
        const finded=Favorites.find((item)=>item.id==obj.id)
        setFavorites(finded)
    }
    function checkFavorites(obj) {
        const finded=Favorites.find((item)=>item.id===obj.id)
        setFavorites(finded)
    }
  return (
    <FavoritesContext.Provider value={value}>
        {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesProvider