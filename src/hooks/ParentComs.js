import React, { useState , useEffect , useContext , createContext} from 'react';
import ChildCom from './UseEffect';

const Countcontext = createContext();

const ParentComs = () => {
    const [ count , setCount ] = useState(0);
    // useEffect(()=>{
    //     console.log('useEffect parent');
    //     return ()=>{
    //         console.log('effect return parent')
    //     }
    // });
    
    return(
        <div>
            hooksIndex - count - {count}
            <p>
                <button onClick={()=>setCount(count + 1)}>add</button>
            </p>
            <Countcontext.Provider value = {count}>
                <Son/>
            </Countcontext.Provider>
        </div>
    )
}

const Son = () => {
    const cont = useContext(Countcontext);
    useEffect(()=>{
        console.log('useEffect son');
        return ()=>{
            console.log('effect return son')
        }
    },[]);

    return (
        <div>
            {cont} --- 
        </div>
    )
}

export default ParentComs;