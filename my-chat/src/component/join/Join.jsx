import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NameContext } from "../../context/NameProvider";
import "./Join.css";
let user;
export const Join = () => {
  const {handleNameValue} = useContext(NameContext);
  const [name,setName] = useState(""); 
  const sendUser = (e) => {
    if(!name){
      e.preventDefault();
    }
    user = document.getElementById("joinInput").value;
    document.getElementById("joinInput").value=""
  };

  const handleName = (e)=>{
    setName(e.target.value)
    handleNameValue(name)
  }

  return (
    <div className="n-join-page">
      <div className="n-join-container">
        <img
          src="https://i.etsystatic.com/7760609/r/il/266a6d/817423860/il_fullxfull.817423860_o074.jpg"
          alt=""
        />
      </div>

      <div className="player-info-div">
        <input onChange={handleName} placeholder="enter your name" type="text" id="joinInput" />
        <Link  onClick={sendUser} className="button" to="/tictac">
          Play
        </Link>
      </div>
    </div>
  );
};
export {user};