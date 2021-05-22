import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import CharactersList from './components/CharactersList';
import Footer from './components/Footer';
import axios from 'axios';
import React, {useEffect,useState} from 'react'

const hash="80ca407ba542eca13c032f0a3365036a"

function App() {
  const[items,setItems] = useState([])
  const[isLoading,setLoading] = useState(true)
  const [query,setQuery]=useState('')
 

  useEffect(()=>{
    const fetch = async()=>{
      if(query===''){
        // checking if bookmark array is empty or doesn't exist
        if(localStorage.getItem('bookmarks')==='[]' || !localStorage.getItem('bookmarks')){
          localStorage.setItem('bookmarks', '[]')
      const result = await axios(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=fd4a942a66d2402f073574d8ad7d2dd0&hash=${hash}`)
      console.log(result.data)
      setItems(result.data.data.results)
      setLoading(false)
      
    }else{
      let bookmark = JSON.parse(localStorage.getItem('bookmarks'))
      setItems(bookmark)
      setLoading(false)
    }
  }else{
    const result = await axios(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=fd4a942a66d2402f073574d8ad7d2dd0&hash=${hash}`)
    console.log(result.data.data.results)
    setItems(result.data.data.results)
    setLoading(false)
  }
}
    fetch()
  },[query])


  return (
    <div className="container">
      <Header/>
      <Search search={(q)=> setQuery(q)}/>
      <CharactersList items={items} isLoading={isLoading}/>
      <Footer/>
    </div>
  );
}

export default App;

// itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate}