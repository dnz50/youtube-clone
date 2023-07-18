import React from 'react'
import LeftNav from './LeftNav'
import { useContext } from 'react'
import { Context } from '../context/context'
import VideoCards from './VideoCards'

const Feed = () => {
    const {searchResult} = useContext(Context);
    return (
        <div className='d-flex bg-dark'>
            <LeftNav />
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 p-2 w-100'>{searchResult.map((video,index)=>
            {
                if (video.type !== "video") return;
                return <VideoCards video={video} key={index} />
            }
            )}</div>
        </div>
    )
}

export default Feed