import React, {useState} from 'react'

function Search({search}) {
    const[text,setText] = useState('')

    const onSearch= (q)=>{
        setText(q)
        search(q)
    }

    return (
        <section className="searchBar">
           <form>
             <input type="text"
             className="form-control"
             placeholder="Find a character"
             autoFocus
             onChange={(e)=>onSearch(e.target.value)}
             value={text}/> 
           </form>
        </section>
    )
}

export default Search
