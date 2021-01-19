import React, {useState, useEffect} from 'react'

export default function Exercise2() {

  const [xDimension,setXDimension] = useState(0);
  const [yDimension,setYDimension] = useState(0);
  const [color, setColor] = useState('')
  
  const handlePosition = (event) => {
    setXDimension(event.clientX);
    setYDimension(event.clientY)
  }
 
  useEffect(() => {
    document.addEventListener('mousemove', handlePosition)
    if(xDimension > 0.5*window.innerWidth){
      setColor('tomato')
    } else{
      setColor('blue')
    }
    return () => {
      document.removeEventListener('mousemove', handlePosition)
    }
  },[color, xDimension])

  return (
    <div className="position" style={{backgroundColor:color}}>
      <p>I am now on X: {xDimension} and Y: {yDimension}</p>
    </div>
  )
}
