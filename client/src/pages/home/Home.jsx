import React, { useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header.jsx";
import Posts from "../../components/posts/Posts.jsx";
import Topbar from "../../components/topbar/Topbar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";
import { useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
