import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

import AssignmentIcon from "@mui/icons-material/Assignment";
import Collapse from "@mui/material/Collapse";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PublicIcon from "@mui/icons-material/Public";
import InfoIcon from "@mui/icons-material/Info";
import Logo from "../../media/logonobg.png";
import React, { useContext, useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Context } from "../../Helper/Context";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import etoille from "../../media/start.jpeg"
import Noetoille from "../../media/startred.png"
import h from "../../media/h.png"
import bookmark from "../../media/fav.jpeg"
import amis from "../../media/amis.png"
import message from "../../media/message.png"
import Chroniques from "../../media/ICONS THEMATIQUE/Fichier 5_1.png"
import Societe from "../../media/ICONS THEMATIQUE/Fichier2.png"
import culture from "../../media/ICONS THEMATIQUE/Fichier 3.png"
import vivre from "../../media/ICONS THEMATIQUE/Fichier 4.png"
import ajouterth from "../../media/ICONS THEMATIQUE/ajouter une thématique_1.png"
import info from "../../media/ICONS THEMATIQUE/info.png"
import Planete from "../../media/ICONS THEMATIQUE/monde.png"

import "./side.css";
const Side = () => {
  const { Fil, SetFil } = useContext(Context);
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const [searchTerm, setSearchTerm] = useState("");

   
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the search term (e.g., make an API call)
    console.log("Search term:", searchTerm);
    alert(searchTerm);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader  onClick={() => {
          try {
            SetFil("fil");
          } catch (error) {
            window.location.replace("/");
          }
          
        }} component="div" id="nested-list-subheader">
          <img
            src={Logo}
            className="logo"
            style={{ width: "220px", marginTop: "17px" }}
            alt="Logo"
          />
        </ListSubheader>
      }
    >
      <ListItemButton
      onClick={() => {
        try {
          SetFil("msg");
        } catch (error) {
           window.location.replace("/");
        }
       }}
      >
         <img className="imgicon" src={h} />
        <span className="spanacc">Fil d’actualité</span>
      </ListItemButton>
      <ListItemButton

onClick={() => {
  try {
    SetFil("articlefav");
  } catch (error) {
     window.location.replace("/");
  }
 }}
     
      >
         <img className="imgiconfav" src={bookmark} />
        <span className="spanacc">Articles favoris</span>
      </ListItemButton>
      <ListItemButton

