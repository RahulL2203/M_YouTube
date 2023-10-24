import React from 'react'
import Button from './Button'

const list = ["All","Live","Gaming","Sports","News","Politics","Drama","Movies","Nature","World News","Business","Information Technology","Natoinal News","International News","Comedy Movies"]

const ButtonList = () => {
  return (
    <div className='flex flex-wrap'>
      {list.map((item,i)=><Button  key ={i} name={item}/>)}
    
      
    </div>
  )
}

export default ButtonList