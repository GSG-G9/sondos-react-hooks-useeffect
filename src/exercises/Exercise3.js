import React, {useState, useEffect} from 'react'

export default function Exercise3() {

  const [searchWord, setSearchWord] = useState('');
  const [gif, setGif] = useState('');
  const [notFound, setNotfound] = useState(null);

  const handleChange = (event) => {
    setSearchWord(event.target.value)
  }

  useEffect(() => {
    let isCancelled = false;
    if(!isCancelled){
      if(searchWord){
        fetch(`http://api.giphy.com/v1/gifs/search?q=${searchWord}&api_key=dc6zaTOxFJmzC`)
        .then(res=>res.json())
        .then(res=>{
          if(res.data.length === 0) return setNotfound('The gif you have searched for is not found')
          else return res.data[0].images.downsized_medium.url
        })
        .then(res=>setGif(res))
      }
    }
    return () => {
      isCancelled = true;
    }
   
  },[searchWord])

  return (
    <div>
      <input type="text" placeholder="Search for a gif" onChange={handleChange}></input><br></br>
      {searchWord && <img src={gif} alt="gif"></img>}
      {notFound && <p>{notFound}</p>}
    </div>
  )
}
