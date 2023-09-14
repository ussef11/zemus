import React, { useEffect, useState } from "react";
import { Profile } from "./profile";
import Side from "../sidecontainer/side";
import acc from "../../media/accpage.svg";
import Articles from "./articles";
import Articlesfav from "./articlesfav";
import Friend from "../Friend/friend";
import Suivis from "../Suivis/suivis";
import { Context } from "../../Helper/Context";
import Message from "../Message/Message";
import Listmsg from "../Listmsg/Listmsg";
import Conversation from "../Conversation/Conversation";
import Profil from "../Profile/Profile";
import Publication from "../Publication/Publication";
import ProfilInfo from "../Profile/ProfilInfo";
import Conditions from "../CONDITIONS/Conditions";
import ListeRevue from "../ListeRevue/ListeRevue";

import amis from "../../media/amis.svg";
import conversation_apropo from "../../media/conversation_apropo.svg";
import messagerie from "../../media/messagerie.svg";
import profilfond from "../../media/profilfond.svg";
import fils from "../../media/fils.svg";

const Home = () => {
  const [Fil, SetFil] = useState();
  const [selection, setselection] = useState(false);
  const [publicationID, setPublicationID] = useState(false);

  useEffect(() => {
    console.log(Fil);
  }, [Fil]);

  return (
    <Context.Provider
      value={{
        Fil,
        SetFil,
        selection,
        setselection,
        publicationID,
        setPublicationID,
      }}
    >
      <div
        className="homecontainer"
       
      >
        <div style={{ display: "flex", width: "100%" }} className="sidprof">
        <Side />
          <div  className="bgcontainer"  style={
          Fil === "fil"
            ? { backgroundImage: `url(${fils})` }
            : Fil === "friendmsg"
            ? { backgroundImage: `url(${messagerie})` }
            : Fil === "profile"  ?  { backgroundImage: `url(${profilfond})` }
            : Fil === "amis"  ? { backgroundImage: `url(${amis})` }
            : Fil  === "conv" ? { backgroundImage: `url(${conversation_apropo})` }
            : Fil === "articlefav" ?{ backgroundImage: `url(${amis})` }
            :  Fil  === "suivis"  ? { backgroundImage: `url(${fils})` }
            : { backgroundImage: `url(${acc})` }
        }>
           
            <div className="allcontainer" >
              {Fil !== "conv" &&
              Fil !== "profile" &&
              Fil !== "Société" &&
              Fil !== "ListeRevue" ? (
                <Profile />
              ) : null}
              {Fil === "fil" ? (
                <Articles />
              ) : Fil === "articlefav" ? (
                <Articlesfav />
              ) : Fil === "amis" ? (
                <Friend />
              ) : Fil === "suivis" ? (
                <Suivis />
              ) : Fil === "msg" ? (
                <Message />
              ) : Fil === "friendmsg" ? (
                <Listmsg />
              ) : Fil === "conv" ? (
                <Conversation />
              ) : Fil === "profile" ? (
                <Profil />
              ) : Fil === "Publication" ? (
                <Publication />
              ) : Fil === "ProfilInfo" ? (
                <ProfilInfo />
              ) : Fil === "Société" ? (
                <Conditions />
              ) : Fil === "ListeRevue" ? (
                <ListeRevue />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Context.Provider>
  );
};

export default Home;
