import React, { useState } from 'react'
import "./Profile.css"
import verificato from "../../media/verificato.png";
import heart from "../../media/heart.png";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
const Profile = () => {

    
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
    <div className='profileContainer'>

<div className="profimg">
            <img src="https://i.imgur.com/0I4lkh9.jpg" />
            <div style={{ marginTop: "29px" }} >    <div className="profnameprof">
              <div style={{ display: "flex" }}>
                {" "}
                <h2> Salah Houbni </h2>
                <img className="verificato" src={verificato} />
              </div>
       
              <span style={{ marginLeft: "3px" }} className="infofriendspan">A propos</span>
           
            
   

             
            </div>
            <button class="btnpremm">Passer a la version Premium</button>  </div>
            <div className="divivcons">
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
            </div>
          </div>

<div  className='allPub'> 
<div className="publications">
    <h1>Derniere Publications:</h1>
          <div className='publication'>
          <span style={{ marginLeft: "3px" }} className="infofriendspan">• Click pour Voir plus</span>
          <h3>Cristiano Ronaldo devance Lionel 
Messi au classement des fortunes</h3>
          <p>Le débat du GOAT est relancé: Selon des données présentées par le site SafeBettingSites.com, le Portugais Cristiano Ronaldo a récolté 16 millions de dollars de plus que son rival Lionel </p>
          
          <img class="item-photoProf" src="https://www.ferra.ru/thumb/860x0/filters:quality(75):no_upscale()/imgs/2022/06/25/15/5467074/9b8ac64149ba0a542220a03b494c6ad99f9206aa.jpg" alt="iphone 13 laying between plants on steel rail"/>
          </div>
          <div className='publication'>
          <span style={{ marginLeft: "3px" }} className="infofriendspan">• Click pour Voir plus</span>
          <h3>Cristiano Ronaldo devance Lionel 
Messi au classement des fortunes</h3>
          <p>Le débat du GOAT est relancé: Selon des données présentées par le site SafeBettingSites.com, le Portugais Cristiano Ronaldo a récolté 16 millions de dollars de plus que son rival Lionel </p>
          
          <img class="item-photoProf" src="https://www.ferra.ru/thumb/860x0/filters:quality(75):no_upscale()/imgs/2022/06/25/15/5467074/9b8ac64149ba0a542220a03b494c6ad99f9206aa.jpg" alt="iphone 13 laying between plants on steel rail"/>
          </div>



          </div>

          <div className="publications2">
    <h1>Liste Revue de presse:</h1>
          <div className='publication'>
            <h4>• Click pour Voir </h4>
          <img class="item-photoProf" src="https://www.ferra.ru/thumb/860x0/filters:quality(75):no_upscale()/imgs/2022/06/25/15/5467074/9b8ac64149ba0a542220a03b494c6ad99f9206aa.jpg" alt="iphone 13 laying between plants on steel rail"/>
          <span style={{ marginLeft: "3px" }} className="infofriendspan">• Zemus info</span>
          <h3>Cristiano Ronaldo devance Lionel 
Messi au classement des fortunes</h3>
          <p>Le débat du GOAT est relancé: Selon des données présentées par le site SafeBettingSites.com, le Portugais Cristiano Ronaldo a récolté 16 millions de dollars de plus que son rival Lionel </p>
          
        
          </div>



          <div className='publication'>
            <h4>• Click pour Voir </h4>
          <img class="item-photoProf" src="https://www.ferra.ru/thumb/860x0/filters:quality(75):no_upscale()/imgs/2022/06/25/15/5467074/9b8ac64149ba0a542220a03b494c6ad99f9206aa.jpg" alt="iphone 13 laying between plants on steel rail"/>
          <span style={{ marginLeft: "3px" }} className="infofriendspan">• Zemus info</span>
          <h3>Cristiano Ronaldo devance Lionel 
Messi au classement des fortunes</h3>
          <p>Le débat du GOAT est relancé: Selon des données présentées par le site SafeBettingSites.com, le Portugais Cristiano Ronaldo a récolté 16 millions de dollars de plus que son rival Lionel </p>
          
        
          </div>


          </div>



          <div class="timeline">
	<div class="container left">
		<div class="content">
			<h2>Tecnologia</h2>
			
		</div>
	</div>

	

	<div class="container left">
		<div class="content">
			<h2>Matematica</h2>
			
		</div>
	</div>
</div>


          </div>

</div>
  )
}

export default Profile