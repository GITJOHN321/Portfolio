import { createContext, useContext, useState } from "react";

const ActiveContext = createContext()

export const useActives = () => {
    const context = useContext(ActiveContext)
    if(!context){
        throw new Error("Active Context must be used ")
    }
    return context
}

export const ActiveProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(true);

    return( 
        <ActiveContext.Provider value={{isOpen, setIsOpen}}>{children}</ActiveContext.Provider>
    )
}