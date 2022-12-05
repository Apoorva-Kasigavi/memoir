import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import {img} from "../../images_two/login.jpg" 
import axios from "axios";

export default function Settings() {


  const { user, dispatch } = useContext(Context);

  const [file, setFile] = useState(null);
  const [coverFile, setCoverFile] = useState(null);

  const [about, setAbout] = useState(user.about);
  const [success, setSuccess] = useState(false);
  
  const PF = "http://localhost:5000/images/"

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username: user.username,
      email: user.email,
      password: user.password,
      about
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }

    if (coverFile) {
      const data = new FormData();
      const filename = Date.now() + coverFile.name;
      data.append("name", filename);
      data.append("file", coverFile);
      updatedUser.coverImage = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }


    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      window.location.replace(`/profile/${user.username}`);
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
      
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF+user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Cover Image</label>
          <div className="settingsCI">
            <img
              src={coverFile ? URL.createObjectURL(coverFile) : PF+user.coverImage}
              alt=""
              className="coverImageContainer"
            />
            <label htmlFor="fileInputCover">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInputCover"
              style={{ display: "none" }}
              onChange={(e) => setCoverFile(e.target.files[0])}
            />
          </div>
          <label>About</label>
          <input
            type="text"
            placeholder={user.about}
            onChange={(e) => setAbout(e.target.value)}
          />

          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
     
    </div>
  );
}