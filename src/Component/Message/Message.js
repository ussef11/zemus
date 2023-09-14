import React, { useState } from "react";
import "./Message.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import pin from "../../media/pin.png";
import smile from "../../media/smile.png";
import favoris from "../../media/favoris.png";
import verificato from "../../media/verificato.png";
import heart from "../../media/heart.png";

const Message = () => {
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
    <div className="msg-container">
      <div className="msg-head">
        <h1> <span style={{color:'black'}} >+ </span>  Que voulez-vous partager?</h1>

        <div className="serachams">
          <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "386px",
              marginTop: 0,
              borderRadius: "67px",
              border: "1px solid #00D5F3",
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
      </div>

      <div className="msg-div">
        <div className="inputOne">
          <textarea
            tabindex="i"
            pattern="\d+"
            placeholder="Rédiger un message ..."
            className="messageinp"
            rows={16}
          />
          <span className="l"></span>
          <div className="icons">
            <img src={pin} />
            <img src={smile} />
            <img src={favoris} />
            <span class="material-symbols-outlined">delete</span>
          </div>
        </div>
        <div className="inputtow">
          <div className="Message1">
            <input
            style={{backgroundColor:"#009ccc"}}
              title="Write Message"
              tabindex="i"
              pattern="\d+"
              placeholder="Théme ..."
              class="MsgInput"
              type="text"
            />
            <span className="l"></span>
          </div>
          <div style={{ marginTop: "5px" }} className="Message1">
            <textarea
                        style={{backgroundColor:"#009ccc"}}
              tabindex="i"
              pattern="\d+"
              placeholder="Rédiger une revue de presse ..."
              class="Msgarea"
              rows={16}
            />
            <span class="l"></span>
          </div>

          <div className="icons">
            <img src={pin} />
            <img src={smile} />
            <img src={favoris} />
            <span class="material-symbols-outlined">delete</span>
          </div>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div className="postcontainer">
          <div className="profimg">
            <img src="https://i.imgur.com/0I4lkh9.jpg" />
            <div className="profname">
              <div style={{ display: "flex" }}>
                {" "}
                <h2> Salah Houbni </h2>
                <img className="verificato" src={verificato} />
              </div>
              <span className="infofriendspan">@salah_polib</span>
            </div>

            <div className="divivcons">
              <span className="material-symbols-outlined">share</span>
              <span className="number">73</span>
              <span className="material-symbols-outlined">more_vert</span>
              <img className="heart" src={heart} />
            </div>
          </div>

          <div className="articlemsg">
            <h2>
              {" "}
              <span>Cristiano Ronaldo </span> devance Lionel Messi au classement
              des fortune{" "}
            </h2>

            <p>
              Le débat du GOAT est relancé: Selon des données présentées par le
              site SafeBettingSites. com, le Portugais Cristiano Ronaldo a
              récolté 16 millions de dollars de plus que son rival Lionel Messi.
              Leurs contrats dans leurs équipes respectives et les parrainages
              qu’ils entretiennent avec des partenaires et des marques ont été
              analysés pour établir cette classification. Déjà en tête du
              classement Forbes des sportifs les mieux payés de l’année 2023,
              CR7 est également le premier au total des cinq dernières années.
              En effet, sur cette longue période, l’attaquant d’Al-Nassr a
              empoché 629 millions de dollars, soit 16 millions de plus que
              l’attaquant argentin. Néanmoins, Messi possède des revenus hors
              terrains inférieurs à ceux du Portugais qui ont doublé en cinq
              ans. De fait, La Pulga a gagné 406 millions de dollars grâce à son
              salaire en club, loin devant son concurrent, devancé de 61
              millions de dollars. Les deux joueurs peuvent remercier leur forte
              influence sur les réseaux sociaux et leur notoriété grandissante
              qui leur permet d’amortir leurs fins de mois. Messi repassera
              devant dès son arrivée en Arabie saoudite.
            </p>

            <img
              src="https://www.ferra.ru/thumb/860x0/filters:quality(75):no_upscale()/imgs/2022/06/25/15/5467074/9b8ac64149ba0a542220a03b494c6ad99f9206aa.jpg"
              alt="iphone 13 laying between plants on steel rail"
            />
          </div>
        </div>

        <div className="commenaireContainer">
          <div className="inppd" style={{ display: "flex" }}>
            {" "}
            <img src="https://i.imgur.com/0I4lkh9.jpg" />{" "}
            <input className="inpcom" placeholder="écrire un commentaire ..." />
          </div>

          <div>
            <div className="proficom">
              <img src="https://i.imgur.com/0I4lkh9.jpg" />
              <div className="profname">
                <div style={{ display: "flex" }}>
                  <h2> Joseph Mortani</h2>
                </div>
                <span style={{ color: "black" }} className="spanp">
                  oui c’est vrai je suis d’accord mais il aurait pu mieux gérer
                  sa situation.
                </span>
              </div>
            </div>
            <div className="jaimdiv">
              <span className="jaimespan"> J’aime</span>{" "}
              <img className="jaimeicon" src={heart} />
              <p>répondre</p>
            </div>
          </div>

          <div>
            <div className="proficom">
              <img src="https://i.imgur.com/0I4lkh9.jpg" />
              <div className="profname">
                <div style={{ display: "flex" }}>
                  <h2> Joseph Mortani</h2>
                </div>
                <span style={{ color: "black" }} className="spanp">
                  oui c’est vrai je suis d’accord mais il aurait pu mieux gérer
                  sa situation.
                </span>
              </div>
            </div>
            <div className="jaimdiv">
              <span className="jaimespan"> J’aime</span>{" "}
              <img className="jaimeicon" src={heart} />
              <p>répondre</p>
            </div>
          </div>

          <div>
            <div className="proficom">
              <img src="https://i.imgur.com/0I4lkh9.jpg" />
              <div className="profname">
                <div style={{ display: "flex" }}>
                  <h2> Joseph Mortani</h2>
                </div>
                <span style={{ color: "black" }} className="spanp">
                  oui c’est vrai je suis d’accord mais il aurait pu mieux gérer
                  sa situation.
                </span>
              </div>
            </div>
            <div className="jaimdiv">
              <span className="jaimespan"> J’aime</span>{" "}
              <img className="jaimeicon" src={heart} />
              <p>répondre</p>
            </div>
          </div>

          <div>
            <div className="proficom">
              <img src="https://i.imgur.com/0I4lkh9.jpg" />
              <div className="profname">
                <div style={{ display: "flex" }}>
                  <h2> Joseph Mortani</h2>
                </div>
                <span style={{ color: "black" }} className="spanp">
                  oui c’est vrai je suis d’accord mais il aurait pu mieux gérer
                  sa situation.
                </span>
              </div>
            </div>
            <div className="jaimdiv">
              <span className="jaimespan"> J’aime</span>{" "}
              <img className="jaimeicon" src={heart} />
              <p>répondre</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Message;
