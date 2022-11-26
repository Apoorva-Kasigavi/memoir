import React from "react";
import "./singlePost.css";
import img1 from "../../images_two/post.jpg";
import Sidebar from "../sidebar/Sidebar";
const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="leftPart">
        <div className="singlePostHeading">
          BVB Renamed as KLE Technological University, Also called as KLE
          TECHNOLOGICAL UNIVERSITY
        </div>
        <div className="tagsContainer">
          <p className="postInfoAuthor1">
            Author:<span className="postInfoAuthorSpan1">Preeti</span>{" "}
          </p>
          <p className="postInfoDate1">
            Date:<span className="postInfoDateSpan1">12-11-2022</span>{" "}
          </p>

          <ul className="postInfoCategoryList1">
            <li className="postInfoCategory1">Categories: </li>
            <li className="postInfoCategoryListItem1">Dance</li>
            <li className="postInfoCategoryListItem1">Science</li>
          </ul>
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </div>
        <div className="postImageContainer1">
          <img className="postImages" src={img1} alt=""></img>
        </div>
        <div className="postContent1">
          <p className="postDesc1FirstPara">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
          <p className="postDesc1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Porttitor lacus luctus accumsan tortor posuere ac ut. Nam libero
            justo laoreet sit amet cursus sit amet. Lorem ipsum dolor sit amet
            consectetur adipiscing. Maecenas accumsan lacus vel facilisis
            volutpat est velit. Nunc non blandit massa enim nec. Ut tristique et
            egestas quis ipsum suspendisse ultrices gravida dictum. Iaculis urna
            id volutpat lacus laoreet non curabitur gravida. In pellentesque
            massa placerat duis ultricies. Urna id volutpat lacus laoreet non
            curabitur. Netus et malesuada fames ac turpis egestas. Tortor at
            auctor urna nunc id cursus metus. Sollicitudin tempor id eu nisl
            nunc. Turpis egestas sed tempus urna et pharetra pharetra massa.
            Auctor urna nunc id cursus. Porttitor leo a diam sollicitudin tempor
            id.
          </p>
          <p className="postDesc1">
            Lectus urna duis convallis convallis tellus id interdum. Lectus
            proin nibh nisl condimentum id venenatis a condimentum. Varius vel
            pharetra vel turpis nunc eget lorem dolor sed. Sit amet tellus cras
            adipiscing enim eu turpis egestas. A condimentum vitae sapien
            pellentesque habitant morbi tristique. Scelerisque varius morbi enim
            nunc faucibus a pellentesque. Volutpat sed cras ornare arcu. Nunc
            mattis enim ut tellus elementum sagittis. Et ligula ullamcorper
            malesuada proin libero nunc consequat interdum. A lacus vestibulum
            sed arcu non. Gravida rutrum quisque non tellus orci ac auctor. Nunc
            sed velit dignissim sodales ut eu sem. Nunc lobortis mattis aliquam
            faucibus purus in massa tempor nec. Viverra ipsum nunc aliquet
            bibendum enim facilisis gravida neque convallis. Nisi scelerisque eu
            ultrices vitae auctor eu augue ut lectus.
          </p>
          <p className="postDesc1">
            "But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure?"
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
