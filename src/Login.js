import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const Login = () =>{


    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const user = JSON.parse(localStorage.getItem('users'));
   const navigate = useNavigate();



    const handleButtonClick = (e) =>{
      if(user.username ===username && user.password===password ){
        alert('you are now loggedIn')
        navigate('/home');
      }
      else alert('Try again')
      
    }


    return (
    <div className='login'>
       <h5> Kindly Login to your account!</h5>
       <div className='username'>
        <input type='email' placeholder='username' className='email' value = {username} onChange={(e)=>{setUserName(e.target.value)}}></input>
        </div>
        <div className='password'>
        <input type='password' placeholder='password' className='pwd' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
        </div>
        <button onClick={handleButtonClick} className='button'>Login</button>
        <div className='flexdiv'>
        <p onClick={()=>{navigate('/sign-up')}}>click here to sign in or</p>
        <p onClick={()=>{navigate('/home')}}>continue without sign In</p>
        </div>
        <img
      src="https://149512919.v2.pressablecdn.com/wp-content/uploads/2021/12/philly-movies-hero-banner.jpg"
      alt="Boat on Calm Water"
      className='image'
    />
  
    </div>
    )
}



export default Login;