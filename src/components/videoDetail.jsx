import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchDataFromApi } from '../utils/api';
import ReactPlayer from 'react-player/youtube'
import VideoCards from './VideoCards';
import { BiLike, BiDislike } from 'react-icons/bi'
import millify from 'millify';
import { TbShare3 } from 'react-icons/tb'



const VideoDetail = () => {
  const [video, setVideo] = useState(null)
  const [relatedVideos, setRelatedVideos] = useState([]);
  const { videoId } = useParams();

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideos();
  }, []);
  const fetchVideoDetails = () => {
    fetchDataFromApi(`video/details/?id=${videoId}`).then((res) => {
      setVideo(res)
    })
  }
  const fetchRelatedVideos = () => {
    fetchDataFromApi(`video/related-contents/?id=${videoId}`).then((res) => {
      setRelatedVideos(res.contents)
      console.log(res.contents);
    });

  }
  return (
    <div className='d-flex bg-dark text-light detail'>
      {!video ? (<img src="https://i.pinimg.com/originals/d9/f2/15/d9f21515b1e38d83e94fdbce88f623b6.gif" alt="" />

      ) : (
        <div className='d-flex container detail-container'>
          <div className='flex-grow-1 w-100 m-1'>
            <div >
              <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`}
                controls
                playing={true}
                width={"100%"}
                height={"70vh"}
              />
            </div>
            <div>
              <h4 className='m-3'>{video.title}</h4>
              <div className='d-flex g-5 '>
                <img className='rounded-pill mx-3' src={video.author.avatar[0].url} alt="" />
                <div>
                  <p className='fw-bold mb-0'>{video.author.title} </p>
                  <p className='small mb-0'>{millify(video.author.stats.subscribers)} </p>
                </div>

                <button className='btn btn-light rounded-pill mx-5 small'>Abone ol</button>
                <button className='btn btn-secondary rounded-start-pill small'>
                  <BiLike className='fs-3' /> {millify(video.stats.views)}</button>
                <button className='btn btn-secondary rounded-end-pill small'>
                  <BiDislike className='fs-3' />
                </button>
                <button className='btn btn-secondary rounded-pill mx-4 small' ><TbShare3 className='fs-3' /> Paylaş</button>
                <button className='btn btn-secondary rounded-circle fs-4' > ... </button>
              </div>
              <div className='bg-secondary rounded w-100 mt-4'>
                <div className='d-flex bg-secondary rounded text-light px-3'>
                  <span>{millify(video.stats.views)} görüntülenme  </span>
                  <p> {video.publishedTimeText}   önce</p>
                </div>
                <p className='px-3'>This is a React.Js Project we use Bootstrap useContext react-icons react-player</p>
              </div>
            </div>
          </div>
          <div className='m-4 small right-side' style={{ width: "35%" }}>
            <div className='mb-4'>
              <button className='btn btn-light m-1 '>Tümü</button>
              <button className='btn btn-dark m-1 ' >{video.author.title} </button>
            </div>
            {relatedVideos.map((video, index) => {
              if (video.type !== "video") return;
              return <VideoCards video={video} key={index} className="small" />
            })}
          </div>
        </div>
      )}

    </div>
  )
}

export default VideoDetail