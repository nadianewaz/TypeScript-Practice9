import React, { useReducer } from 'react'

const initialState = {
    count : 0
}
const INCREMENT = "INCREMENT"
const INCREMENTBYAMOUNT = "INCREMENTBYAMOUNT"
const DECREMENT = "DECREMENT"
const RESET = "RESET" 

type counterStateType = {
    count : number 
}
type IncrementActionType = {type: "INCREMENT"}
type IncrementByAmount = {type: "INCREMENTBYAMOUNT" , payload : number}  
type DecrementActionType = {type: "DECREMENT"}
type ResetActionType = {type: "RESET"}

type CounterActionType = IncrementActionType | IncrementByAmount | DecrementActionType | ResetActionType;

const reducer = (state : counterStateType, action: CounterActionType) => {
    switch (action.type){
        case  "INCREMENT":
            return{count: state.count +1}
        case  "INCREMENTBYAMOUNT":
            return{count: state.count + action.payload}
        case  "DECREMENT":
            return{count: state.count -1}
        case  "RESET":
            return{count: 0}
        
            default: throw new Error();

    }

}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <h2>Count : {state.count}</h2>

    <button onClick={ () => {
        dispatch({type : INCREMENT}); 
    }}>Increment</button>
    <button onClick={ () => {
        dispatch({type : INCREMENTBYAMOUNT, payload: 5}); 
    }}>IncrementByAmount</button>

    <button onClick={ () => {
        dispatch({type : DECREMENT}); 
    }}>Decrement</button>

    <button onClick={ () => {
        dispatch({type : RESET}); 
    }}>Reset</button>
    
    
    
    </>
  )
}

export default Counter