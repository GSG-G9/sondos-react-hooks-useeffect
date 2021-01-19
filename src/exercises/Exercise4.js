import React, {useState, useEffect} from 'react'

export default function Exercise4() {

  const [searchWord, setSearchWord] = useState('');
  const [image, setImage] = useState('');

  const handleChange = (event) => {
    setSearchWord(event.target.value)
  }

  useEffect(() => {
    setImage(`https://robohash.org/${searchWord}`)
  },[searchWord])

  return (
    <div>
      <input
      type="text"
      placeholder="Enter any text to generate a unique image"
      onChange={handleChange}
      style={{"width": "25vw"}}>
        </input><br></br>
      {searchWord && <img src={image} alt="unique"></img>}
    </div>
  )
}
