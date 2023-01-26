import { createContext, useState } from "react";

export const LangContext=createContext();
export const LangProvider=({children})=>{

    const[Both_Language,setLang]=useState(localStorage.get)
}