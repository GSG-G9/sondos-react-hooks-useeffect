import React, {useState, useEffect} from 'react'

export default function Exercise5() {


  const [userData, setUserData] = useState();

  useEffect(() => {
    
    let isCancelled = false;
    if(!isCancelled){
      fetch('https://randomuser.me/api/')
      .then(res=>res.json())
      .then(res=>setUserData(res.results[0]))
    
    }
    return () => {

      console.log('return')
      isCancelled = true;
    }
   
  },[])


  return ( 
    <div>
      {userData &&
      <div className="profile">
        <img src={userData.picture.large} alt="profile"></img>
        <p>{userData && userData.name.title +" "+ userData.name.first + " " + userData.name.last}</p>
        <button>edit</button>
        {/* {isNameEditing? <input placeholder="edit your name"></input> ?} */}
        <p>Email: {userData.email}</p>
        <p>Address: {`${userData.location.country}, ${userData.location.state}, ${userData.location.city}`}</p>
        <p>Phone Number: {userData.phone}</p>
      </div>}
    </div>
  )
}
