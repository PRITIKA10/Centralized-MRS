import React, {useState, createContext} from 'react'

export const CmrsContext = createContext();

export const CmrsContextProvider = (props)=>{
    const[cmrs, setCmrs] = useState([]);
    return(
        <CmrsContext.Provider value={{
            cmrs, setCmrs
        }}>
            {props.Children}
        </CmrsContext.Provider> 
    );

};



export default CmrsContext
