import React, { useContext } from "react";
import "./call.css";
import muet from '../../media/59120.png'
import noncall from  '../../media/appelle_NON.png'
import punti from  '../../media/punti.png'
import Video from "../../media/video_1.png";
import { Context } from "../../Helper/Context";

const Audiocall = () => {

  const {Fil , SetFil} =  useContext(Context)

  return (
    <div className="audiocallContainer">
      <div style={{display:'grid'}} className="imageCall">
        {" "}
        <div> 
        <img
          className="imgCallaudio"
          src="https://media.istockphoto.com/id/1051453470/photo/portrait-of-smiling-businesswoman-looking-at-camera-posing.jpg?s=612x612&w=0&k=20&c=wdsyvVa9X1W3jvV7Wk9yt8SraHYqVMD7iRpQin9NtdM="
        />
 </div>


<div  style={{display:'flex'}}  className="iconsCall">    
<div> <img src={Video} /></div> 
<div> <img style={{    transform: 'rotate(90deg)', width: '12px' ,height:'42px'}} src={punti} /></div> 
  <div>   <img src={muet} /> </div> 
 


  <div  onClick={()=>{SetFil('conv')}}  style={{backgroundColor:'red'}}> <img  style={{height:'20px'}} src={noncall} /></div> 
  </div>
 

        

      </div>



      <div className="messageInCall">
        <div className="mymessages"></div>
        <div className="firstmsg" style={{ display: "flex" }}>
          <img className="imgsent" src="https://i.imgur.com/0I4lkh9.jpg" />
          <div>
            {" "}
            <h2>William</h2>
            <p
              className="appelEncour"
              style={{ marginTop: "-22px", color: "#008eb5" }}
            >
              Appel en cours ...
            </p>
          </div>
        </div>

        <div className="firstmsg" style={{ display: "flex" }}>
          <img className="imgsent" src="https://i.imgur.com/0I4lkh9.jpg" />
          <div>
            {" "}
            <h2>William</h2>
            <p className="appelEncour" style={{ marginTop: "-22px" }}>
              {" "}
              Oui{" "}
            </p>
          </div>
        </div>

        <div className="firstmsg" style={{ display: "flex" }}>
          <img className="imgsent" src="https://i.imgur.com/0I4lkh9.jpg" />
          <div>
            {" "}
            <h2>William</h2>
            <p className="appelEncour" style={{ marginTop: "-22px" }}>
              Feribus doluptat et expe sit erum voluptatem voles sed est qui
              simaximus sam, tentis conet eium imaios et imaximi, odioreius et
              es dolor atia ditatiae nis as expe vere eveligent, cus mossitem.
              Nem. Nequidusa
            </p>
          </div>
        </div>

        <div className="firstmsg" style={{ display: "flex" }}>
          <img className="imgsent" src="https://i.imgur.com/0I4lkh9.jpg" />
          <div>
            {" "}
            <h2>William</h2>
            <p className="appelEncour" style={{ marginTop: "-22px" }}>
              Feribus doluptat et expe sit erum voluptatem voles sed est qui
              simaximus sam, tentis conet eium imaios et imaximi, odioreius.
            </p>
          </div>
        </div>

        <div className="isepNet" style={{ display: "flex" }}>
            {" "}
          
            <input   style={{ backgroundColor: "transparent" , color:'black' }} className="sentmsg" placeholder="écrivez ..." />
            {/* <img className="imgsent"  src={Video}  />{" "} */}
          </div>


      </div>
    </div>
  );
};

export default Audiocall;
