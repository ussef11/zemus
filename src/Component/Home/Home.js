import React, { useState } from "react";
import { Profile } from "./profile";
import Side from "../sidecontainer/side";
import backgroundImg from "../../media/Ligne.png";
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

const Home = () => {
  const [Fil, SetFil] = useState();
  const [selection, setselection] = useState(false);
  const [publicationID, setPublicationID] = useState(false);

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
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="sidprof">
          <div style={{ display: "flex", width: "100%" }}>
            <Side/>
            <div className="allcontainer">
              {Fil !== "conv" && Fil !== "profile"  && Fil !=="Société" && Fil !== "ListeRevue" ? <Profile /> : null}
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
              ) : Fil ==="Société"  ?
              <Conditions/>  
              : Fil === "ListeRevue" ?
              <ListeRevue/>
              
               :(
                null
              )}
            </div>
          </div>
        </div>
      </div>
    </Context.Provider>
  );
};

export default Home;