onClick={() => {
  try {
    SetFil("amis");
  } catch (error) {
     window.location.replace("/");
  }
 }}

   
      >
        <img className="imgicon" src={amis} />
        <span className="spanacc">Amis</span>
      </ListItemButton>

      <ListItemButton  
      onClick={() => {
        try {
          SetFil("suivis");
        } catch (error) {
           window.location.replace("/");
        }
       }}
      
      
   >
       <img className="imgicon" src={etoille} />
        <span className="spanacc">Suivis</span>
      </ListItemButton>

      <ListItemButton 
    onClick={() => {
      try {
        SetFil("friendmsg");
      } catch (error) {
         window.location.replace("/");
      }
     }}


      >
         <img className="imgiconMessage" src={message} />
        <span className="spanacc">Message</span>
      </ListItemButton>
      
      <ListItemButton 
        onClick={() => {
          try {
            SetFil("profile");
          } catch (error) {
             window.location.replace("/");
          }
         }}
        
        >
       
       <img className="iconProfil" src="https://i.imgur.com/0I4lkh9.jpg"/>
        <span className="spanacc">Profil</span>
      </ListItemButton>

      {
        Fil !== "amis" && Fil !== "suivis" && Fil !== "msg"  && Fil !== "friendmsg" && Fil !== "conv" && Fil !== "profile" 
         && Fil !== "ProfilInfo" ? (
          <>
            {" "}
            <ListItemButton x={{ marginLeft: "35px", marginBottom: "-8px" }}>
              <span className="title">Thématiques</span>
            </ListItemButton>
            <ListItemButton sx={{ marginLeft: "35px", marginBottom: "8px" }}>
            <img className="imgicon" src={Chroniques} />
              <span className="spanacc">Chroniques</span>
            </ListItemButton>
            <ListItemButton sx={{ marginLeft: "35px", marginTop: "-12px" }}>
            <img className="imgicon" src={etoille} /> <span className="ff">
                {" "}
                  Politique
                Choix Élections
              </span>
            </ListItemButton>
            <ListItemButton sx={{ marginLeft: "35px", marginTop: "-12px" }}>
                 <img className="imgicon" src={Noetoille} /> <span className="ff">
                {" "}
                  Économie
                Finance
              </span>
            </ListItemButton>
            <ListItemButton sx={{ marginLeft: "35px", marginTop: "-12px" }}>
                 <img className="imgicon" src={Noetoille} /> <span className="ff">
                {" "}
                  Contrats
                Investissements
              </span>
            </ListItemButton>
            <ListItemButton sx={{ marginLeft: "35px", marginTop: "-12px" }}>
                 <img className="imgicon" src={Noetoille} /> <span className="ff">
                {" "}
                   Affaires
                étrangères
              </span>
            </ListItemButton>
            <ListItemButton sx={{ marginLeft: "35px", marginTop: "-12px" }}>
                 <img className="imgicon" src={etoille} /> <span className="ff">
                {" "}
                  Fête
                Commémoration
              </span>
            </ListItemButton>
            <ListItemButton sx={{ marginLeft: "35px", marginTop: "-12px" }}>
                 <img className="imgicon" src={etoille} /> <span className="ff">
                {" "}
                  Théâtre
                Concert Exposition
              </span>
            </ListItemButton>
            <ListItemButton
                onClick={() => {
                  try {
                    SetFil("Société");
                  } catch (error) {
                     window.location.replace("/");
                  }
                 }}
            
     >
               <img className="imgicon" src={Societe} />
              <span className="spanacc">Société</span>
            </ListItemButton>

            <ListItemButton>
            <img className="imgicon" src={culture} />
              <span className="spanacc">Culture</span>
            </ListItemButton>

            <ListItemButton>
            <img className="imgicon" src={vivre} />
              <span className="spanacc">Vivre ensemble</span>
            </ListItemButton>

            <ListItemButton>
            <img className="imgicon" src={Planete} />
              <span className="spanacc">Planète</span>
            </ListItemButton>
            <ListItemButton>
            <img className="imgicon" src={ajouterth} />
              <span className="spanacc">Ajouté un thématique</span>
            </ListItemButton>

            <ListItemButton onClick={handleClick}>
            <img className="imgicon" src={info} />
              <span className="spanacc">Informations</span>
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4, marginLeft: "35px", marginTop: "-12px" }}
                >
                  <span className="ff">
                    Nom : <span className="spblack">France</span>{" "}
                  </span>
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4, marginLeft: "35px", marginTop: "-12px" }}
                >
                  <span className="ff">
                    Capital : <span className="spblack">Paris</span>{" "}
                  </span>
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4, marginLeft: "35px", marginTop: "-12px" }}
                >
                  <span className="ff">
                    Population : <span className="spblack">67391582</span>
                  </span>
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4, marginLeft: "35px", marginTop: "-12px" }}
                >
                  <span className="ff">
                    Gentilé: <span className="spblack">Français</span>
                  </span>
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4, marginLeft: "35px", marginTop: "-12px" }}
                >
                  <span className="ff">
                    Devise : <span className="spblack">Euro</span>
                  </span>
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4, marginLeft: "35px", marginTop: "-12px" }}
                >
                  <span className="ff">
                    Langue :<span className="spblack"> Français</span>
                  </span>
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4, marginLeft: "35px", marginTop: "-12px" }}
                >
                  <span className="ff">
                    Région : <span className="spblack">Europe</span>{" "}
                  </span>
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4, marginLeft: "35px", marginTop: "-12px" }}
                >
                  <span className="ff">
                    Sous-région :{" "}
                    <span className="spblack">Europe de l’Ouest</span>
                  </span>
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4, marginLeft: "35px", marginTop: "-12px" }}
                >
                  <span className="ff">
                    Téléphone : <span className="spblack"> +33</span>
                  </span>
                </ListItemButton>
              </List>
            </Collapse>{" "}
          </>
        ) : (
          <>    {   Fil !== "profile"  && Fil !== "ProfilInfo"  ?   <> 
                <div className="serach">
        <Paper
          component="form"
          onSubmit={handleSubmit}
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width:"313px",
            marginTop:"20px",
            borderRadius:"67px",
            border:"1px solid #00D5F3",
            marginLeft:"21px",
            height:"40px",
            marginRight:"9px"
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Recherche amis ..."
            inputProps={{ "aria-label": "Rechercher" }}
            value={searchTerm}
            onChange={handleInputChange}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>

        <p className="voir">Voir les invitations envoyeés:
</p>
      </div>

      
<div className="listamisdiv">
          <ul id="friend-list"  >
            <li className="friendsent">
              <img src="https://i.imgur.com/0I4lkh9.jpg" />
              <div className="name">
                <p> Salah Houbni  </p>
               { Fil=== "msg" ? <> <span class="infofriendspan">@salah_polib</span> </>
               : <> <button className="btnconferm"> Confimer </button>
              <button className="btnsupp"> Supprimer </button></> }
              </div>
            </li>
          </ul>
          <ul id="friend-list">
            <li className="friendsent">
              <img src="https://i.imgur.com/0I4lkh9.jpg" />
              <div className="name">
                <p> Salah Houbni  </p>
               { Fil=== "msg" ? <> <span class="infofriendspan">@salah_polib</span> </>
               : <> <button className="btnconferm"> Confimer </button>
              <button className="btnsupp"> Supprimer </button></> }
              </div>
            </li>
          </ul>
          <ul id="friend-list">
            <li className="friendsent">
              <img src="https://i.imgur.com/0I4lkh9.jpg" />
              <div className="name">
                <p> Salah Houbni  </p>
               { Fil=== "msg" ? <> <span class="infofriendspan">@salah_polib</span> </>
               : <> <button className="btnconferm"> Confimer </button>
              <button className="btnsupp"> Supprimer </button></> }
              </div>
            </li>
          </ul>
          <ul id="friend-list">
            <li className="friendsent">
              <img src="https://i.imgur.com/0I4lkh9.jpg" />
              <div className="name">
                <p> Salah Houbni  </p>
               { Fil=== "msg" ? <> <span class="infofriendspan">@salah_polib</span> </>
               : <> <button className="btnconferm"> Confimer </button>
              <button className="btnsupp"> Supprimer </button></> }
              </div>
            </li>
          </ul>
          <ul id="friend-list">
            <li className="friendsent">
              <img src="https://i.imgur.com/0I4lkh9.jpg" />
              <div className="name">
                <p> Salah Houbni  </p>
               { Fil=== "msg" ? <> <span class="infofriendspan">@salah_polib</span> </>
               : <> <button className="btnconferm"> Confimer </button>
              <button className="btnsupp"> Supprimer </button></> }
              </div>
            </li>
          </ul>
          <ul id="friend-list">
            <li className="friendsent">
              <img src="https://i.imgur.com/0I4lkh9.jpg" />
              <div className="name">
                <p> Salah Houbni  </p>
               { Fil=== "msg" ? <> <span class="infofriendspan">@salah_polib</span> </>
               : <> <button className="btnconferm"> Confimer </button>
              <button className="btnsupp"> Supprimer </button></> }
              </div>
            </li>
          </ul>
          <ul id="friend-list">
            <li className="friendsent">
              <img src="https://i.imgur.com/0I4lkh9.jpg" />
              <div className="name">
                <p> Salah Houbni  </p>
               { Fil=== "msg" ? <> <span class="infofriendspan">@salah_polib</span> </>
               : <> <button className="btnconferm"> Confimer </button>
              <button className="btnsupp"> Supprimer </button></> }
              </div>
            </li>
          </ul>
          <ul id="friend-list">
            <li className="friendsent">
              <img src="https://i.imgur.com/0I4lkh9.jpg" />
              <div className="name">
                <p> Salah Houbni  </p>
               { Fil=== "msg" ? <> <span class="infofriendspan">@salah_polib</span> </>
               : <> <button className="btnconferm"> Confimer </button>
              <button className="btnsupp"> Supprimer </button></> }
              </div>
            </li>
          </ul>
          <ul id="friend-list">
            <li className="friendsent">
              <img src="https://i.imgur.com/0I4lkh9.jpg" />
              <div className="name">
                <p> Salah Houbni  </p>
               { Fil=== "msg" ? <> <span class="infofriendspan">@salah_polib</span> </>
               : <> <button className="btnconferm"> Confimer </button>
              <button className="btnsupp"> Supprimer </button></> }
              </div>
            </li>
          </ul>
          </div> 
          </> : null} </>
        )

        
      }
    </List>
  );
};

export default Side;
