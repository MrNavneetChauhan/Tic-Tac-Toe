import { createContext, useState } from "react";

export const NameContext = createContext();
export const NameContextProvider = ({children})=>{
    const [name,setName] = useState("");
    const handleNameValue = (val)=>{
        setName(val)
    }

    const value = {name,
    handleNameValue
    }
    return(
        <NameContext.Provider value={value}>
            {children}
        </NameContext.Provider>
    )
}