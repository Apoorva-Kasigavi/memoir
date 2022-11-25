import React from "react";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <br></br>
        <ul className="sidebarList">
          <li className="sidebarListItem">
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
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
