import { createContext, useState } from "react";
import { Value } from "sass";

export const LangContext=createContext();
export const LangProvider=({children})=>{

    const[Both_Language,setLang]=useState(localStorage.getItem('lang')||'en');
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