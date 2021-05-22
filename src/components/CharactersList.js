import React from 'react'
import Character from './Character'



const CharactersList = ({items,isLoading}) => {
  
    return isLoading ? <div className="load"></div> :
    
        <section className="listOfCharacters">
       {
           
           items.map(item=>(
            <Character key={item.id} item={item}></Character>
        ))
       }
    </section>
    
    
}

export default CharactersList