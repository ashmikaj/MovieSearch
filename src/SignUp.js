import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import  './App.css';

const SignUp = () =>{


    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
   const navigate = useNavigate();
    

   var userbase = JSON.parse(localStorage.getItem('users'))|| [];

   const handleButtonClick = () =>{

    const dataToUpload = [...userbase, { username: username, password: password}];

    localStorage.setItem('users', JSON.stringify(dataToUpload));
    navigate('/login');
   }



    return (
        <div>
            <h1>welcome to movie land!</h1>
         <div className='username'>
        <input type='email' placeholder='username' className='email' value = {username} onChange={(e)=>{setUserName(e.target.value)}}></input>
        </div>
        <div className='password'>
        <input type='password' placeholder='password' className='pwd' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
        </div>
        <button onClick={handleButtonClick} className='button'>SignUp</button>
        </div>
       

    )
}


export default SignUp;