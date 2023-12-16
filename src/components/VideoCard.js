import React, { useState } from 'react'

const VideoCard = ({info}) => {
    // console.log(info)
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet;
  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
        <img src={thumbnails.medium.url} alt="thumbnail" className='rounded-lg'/>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export const AddVideoCard=({info})=>{

  return ( <div className='p-1 m-1 border border-red-900'>
              <VideoCard info={info}/>
            </div>
          )
        }

// fn is an example of HOC(Higher Order Component) i.e. it takes one component as argument and returns it by enhancing some feature into it. Suppose we want to show add 

export default VideoCard