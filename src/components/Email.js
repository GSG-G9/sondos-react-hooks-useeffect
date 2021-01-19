import React, {useState, useEffect} from 'react'

export default function Email(props) {

  const [nameIsEditing, setNameIsEditing] = useState(false);
  const [email, setEmail] = useState();
  const [editedEmail, setEditedEmail] = useState();
  const randomEmail= props.email;
  
  useEffect(()=>{
    setEmail(randomEmail);
  },[randomEmail])
  

  const handleChangeEmail = (event) => {
    setEditedEmail(event.target.value);
  }

  const handleSaveName = () => {
    if(editedEmail){
      setEmail(editedEmail);
      setNameIsEditing(false)
    }
  }

  const handleDeleteEmail = () => {
    setEmail("");
  } 

  return (
    <div className="email">
      <p>{props.word}: {email}</p>
      <button onClick={()=>setNameIsEditing(true)}>edit</button>
      {nameIsEditing &&
      <div>
        <input placeholder="edit your name" onChange={handleChangeEmail}></input>
        <button onClick={handleSaveName}>save</button>
      </div> }
      <button onClick={handleDeleteEmail}>delete</button>
  </div>
  )
}
