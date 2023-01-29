import React, { useEffect } from "react";
import "./sidebar.css";
import { useState } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios'
const Sidebar = () => {

  const [cats, setCats] = useState([]);


  useEffect(()=>{
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };

    getCats();
  }, []);


  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <br></br>
        <ul className="sidebarList">
 
          {cats.map((c,index) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li id={index + "cat"} className="sidebarListItem">{c.name}</li>
            </Link>
          ))}

        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
