import { createContext, useState } from "react";

export const LangContext=createContext();
export const LangProvider=({children})=>{

    const[Language,setLang]=useState(localStorage.getItem('lang')||'en');
    const ChangeLang=(Value)=>{
        setLang(Value);
        localStorage.setItem('lang',Value);
    }
    return(
        <LangContext.Provider
        value={{
            Both_Language,
            ChangeLang
        }}>{children}</LangContext.Provider>
    )
}