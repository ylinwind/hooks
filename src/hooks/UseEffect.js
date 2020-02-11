import React, { useState , useEffect } from 'react';

const CusUseEffect = () => {
    const [ count , setCount ] = useState(0);
    useEffect(()=>{
        console.log('useEffect');
        return ()=>{
            console.log('effect return')
        }
    });
    
    return(
        <div>
            hooksIndex - count - {count}
            <p>
                <button onClick={()=>setCount(count + 1)}>add</button>
            </p>
        </div>
    )
}

export default CusUseEffect;