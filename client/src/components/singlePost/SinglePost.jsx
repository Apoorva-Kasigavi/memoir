import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../context/Context.js";
import "./singlePost.css";
import img1 from "../../images_two/post.jpg";
import Sidebar from "../sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const PF = "http://localhost:5000/images/";
  const [post, setPost] = useState({});
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [Categories,setCategories] = useState([])
  const [updateMode, setUpdateMode] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  



  useEffect(() => {
    const getPost = async () => {
          const res = await axios.get("/posts/" + path);
          
          setPost(res.data);
          setTitle(res.data.title);
          setDesc(res.data.desc);
          setCategories(res.data.categories);

    }
        getPost();

  }, []);



  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (err) {}
  };
  
  return (
    <div className="singlePost">
      <div className="leftPart">
        <div className="singlePostHeading">
          {updateMode ? (
            <input
              type="text"
              value={title}
              className="singlePostTitle"
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            <h1 className="singlePostTitle">{title}</h1>
          )}
        </div>
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
        <div className="tagsContainer">
          <p className="postInfoAuthor1">
            Author:
            <span className="postInfoAuthorSpan1">
            <Link to={`/profile/${post.username}`} className="link">
                <b> {post.username}</b>
              </Link>
            </span>{" "}
          </p>
          <p className="postInfoDate1">
            Date: <span className="postInfoDateSpan1">
               {new Date(post.createdAt).toDateString()}
            </span>{" "}
          </p>

          <ul className="postInfoCategoryList1">
            <p className="postInfoCategory1">Categories: </p>
            {Categories?
              Categories.map((item,key) => {
                return <li className="postInfoCategoryListItem1"><Link to={`/?cat=${item}`} className="link">
                 {item}
              </Link></li>
              }):<p></p>
            }
            
           
          </ul>
          <div className="singlePostEdit">
            {!updateMode ? (
              post.username === user?.username && (
                <div className="singlePostEdit">
                  <i
                    className="singlePostIcon far fa-edit"
                    onClick={() => setUpdateMode(true)}
                  ></i>
                  <i
                    className="singlePostIcon far fa-trash-alt"
                    onClick={handleDelete}
                  ></i>
                </div>
              )
            ) : (
           
              <p></p>
            )}
          
          </div>
        </div>
        <div className="postImageContainer1">
          {post.photo && (
            <img src={PF + post.photo} alt="" className="postImages" />
          )}
        </div>
        <div className="postContent1">
          {updateMode ? (
            <textarea
              className="singlePostDescInput"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          ) : (
            <p className="postDesc1">{desc}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
