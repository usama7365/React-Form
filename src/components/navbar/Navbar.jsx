import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../navbar/style.css";
import Img1  from "../../imagess/Group 9398.png";

export const Navbar = () => {
  return (
    <>
   
   <nav class="navbar ">

   <div className="main">
    <img src={Img1} alt="" />
    <span/>

    <p className="para" >SnelBetaald</p>

    </div>
    
    <form class="main2">
    <select class="form-select" aria-label="Default select example">
  <option style={{color:"FFF"}} selected>ENG</option>
  <option value="1">Germany</option>
  <option value="2">French</option>
  <option value="3">Arabic</option>
</select>
    </form>
  
</nav>
     

    </>
  );
};

export default Navbar;
