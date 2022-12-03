import React,{useEffect, useState} from 'react'
import Post from '../posts/post/Post.jsx'
import axios from 'axios'
import './timeline.css'
const Timeline = ({username}) => {
  const [posts,setPosts] = useState([]);
  useEffect(()=>{
      const getPosts = async() =>{
        try{
          
              const currentPosts = await axios.get(`/posts?user=${username}`);
              console.log("--");
              console.log(currentPosts);
              if(currentPosts)
                setPosts(currentPosts.data);
        }catch(err){
                
        }
      }
       
      getPosts();
   
  },[posts])
console.log("pakka");
//console.log(username);
  console.log(posts);
  return (
    <div className='timeline'>
      
      {posts.length>0? 
       posts.map((post,index)=>{
        return <Post post={post}/>
       }) : <h3>No Posts...</h3>}
    </div>
  )
}

export default Timeline