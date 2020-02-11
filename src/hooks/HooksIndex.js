import React, { useState } from 'react';
import UseEffect from './UseEffect';
import Parent_Son from './ParentComs';
import Parent from './parent&Son/Parent';
import _UseReducer from './useReducer';
import _UseRef from './userRef';

const HooksIndex = () => {
    const [ count , setCount ] = useState(0);
    return(
        <div>
            hooksIndex - count - {count}
            <p>
                <button onClick={()=>setCount(count + 1)}>add</button>
            </p>
        </div>
    )
}

export default _UseRef;