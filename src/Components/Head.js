import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = ()=>{
      dispatch(toggleMenu());

  }
  return (
    <div className='grid grid-flow-col p-3 m-2 shadow-lg'>
     <div className='flex col-span-1'>
       <img alt="menu-icon" className='h-8 cursor-pointer'
       onClick={()=>toggleMenuHandler()}
        src='https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png'/>
       <img alt="youtube-logo" className='h-8 mx-2'
       src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png'/>
       </div>

     <div className='col-span-10 text-center'>
          <input className='w-2/4 rounded-l-full border border-gray-300 p-2' type="text"/>
          <button className='rounded-r-full border border-gray-300 bg-gray-100 cursor-pointer p-2 px-4'>🔍</button>
    </div>

    <div className='col-span-1'>
        <img 
        alt="user-icon" className='h-8'
        src='https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'/>
    </div>
   </div>
  )
}

export default Head