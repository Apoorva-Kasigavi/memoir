import React,{useEffect, useState} from 'react'
import Post from '../posts/post/Post.jsx'
import axios from 'axios'
import './timeline.css'
import { useLocation } from 'react-router-dom'
const Timeline = () => {
  const [posts,setPosts] = useState([]);
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  console.log(location);
  useEffect(()=>{
      const getPosts = async() =>{
    
        try{
            
              const currentPosts = await axios.get(`/posts?user=${path}`);
      
              if(currentPosts)
                setPosts(currentPosts.data);
        }catch(err){
                
        }
      }
       
      getPosts();
   
  },[path])

  return (
    <div className='timeline'>
     
      {
         posts.length>0? 
       posts.map((post,index)=>{
        return <Post post={post}/>
       }) : <h3>No Posts...</h3>}
    </div>
  )
}


export default Timeline