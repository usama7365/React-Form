import React, {useState} from "react";
import "../homepage/Homepage.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Img1 from "../../imagess/Vector.png"
import Img2 from "../../imagess/Group.png"


export const Homepage = () => {

const [index, setindex] = useState(0)



  return (
  <>
  
    <div className="main-page ">

    <div className="Text-Box">
      <div className="Textdiv1">
        <p className="main-pagepara1">Debit Balance</p>
      </div>

      <div className="Textdiv2">
        <img className="img" src={Img1} alt="" />
        <div className="div-Text">2500</div>

      </div>

    </div>

    

   </div>
   <div className="main-tab"> 
   <div className="button-list ">
    <button className="tablist"
    onClick={() => setindex(0)} >Topup Card</button>

<button className="tablist" onClick={() => setindex(1)} >Request Refund</button>

   </div>
     </div>

<div className="content-tabs">

<div className="contentt" hidden={index !== 0} >

<div className="textformmainn">
<div className="textform">Please fill in the fields below</div>
</div>


<div className="textformmain1">
  <div className="euro">Euro</div>
<input className="inp1" type="number" placeholder="50" />
</div>
<div className="textformmainicon">
  <img className="img2" src={Img2} alt="" />
</div>

<div className="textformmain2">
<div className="euro">Credits</div>
<input className="inp1" type="number" placeholder="25" />
</div>



<div className="textformmaintext">

<div >
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="inlineFormCheck"/>
      <label class="remember" for="inlineFormCheck">
       I accept to agree with the <span className="span" style={{color:"#4263EB",textDecorationColor:"#4263EB",textDecoration:"underline",marginLeft:"2px"}}> Terms & Conditions </span></label>
    </div>
  </div>
</div>
<div className="textformmainbtn">
  <button className="paybtn">Pay</button>
</div>



</div>
<div className="conten"  hidden={index !== 1}  >

<div className="contentt1">



<div className="textformmainn">
<div className="textform">Please fill in the fields below</div>
</div>


<div className="textformmain1">
  <div className="euro">Name</div>
<input className="inp1" type="text" placeholder="John Doe" />
</div>


<div className="textformmain2">
<div className="euro">Phone</div>
<input className="inp1" type="number" placeholder="+31 71 677 8672" />
</div>

<div className="textformmain2">
<div className="euro">Email</div>
<input className="inp1" type="email" placeholder="johndeo_95@gmail.com" />
</div>


<div className="textformmaintext">


</div>
<div className="textformmainbtn2">
  <button className="paybtn">Send Request</button>
</div>

</div>
  
</div>

</div>
  
  
  </>
  );
};
export default Homepage;
