import React  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Login";
import MovieLand  from './MovieLand';
import SignUp from "./SignUp";
import ReduxCounter from "./ReduxCounter";
import store from './store';
import { Provider } from 'react-redux';
import './App.css';
//804b9a2c

store.subscribe(()=>{ console.log(store.getState())});



const App =()=> {


  return (
    <Provider store={store}>
     <BrowserRouter>
      <Routes>
          <Route index path="/" element={<Login />}/>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path='/home' element={<MovieLand />} />
          <Route path='/login' element={<Login />} />
          <Route path='/redux' element = {<ReduxCounter />} />
    
      </Routes>
    </BrowserRouter>
    </Provider>
  
  );
}
export default App;
