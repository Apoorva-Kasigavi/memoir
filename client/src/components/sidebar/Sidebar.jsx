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
          {/* <li className="sidebarListItem">
            <p className="sidebarListItemName">Dance</p>
            <p className="sidebarListItemCount">(2)</p>
          </li>

          <li className="sidebarListItem">
            
              <p className="sidebarListItemName">Cinematography</p>
              <p className="sidebarListItemCount">(2)</p>
            
          </li>

          <li className="sidebarListItem">
            <p className="sidebarListItemName">Painting</p>
            <p className="sidebarListItemCount">(2)</p>
          </li>
          <li className="sidebarListItem">
            <p className="sidebarListItemName">Infrastructure</p>
            <p className="sidebarListItemCount">(2)</p>
          </li>
          <li className="sidebarListItem">
            <p className="sidebarListItemName">Research Paper</p>
            <p className="sidebarListItemCount">(2)</p>
          </li>
          <li className="sidebarListItem">
            <p className="sidebarListItemName">Architecture</p>
            <p className="sidebarListItemCount">(2)</p>
          </li> */}

          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}

        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
