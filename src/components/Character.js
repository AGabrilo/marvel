import React from 'react'
import { GoBookmark,GoTrashcan } from "react-icons/go";

const Character = ({item}) => {
    const bookmark = async (item)=>{
        
        var previousData = await JSON.parse(localStorage.getItem('bookmarks'))
        if((previousData.findIndex( x => x.id===item.id))===-1){
        previousData.push(item)
        await localStorage.setItem('bookmarks',JSON.stringify(previousData))
        }
        
      }

      const remove = (item)=>{

         window.localStorage.clear();
        
      }

    return (
        <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.thumbnail.path + "/portrait_xlarge.jpg"} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul className="icon-group">
            <li>
                <GoBookmark className="icon" onClick={()=>bookmark(item)} />
                
            </li>
            <li>
              <GoTrashcan className="icon" onClick={()=>remove(item)}/>
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default Character
