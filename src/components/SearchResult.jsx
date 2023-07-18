import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchDataFromApi } from '../utils/api';
import VideoCards from './VideoCards';
import LeftNav from './LeftNav';
const SearchResult = () => {
    const { query } = useParams();
    const [search, setSearch] = useState(null)
    useEffect(() => {
        fetchDataFromApi(`search/?q=${query}`).then((res) => {
            setSearch(res.contents)
        })
    }, [])
    if (!search)
     return <div className='bg-dark ' style={{height:"100vh",width:"100vw"}}>
        <img  src="https://i.pinimg.com/originals/d9/f2/15/d9f21515b1e38d83e94fdbce88f623b6.gif" alt="" />
     </div>
    return (
        <div className='d-flex bg-dark g-5'>
            <LeftNav/>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 p-2 w-100'>
                {search.map((video, index) => {
                    if (video.type !== "video") return;// tipi video değilse hiçbirşey döndürme
                    return <VideoCards video={video} key={index} />;
                }
                )}
            </div>

        </div>
    )
}

export default SearchResult