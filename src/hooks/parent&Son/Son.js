import React, { useContext} from 'react'
import { SonContext } from './Parent';

const Son = ()=>{
    const sonContext = useContext(SonContext);
    console.log(sonContext,'----')
    return(
        <div>
            Son
        </div>
    )
}

export default Son;