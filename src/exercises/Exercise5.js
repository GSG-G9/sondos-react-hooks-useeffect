import React, {useState, useEffect} from 'react';
import Email from '../components/Email'

export default function Exercise5() {

  const [userData, setUserData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  
  useEffect(() => {
    
    let isCancelled = false;
    
      fetch('https://randomuser.me/api/')
      .then(res=>res.json())
      .then(res=>{
        if(!isCancelled){
          setIsLoaded(true)
          setUserData(res.results[0])
          setEmail(res.results[0].email)
          setPhone(res.results[0].phone)
        }
      })
    
    return () => {
      isCancelled = true;
    }
   
  },[])

  
  return ( 
    <>
      {isLoaded 
        ?
        <div>
          {userData &&
          <div className="profile">
            <img src={userData.picture.large} alt="profile"></img>
            <p>{userData && userData.name.title +" "+ userData.name.first + " " + userData.name.last}</p>
            <Email word='Email' email={email}/>
            <Email  word='Phone Number' email={phone}/>
            <p>Address: {`${userData.location.country}, ${userData.location.state}, ${userData.location.city}`}</p>
          </div>}
        </div>
       :
        <h1>Loading ...</h1>}
    </>
   
  )
}
