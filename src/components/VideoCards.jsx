import React from 'react'
import { Link } from 'react-router-dom';
import millify from 'millify'

const VideoCards = ({ video }) => {
   
    return (
        <Link to={`/watch/${video.video.videoId}`} className='text-decoration-none'>
            <div>
                <div>
                    <img className='rounded img-fluid' src={video.video.thumbnails[0].url} alt="" />

                </div>
                <div className='d-flex mt-3 text-light' >
                    <img className='rounded-pill' src={video.video.author.avatar[0].url} alt="" style={{ height: "50px" }} />
                    <div className='mx-3'>
                        <p className='fw-bold'>{video.video.title}</p>
                        <p className='mb-0'>{video.video.author.title}</p>
                        <div className='d-flex'>
                            <p className='small'>{millify(video.video.stats.views)} görüntülenme</p>
                            <p className='mx-4 small'>{video.video.publishedTimeText}</p>
                        </div>


                    </div>
                </div>
            </div>
        </Link>
    )
}


export default VideoCards