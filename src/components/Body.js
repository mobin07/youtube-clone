import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import {Outlet} from "react-router-dom"
const Body = () => {
  return (
    <div className='flex '>
        <Sidebar/>
        {/* <MainContainer/> */}
        <Outlet/>
    </div>
  )
}

export default Body

/**
 * 
 *  Live Chat >>>>>>   Infinite Scrolling >>> Pagination
 * 
 * Challenges of live chat
 * 
 *   
 * Get Data Live - on data Layer
 * Update the ui - on ui layer
 * 
 * there are two ways we can handle live data
 * 1) websocket - it is a two way connection . it creates a handshake b/w client and server 
 *                it is a bidirectional data transfer. (Eg- trading app, zerohda,whatapp)
 * 
 * 2) long polling/api polling - calling api after particular interval of time (gmail,cricbuzz (25 sec),
 *                                youtube live chat's)
 */