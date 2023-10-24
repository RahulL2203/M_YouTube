import React from 'react'

const VideoCard = ({ info }) => {

    //console.log(info)
    const {statistics,snippet} = info;
    const {channelTitle,title,thumbnails} = snippet;

  return (
    <div className='w-72 p-2 m-2 rounded-lg shadow-lg'>
        <img  className='rounded-lg' alt ="thumbnail" src={thumbnails.medium.url}/>
    <ul>
        <li className='overflow-ellipsis'>{title}</li>
        <li>{channelTitle}</li>
        <li>👁️{statistics.viewCount}</li>
        
    </ul>
    </div>
  )
}

export default VideoCard