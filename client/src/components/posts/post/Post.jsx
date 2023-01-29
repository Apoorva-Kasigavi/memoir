import React from 'react'
import './post.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Post = ({post}) => {

  const styles = {
    customButton: {
        backgroundColor: '#0B0C10',
        borderColor: '#45A293',
        color: '#45A293',
        borderRadius: '100px'
    }
};

const PF ='http://localhost:5000/images/' ;
  return (
    
    <div className='post'>
      <div className='postImageContainer'>
      
      {post.photo && <img className="postImage" src={PF + post.photo} alt="" />}
      </div>
      <div className='postInfo'>
            <h3 className='postInfoHeading'><Link to = {`/post/${post._id}`} className="link">{post.title}</Link></h3>
            
            <h3 className='postInfoAuthor'>Author:<span className='postInfoAuthorSpan'>{post.username}</span> </h3>
            <h3 className='postInfoCategory'>Categories: </h3>
              <ul className='postInfoCategoryList'>
             
              {post.categories.map((c) => (
            <li className="postInfoCategoryListItem">{c}</li>
                 ))}
                   
              </ul>
           

          <p className='postDesc'>
          {post.desc}
          </p>

          <Button className='btn'variant="outline-success"><Link to = {`/post/${post._id}`} className="linkRead">Read more...</Link></Button>
      </div>
    </div>
  )
}

export default Post
