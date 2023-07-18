import { createContext, useState, useEffect } from "react";
import {fetchDataFromApi} from "../utils/api";

export const Context =createContext();

export const ContextProvider = ({children})=>{
    const [selectedCategory, setSelectedCategory]=useState('New');
    const [searchResult, setSearchResult]= useState([]);
    useEffect(()=>{
        fetchCategory(selectedCategory);
    },[selectedCategory])
    const fetchCategory =(q)=>{
        fetchDataFromApi(`search/?q=${q}`).then(({contents})=>{
            setSearchResult(contents);
        });
    };
    return (
        <Context.Provider value ={{selectedCategory,setSelectedCategory,searchResult}}>
            {children}
        </Context.Provider>
    )
}