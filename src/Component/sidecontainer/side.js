import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import NewsIcon from "@mui/icons-material/Article";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PeopleIcon from "@mui/icons-material/People";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
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
import etoille from "../../media/etoille.png"
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
        <ListSubheader component="div" id="nested-list-subheader">
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
          SetFil("fil");
        }}
      >
        <ListItemIcon>
          <NewsIcon style={{ fill: "green" }} />
        </ListItemIcon>
        <span className="spanacc">Fil d’actualité</span>
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          SetFil("articlefav");
        }}
      >
        <ListItemIcon>
          <FavoriteIcon style={{ fill: "green" }} />
        </ListItemIcon>
        <span className="spanacc">Articles favoris</span>
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          SetFil("amis");
        }}
      >
        <ListItemIcon>
          <PeopleIcon style={{ fill: "green" }} />
        </ListItemIcon>
        <span className="spanacc">Amis</span>
      </ListItemButton>

      <ListItemButton   onClick={() => {
          SetFil("suivis");
        }} >
       <img className="imgicon" src={etoille} />
        <span className="spanacc">Suivis</span>
      </ListItemButton>

      <ListItemButton 
       onClick={() => {
        SetFil("msg");
      }}
      >
        <ListItemIcon>
          <MessageIcon style={{ fill: "green" }} />
        </ListItemIcon>
        <span className="spanacc">Message</span>
      </ListItemButton>
      
      <ListItemButton   onClick={() => {
          SetFil("profile");
        }}>
        <ListItemIcon  
       >
          <PersonIcon style={{ fill: "green" }} />
        </ListItemIcon>
        <span className="spanacc">Profil</span>
      </ListItemButton>

      {
        Fil !== "amis" && Fil !== "suivis" && Fil !== "msg"  && Fil !== "friendmsg" && Fil !== "conv" && Fil !== "profile" ? (
          <>
            {" "}
            <ListItemButton x={{ marginLeft: "35px", marginBottom: "-8px" }}>
              <span className="title">Thématiques</span>
            </ListItemButton>
            <ListItemButton sx={{ marginLeft: "35px", marginBottom: "8px" }}>
              <ListItemIcon>
                <AssignmentIcon style={{ fill: "green" }} />
              </ListItemIcon>
              <span className="spanacc">Chroniques</span>
            </ListItemButton>
            <ListItemButton sx={{ marginLeft: "35px", marginTop: "-12px" }}>
              <span className="ff">
                {" "}
                <span class="material-symbols-outlined">star </span> Politique
                Choix Élections
              </span>
            </ListItemButton>
            <ListItemButton sx={{ marginLeft: "35px", marginTop: "-12px" }}>
              <span className="ff">
                {" "}
                <span class="material-symbols-outlined">star </span> Économie
                Finance
              </span>
            </ListItemButton>
            <ListItemButton sx={{ marginLeft: "35px", marginTop: "-12px" }}>
              <span className="ff">
                {" "}
                <span class="material-symbols-outlined">star </span> Contrats
                Investissements
              </span>
            </ListItemButton>
            <ListItemButton sx={{ marginLeft: "35px", marginTop: "-12px" }}>
              <span className="ff">
                {" "}
                <span class="material-symbols-outlined">star </span> Affaires
                étrangères
              </span>
            </ListItemButton>
            <ListItemButton sx={{ marginLeft: "35px", marginTop: "-12px" }}>
              <span className="ff">
                {" "}
                <span class="material-symbols-outlined">star </span> Fête
                Commémoration
              </span>
            </ListItemButton>
            <ListItemButton sx={{ marginLeft: "35px", marginTop: "-12px" }}>
              <span className="ff">
                {" "}
                <span class="material-symbols-outlined">star </span> Théâtre
                Concert Exposition
              </span>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <PeopleAltIcon style={{ fill: "green" }} />
              </ListItemIcon>
              <span className="spanacc">Société</span>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <PublicIcon style={{ fill: "green" }} />
              </ListItemIcon>
              <span className="spanacc">Culture</span>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <PeopleAltIcon style={{ fill: "green" }} />
              </ListItemIcon>
              <span className="spanacc">Vivre ensemble</span>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <PublicIcon style={{ fill: "green" }} />
              </ListItemIcon>
              <span className="spanacc">Planète</span>
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <InfoIcon style={{ fill: "green" }} />
              </ListItemIcon>
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
          <>    {   Fil !== "profile"  ?   <> 
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
            border:"1px solid green",
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
          <ul id="friend-list"  onClick={()=>{SetFil("friendmsg")}}>
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
