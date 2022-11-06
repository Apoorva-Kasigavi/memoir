import React from 'react'
import './post.css'
import img1 from '../../images/img1.jpg'
import Button from 'react-bootstrap/Button';
const Post = () => {

  const styles = {
    customButton: {
        backgroundColor: '#0B0C10',
        borderColor: '#45A293',
        color: '#45A293',
        borderRadius: '100px'
    }
};

  return (
    <div className='post'>
      <div className='postImageContainer'>
          <img  className='postImage' src = {img1} alt="" height="250px" width="250px" ></img>
      </div>
      <div className='postInfo'>
            <h3 className='postInfoHeading'>Elements to have fun</h3>
            
            <h3 className='postInfoAuthor'>Author:<span className='postInfoAuthorSpan'>Preeti</span> </h3>
            <h3 className='postInfoCategory'>Categories: </h3>
              <ul className='postInfoCategoryList'>
              
                   <li className='postInfoCategoryListItem'>Dance</li>
                   <li className='postInfoCategoryListItem'>Science</li>
                   
              </ul>
           

          <p className='postDesc'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>

          <Button variant="outline-success">Read more...</Button>
      </div>
    </div>
  )
}

export default Post
