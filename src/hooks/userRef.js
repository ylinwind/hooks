import React, { useRef , useEffect} from 'react';

const _UseRef = ()=>{
    const refInput = useRef();

    useEffect(() => {
        // console.log(refInput.current.value,'----');
        return () => {
            console.log('clean up')
        };
    })
    return(
        <div>
            <input
                ref = {refInput}
                onChange={()=>{
                    console.log(refInput.current.value,'----');
                }}
            />
            
            _UseRef
        </div>
    )
}

export default _UseRef;