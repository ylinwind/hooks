import React , { createContext } from 'react'
import Son from './Son';

const contextProps = createContext();
const Parent = ()=>{
    const propsTemp = {
        a:1,
        b:2,
        c:'str'
    }
    return(
        <div>
            parent
            <contextProps.Provider value={propsTemp}>
                <Son/>
            </contextProps.Provider>
        </div>
    )
}
export const SonContext = contextProps;
export default Parent ;