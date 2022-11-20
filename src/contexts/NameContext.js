import { createContext, useState} from "react";

export const NameContext = createContext({});

export const NameProvider = (props) => {

    const [name,setName] = useState (localStorage.getItem("name"))

    
    return(
        <NameContext.Provider value = {{name,setName}}>
            {props.children}
        </NameContext.Provider>
    )
}