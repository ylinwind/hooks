import React, { useState , useReducer } from 'react'

const _UseReducer = () => {
    const initState = {
        count : 1,
        list : []
    }
    const [ state , dispath ] = useReducer((state,action)=>{
        switch(action.type){
            case 'add':
                return {
                    ...state,
                    count : action.count + 1
                }
            case 'sub':
                return {
                    ...state,
                    count : action.count - 1
                }
            default:
                return state;
        }
    },initState);
    return (
        <div>
            useReduer
            <p>count : {state.count}</p>
            <button onClick={()=>{
                dispath({type:'add',count:state.count})
            }}>加</button>
            <button onClick={()=>{
                dispath({type:'sub',count:state.count})
            }}>减</button>
        </div>
    )
}

export default _UseReducer;