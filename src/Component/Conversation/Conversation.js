import React, { useState } from "react";
import "./Conversation.css";
import Video from "../../media/video_1.png";
import appelle from "../../media/appelle_1.png";
import play from "../../media/icons8-play-50.png";
const Conversation = () => {

  const [displayopt , setdisplayopt] = useState(false)


  return (
    <div className="Conversation">
      <div className="headconv">
        <img className="avatar" src="https://i.imgur.com/0I4lkh9.jpg" />
        <div className="onlineinfo">
          <h2> William </h2>
          <span>Online</span>
        </div>

        <div className="actiioncall">
          <img src={Video} />
          <img src={appelle} />
        </div>
      </div>


      <div className="allmsgs">

        <div className="cnv1">
<p>The tool generates French gibberish: dummy text 
for demo use. It’s full of random words you could 
hear in the streets of Paris. If you want to gnera.Gitium endeliquia velende bitent. Boribea dolor maximus debit alibusam qui aut eossum esequidunt. Experiaecatus ratia nectatur sam etur maiore</p> 
     <div> <span>12:39</span> </div>   </div>
        <div className="cnv1">
<p>The tool generates French gibberish: dummy text 
for demo use. It’s full of random words you could 
hear in the streets of Paris. If you want to gnera.Gitium endeliquia velende bitent. Boribea dolor maximus debit alibusam qui aut eossum esequidunt. Experiaecatus ratia nectatur sam etur maiore</p>
<div> <span>12:39</span> </div>  </div>
        <div className="cnv1">
<p> Oui et non. Ce n’est pas une blague, mais David y est 
pour quelque chose. Il a créé un programme sahns le 
savoir. HAHAHAHAHAHHAHAHHAHAAHHAHAHHAAH</p>
<div> <span>12:39</span> </div>   </div>
        
        <div style={{display:"flex"}}>
        {displayopt &&<div  className="optmsg">
  <p> Important</p>
  <p> Répondre</p>
  <p> Transférer</p>
  <p> Copier</p>
  <p> Info</p>
</div>}
        <div onClick={()=>{setdisplayopt(!displayopt)}} className="cnv2">
<p> Oui et non. Ce n’est pas une blague, mais 
David y est pour quelque chose. Il a créé 
un programme sans le savoir. David y 
est pour quelque chose. Il a créé un programme sans le savoir. Oui et non. Ce </p>
<div> <span>12:39</span> </div>  






  </div>
 
  </div>

 {/* <div className="sentmsg">  <input placeholder="écrivez ..."  />  </div> */}

      </div>
      <div className="inpsnet" style={{ display: "flex" }}>
            {" "}
            <img className="imgsent" src="https://i.imgur.com/0I4lkh9.jpg" />{" "}
            <input  className="sentmsg" placeholder="écrivez ..." />
            <img className="sentbtn" src={play} />{" "}
          </div>
    </div>
  );
};

export default Conversation;
