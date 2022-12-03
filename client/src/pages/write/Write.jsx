import "./write.css";
import { useState, useContext } from "react";
import axios from "axios";
import { Context } from "../../context/Context.js";



export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const { user } = useContext(Context);

  
  const handleAddCategory = (e)=>{

         if(categories.length > 4)
         {
          alert("Only 5 categories can be added");
          return;
         }
         // categories.push(category);
          setCategories(categories => [...categories,category]);
          console.log(categories)
  }

  const handleMinusCategory = (e)=>{
    console.log("yes");
    setCategories((categories) => (categories.slice(0, -1)));
  }


  const handleSubmit = async (e) => {
    console.log("no");
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      categories
    };
    
    // categories.map(async(item)=>{
    //   const category = {name:item};
    //   console.log(category)
    //   try{
    //     await axios.post("/categories",category);
    //   }catch(err){
        
    //   }
      

    // })

    // Promise.all(categories.map(async item => {

    //   // Then put your try catch here so that it only wraps around
    //   // the results of the function you're awaiting...
    //   let response
    //   try {
    //     const category = {name:item};
    //   //  console.log(category);
    //   console.log("----------")
    //     response = await axios.post("/categories",category);
    //     console.log("*****-")
    //     console.log(response);
    //   } catch (err) {
    //     return err;
    //   }
    
    //   // Anything else you want to do with the response...
    //   return response
    
    // })).then(results => {
    //   // All the resolved promises returned from the map function.
    //   console.log(results)
    
    // })
    
    if (file) {
      const data =new FormData();
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


  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>

          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            onChange={(e) =>{
              setFile(e.target.files[0])
              
            } }
          />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        
          
        </div>

        <div className="writeCategoryGroup">
        {categories.map((cat,i) => (
        <p className="categoryNames">{cat}</p>
      ))}
        <br/>
        <button htmlFor="category" className="categoryAddIcon" onClick={handleAddCategory}>
           <i class="fa-solid fa-circle-plus"></i>
            
        </button>
        <button htmlFor="category" className="categoryMinusIcon" onClick={handleMinusCategory}>
        <i class="fa-solid fa-circle-minus"></i>
            
        </button>
        <input
            id = "category"
            className="writeInputCategory"
            placeholder="Categories"
            type="text"
            autoFocus={true}
            onChange={(e) => setCategory(e.target.value)}
          />

</div>
        <div className="writeFormGroup">
        
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
