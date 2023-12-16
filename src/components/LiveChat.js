import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import {useDispatch,useSelector} from "react-redux";
import { addMessage } from '../utils/chatSlice';
import { generateRandomNames, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
    const dispatch=useDispatch();
    const [liveMessage,setLiveMessage]=useState(""); 
    const ChatMessages=useSelector((store)=>store.chat.messages);


    useEffect(()=>{
        const i=setInterval(()=>{
            console.log('api polling')
            dispatch(addMessage({
                name:generateRandomNames(),
                message:makeRandomMessage(20)+" 🚀"
            }))
        },2000);

        return ()=>{ 
            clearInterval(i)
        }

        
    },[])

  return (
    <div>
    <div className='w-full h-[400px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        
        <div >
        {
            ChatMessages.map((c,i)=>(

            <ChatMessage key={i}  name={c.name} message={c.message}/>
            ))
        }
        </div>
        
        </div>
        <form 
        className='w-full p-2 ml-2 border border-black' 
        onSubmit={(e)=>{
            // console.log('comment added')
            e.preventDefault()
            dispatch(addMessage({
                name:'mobin',
                message:liveMessage
            }))
            setLiveMessage('')
            }}>

            <input type="text"className="w-[280px] px-2 border-black border "
                    value={liveMessage} 
                 onChange={(e)=>setLiveMessage(e.target.value)}/>
            <button className='px-2 mx-4 bg-green-100 rounded-md'>Send</button>
        </form>
        
    </div>
  )
}

export default LiveChat