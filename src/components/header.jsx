import React, { useState } from 'react'
import { BsBell, BsYoutube, BsSearch,BsMic } from 'react-icons/bs';
import {BiVideoPlus}from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom';


const Header = () => {
    const [query,setQuery]= useState("")
    const navigate = useNavigate()
    const handleSearch = ()=>{
        if(!query) return;
        navigate(`/search-result/${query}`)
        setQuery("") ////  input sıfırlanır inputa value={query} vermek gerekir
    }
    return (
        <div className='navbar bg-dark text-light d-flex'>
            <Link to="/" className='text-decoration-none text-light'>
            <div className='d-flex'>
                <span className='px-4 fs-2'><BsYoutube style={{ color: "red" }} /></span>
                <h2 className='p-2' style={{fontFamily:"impact"}}>YouTube</h2>

            </div>
            </Link>
            <div className='d-flex w-50'>
                <input type="text" className='form-control rounded-start-pill bg-dark text-light'
                onChange={(e)=>setQuery(e.target.value)} 
                value={query}
                />
                <button className='btn btn-secondary rounded-end-pill' onClick={()=>handleSearch()}><BsSearch /></button>
            </div>
            <span className='fs-4 me-4'><BsMic/></span>
            <span className='ms-4 fs-4'><BiVideoPlus /></span>
            <span className=' fs-4'><BsBell /></span>
            <span className='bg-secondary rounded-circle p-2 mx-3'>AA</span>


        </div>
    )
}

export default Header