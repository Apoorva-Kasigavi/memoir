import "./write.css";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Context } from "../../context/Context.js";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const { user } = useContext(Context);

  const handleAddCategory = (e) => {
    if (categories.length > 4) {
      alert("Only 5 categories can be added");
      return;
    }
    setCategories((categories) => [...categories, category]);
    console.log(categories);
  };

  const handleMinusCategory = (e) => {
    setCategories((categories) => categories.slice(0, -1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      categories,
    };



    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <br />

      <div className="writeCategoryGroup">
        {categories.map((cat, i) => (
          <p className="categoryNames">{cat}</p>
        ))}
        <br></br>
        <button
          htmlFor="category"
          className="categoryAddIcon"
          onClick={handleAddCategory}
        >
          <i class="fa-solid fa-circle-plus"></i>
        </button>
        <button
          htmlFor="category"
          className="categoryMinusIcon"
          onClick={handleMinusCategory}
        >
          <i class="fa-solid fa-circle-minus"></i>
        </button>
        <input
          id="category"
          className="writeInputCategory"
          placeholder="Categories"
          type="text"
          autoFocus={true}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>

          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
            id = "postTitle"
          />
        </div>

        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={(e) => setDesc(e.target.value)}
            id = "postDesc"
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
