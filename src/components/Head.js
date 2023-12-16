import React, { useEffect, useState } from "react";
import hamberger from "../assets/hamburger.png";
import logo from "../assets/youtube_logo.png";
import userIcon from "../assets/user_icon.webp";
import { useDispatch,useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery,setSearchQuery]=useState('');
  // console.log(searchQuery);
const [suggestions,setSuggestions]=useState([]);
const [showSuggesstions,setShowSuggesstions]=useState(false)

const searchCache=useSelector((store)=>store.search);

/**
 * {
 *    "iphone":["iphone","iphone11"]
 * }
 * 
 * 
 */

  useEffect(()=>{
    // API call
    // console.log(searchQuery);
    // make and api call after every key press
    // if the diff between 2 API call is <200ms decline the api call
    
    const timer=setTimeout(()=>{
      console.log('in timer api is calling',searchQuery)
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }else{
        getSearchSuggesstions()
      }
      
    },200)

    return ()=>{
      clearTimeout(timer)
    }


    /**  see part 2 45 min video
     * 
     * when we call the useEffect here when we search it will first destroy the component and then re-render it. while destroying the compoent return will get called and thus clearTimeout means if we press another key even before 200 ms that api call  which is in timer  will not get called and another timer will get start. As soon as the diff between 2 interval (words)   (which is very common as human is typing) get's more than 200 ms api will get called.Thus debouncing get's achived. 
     *    Implementing debouncing is very easy in react while it is crucial in js.
     * 
     * 
     * key i
     * - render the component
     * - useEffect()
     * - start timer => make api call after 200 ms
     * 
     * key - ip
     * -destroy the component (useEffect return method will get called)
     * - re-render the component
     * - usEffect()
     * - start timer => make api call after 200 ms
     * 
     */




  },[searchQuery])

  const getSearchSuggesstions=async()=>{
    const data=await fetch(YOUTUBE_SEARCH_API+searchQuery)
    const json=await data.json()
    setSuggestions(json[1])
    // console.log('search result ',json[1])
    dispatch(cacheResult({[searchQuery]:json[1]}))
  }

  /**
   * 
   * when we press backspace in search it won't call the api 
   *  Also if we search for india and again we search india it will store that result in redux
   *  and it will not call inida again but when i type inidan it will call the api
   *  
   * also read about LRU(Least Recently Used) cache
   * we can do  one thing if object size increases more than 100 the start removing upar ke key
   * 
   * 
   */

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg ">
      <div className="flex col-span-1 ">
        <img
          src={hamberger}
          className="h-6 my-1 cursor-pointer"
          alt="menu"
          onClick={toggleMenuHandler}
        />
        <a href="/">
          <img src={logo} className="h-8 mx-2" alt="youtube logo" />
        </a>
      </div>
      <div className="col-span-10 px-10">
      <div>
        <input
          type="text"
          className="w-1/2 border-gray-400 py-2 rounded-l-full border px-5"
          placeholder="Search"
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
          onFocus={()=>setShowSuggesstions(true)}
          onBlur={()=>setShowSuggesstions(false)}
        />
        <button className="border border-gray-400 p-2 rounded-r-full px-5 py-2 bg-gray-100">
          🔍{" "}
        </button>
        </div>
        {showSuggesstions &&
          <div className="fixed bg-white px-5 py-2 w-[27rem] shadow-lg rounded-lg border border-gray-100">
          <ul>
            {
              suggestions.map(s=>(
                <li key={s} className="px-3 py-2 shadow-sm hover:bg-gray-100">🔍{" "} {s}</li>
              ))
            }
           

          </ul>
        </div>
        }
      </div>
      <div className="col-span-1">
        {/* <img src={userIcon} className="h-8" alt="user" /> */}
        <img
            className='h-8'
            alt='user'
            src="data:image/png;base64,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"
        />
      </div>
    </div>
  );
};

export default Head;
