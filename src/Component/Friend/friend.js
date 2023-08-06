import React, { useState } from "react";
import "./friend.css";
import amis from "../../media/amis.png";
import cancel from "../../media/cancel.svg";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const Friend = () => {

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
    <div style={{display:"flex"}}>
      <div className="friendcontainer">
    <div className="titlefriend">
    <img src={amis} />
    <h1> Touts les amis</h1>
      </div>    
<div className="Allfriend">
        <div className="friend">
          <img src="https://i.imgur.com/A7lNstm.jpg" />
          <div className="infodivfriend">
            <p> Salah Houbni </p>
            <span  className="infofriendspan">@salah_polib</span>
          </div>
          <img className="imgcancel"  onClick={()=>{alert("delete Friend")}} src={cancel} />
         
        </div>

        
        <div className="friend">
          <img src="https://i.imgur.com/A7lNstm.jpg" />
          <div className="infodivfriend">
            <p> Salah Houbni </p>
            <span  className="infofriendspan">@salah_polib</span>
          </div>

          <img  className="imgcancel"  src={cancel} />
        </div>

        <div className="friend">
          <img src="https://i.imgur.com/A7lNstm.jpg" />
          <div className="infodivfriend">
            <p> Salah Houbni </p>
            <span  className="infofriendspan">@salah_polib</span>
          </div>

          <img  className="imgcancel"  src={cancel} />
        </div>

        <div className="friend">
          <img src="https://i.imgur.com/A7lNstm.jpg" />
          <div className="infodivfriend">
            <p> Salah Houbni </p>
            <span  className="infofriendspan">@salah_polib</span>
          </div>

          <img  className="imgcancel"  src={cancel} />
        </div>

        <div className="friend">
          <img src="https://i.imgur.com/A7lNstm.jpg" />
          <div className="infodivfriend">
            <p> Salah Houbni </p>
            <span  className="infofriendspan">@salah_polib</span>
          </div>

          <img  className="imgcancel"  src={cancel} />
        </div>

        <div className="friend">
          <img src="https://i.imgur.com/A7lNstm.jpg" />
          <div className="infodivfriend">
            <p> Salah Houbni </p>
            <span  className="infofriendspan">@salah_polib</span>
          </div>

          <img  className="imgcancel"  src={cancel} />
        </div>

        <div className="friend">
          <img src="https://i.imgur.com/A7lNstm.jpg" />
          <div className="infodivfriend">
            <p> Salah Houbni </p>
            <span  className="infofriendspan">@salah_polib</span>
          </div>

          <img  className="imgcancel"  src={cancel} />
        </div>

        <div className="friend">
          <img src="https://i.imgur.com/A7lNstm.jpg" />
          <div className="infodivfriend">
            <p> Salah Houbni </p>
            <span  className="infofriendspan">@salah_polib</span>
          </div>

          <img  className="imgcancel"  src={cancel} />
        </div>

        <div className="friend">
          <img src="https://i.imgur.com/A7lNstm.jpg" />
          <div className="infodivfriend">
            <p> Salah Houbni </p>
            <span  className="infofriendspan">@salah_polib</span>
          </div>

          <img  className="imgcancel"  src={cancel} />
        </div>

        <div className="friend">
          <img src="https://i.imgur.com/A7lNstm.jpg" />
          <div className="infodivfriend">
            <p> Salah Houbni </p>
            <span  className="infofriendspan">@salah_polib</span>
          </div>

          <img  className="imgcancel"  src={cancel} />
        </div>

        <div className="friend">
          <img src="https://i.imgur.com/A7lNstm.jpg" />
          <div className="infodivfriend">
            <p> Salah Houbni </p>
            <span  className="infofriendspan">@salah_polib</span>
          </div>

          <img  className="imgcancel"  src={cancel} />
        </div>



        </div>
        

      </div>

      <div   style={{marginLeft:"28px"}}>

      <div className="serach">
        <Paper
          component="form"
          onSubmit={handleSubmit}
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width:"386px",
            marginTop:0,
            borderRadius:"67px",
            border:"1px solid green"
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
      </div>


        <h2 className="h2seg">Suggestions:</h2>
      <div className="Allfriendseg">
        <div className="friendseg">
          <img src="https://i.imgur.com/A7lNstm.jpg" />
          <div>
            <p> Salah Houbni </p>
            <span  className="infoseg">@salah_polib</span>

            
          </div>
          <button>Suivre</button>
        </div>
        <div className="friendseg">
          <img src="https://i.imgur.com/A7lNstm.jpg" />
          <div>
            <p> Salah Houbni </p>
            <span  className="infoseg">@salah_polib</span>

            
          </div>
          <button>Suivre</button>
        </div>
        <div className="friendseg">
          <img src="https://i.imgur.com/A7lNstm.jpg" />
          <div>
            <p> Salah Houbni </p>
            <span  className="infoseg">@salah_polib</span>

            
          </div>
          <button>Suivre</button>
        </div>
        <div className="friendseg">
          <img src="https://i.imgur.com/A7lNstm.jpg" />
          <div>
            <p> Salah Houbni </p>
            <span  className="infoseg">@salah_polib</span>

            
          </div>
          <button>Suivre</button>
        </div>
        <div className="friendseg">
          <img src="https://i.imgur.com/A7lNstm.jpg" />
          <div>
            <p> Salah Houbni </p>
            <span  className="infoseg">@salah_polib</span>

            
          </div>
          <button>Suivre</button>
        </div>
        <div className="friendseg">
          <img src="https://i.imgur.com/A7lNstm.jpg" />
          <div>
            <p> Salah Houbni </p>
            <span  className="infoseg">@salah_polib</span>

            
          </div>
          <button>Suivre</button>
        </div>

       
        <div className="friendseg">
          <img src="https://i.imgur.com/A7lNstm.jpg" />
          <div>
            <p> Salah Houbni </p>
            <span  className="infoseg">@salah_polib</span>

            
          </div>
          <button>Suivre</button>
        </div>

       
        <div className="friendseg">
          <img src="https://i.imgur.com/A7lNstm.jpg" />
          <div>
            <p> Salah Houbni </p>
            <span  className="infoseg">@salah_polib</span>

            
          </div>
          <button>Suivre</button>
        </div>

       


        </div>
      
      </div>


    </div>
  );
};

export default Friend;
