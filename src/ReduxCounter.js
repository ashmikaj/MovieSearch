import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { plusNumber, subNumber } from './actions';
import  "./App.css";


const ReduxCounter = () =>  {


    const myState = useSelector((state)=>state.updatedState)
    const dispatch = useDispatch();
    return(
        <div className='counter'>
            <button onClick={()=>{dispatch(subNumber())}}>-</button>
            <input className='counterInput' type='quantity' value={myState}></input>
            <button onClick={()=>{dispatch(plusNumber())}}>+</button>
        </div>
    )
}



export default ReduxCounter;