import React, { useContext, useState } from 'react'
import "./Profile.css"
import verificato from "../../media/verificato.png";
import heart from "../../media/heart.png";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Context } from '../../Helper/Context';
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled, alpha } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 8,
    marginTop: theme.spacing(1),
    minWidth: 210,
    color: "green", // Change text color to green
    backgroundColor: "transparent", // Change background color to transparent
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 25,
        color: theme.palette.text.secondary,
        color: "green", // Change text color to green
        backgroundColor: "transparent", // Change background color to transparent
        // marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
const Profile = () => {
  const {publicationID , setPublicationID} = useContext(Context)
  const {Fil , SetFil} = useContext(Context)
    
  const [searchTerm, setSearchTerm] = useState("");

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const open2 = Boolean(anchorEl2);

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
 
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
   
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
       
              {/* <span style={{ marginLeft: "3px" }} className="infofriendspan">A propos</span> */}
           
            
              <div  className="list1">
        <Button
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
          style={{backgroundColor:"transparent" , color:"#02b3e3" , fontSize:"15px" , fontWeight:700 , position:"relative"
         ,marginTop:"-14px" ,marginLeft:"-19px" }}
        >A propos
    
        </Button>

        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <ul className="ulflag">






  <h2 style={{fontSize:"16px" , margin:0}}>Vue d’ensemble:</h2>
<div className="profilli" onClick={handleClose2}> <li>Ajouter une ******</li></div>
<div className="profilli" onClick={handleClose2}>   <li>Ajouter une ******</li> </div>
<div className="profilli" onClick={handleClose2}>  <li>Ajouter un mail ******</li> </div>
<div className="profilli" onClick={handleClose2}>   <li>Ajouter un mail ******</li> </div>

<h2 style={{fontSize:"16px" , margin:0}}>Presentation:</h2>
<div className="profilli" onClick={handleClose2}>  <li>Ajouter une bio</li></div>
<div className="profilli" onClick={handleClose2}>  <li>Ajouter des centres d’intérêt</li> </div>
<div className="profilli" onClick={handleClose2}>   <li>Ajouter un compétence</li></div>
<div className="profilli" onClick={handleClose2}>   <li>Ajouter une bio</li></div>
<h2 style={{fontSize:"16px" , margin:0}}>Réseux sociaux:</h2>
<div className="profilli" onClick={handleClose2}>   <li>Ajouter une lien</li></div>
<div className="profilli" onClick={handleClose2}>  <li>Ajouter une adresse</li> </div>
<div className="profilli" onClick={handleClose2}>  <li>Ajouter un numéro</li> </div>
<div className="profilli" onClick={handleClose2}>  <li>Ajouter un mail</li> </div>
<h2 style={{fontSize:"16px" , margin:0}}>Coordonnées:</h2>
<div className="profilli" onClick={handleClose2}>   <li>Ajouter une lien</li></div>
<div className="profilli" onClick={handleClose2}>  <li>Ajouter une adresse</li> </div>
<div className="profilli" onClick={handleClose2}>  <li>Ajouter un numéro</li> </div>

</ul>

          {/* <Divider sx={{ my: 0.5 }} /> */}
        </StyledMenu>
      </div>

             
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
 
         <div  onClick={()=>{setPublicationID(1);SetFil("Publication") }} className='publication'>
          <span style={{ marginLeft: "3px" }} className="infofriendspan">• Click pour Voir plus</span>
          <h3>Cristiano Ronaldo devance Lionel 
Messi au classement des fortunes</h3>
          <p>Le débat du GOAT est relancé: Selon des données présentées par le site SafeBettingSites.com, le Portugais Cristiano Ronaldo a récolté 16 millions de dollars de plus que son rival Lionel </p>
          
          <img class="item-photoProf" src="https://www.ferra.ru/thumb/860x0/filters:quality(75):no_upscale()/imgs/2022/06/25/15/5467074/9b8ac64149ba0a542220a03b494c6ad99f9206aa.jpg" alt="iphone 13 laying between plants on steel rail"/>
          </div>
         

          <div  className='publication'>
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
			<h2>10/ 11/23
</h2>
			
		</div>
	</div>

	
<div class="container left">
		<div class="content">
			<h2>10/ 11/23</h2>			
		</div>
	</div>

    
	
<div class="container left">
		<div class="content">
			<h2>10/ 11/23</h2>			
		</div>
	</div>

    
	
<div class="container left">
		<div class="content">
			<h2>10/ 11/23</h2>			
		</div>
	</div>
<div class="container left">
		<div class="content">
			<h2>10/ 11/23</h2>			
		</div>
	</div>
<div class="container left">
		<div class="content">
			<h2>10/ 11/23</h2>			
		</div>
	</div>
<div class="container left">
		<div class="content">
			<h2>10/ 11/23</h2>			
		</div>
	</div>
<div class="container left">
		<div class="content">
			<h2>10/ 11/23</h2>			
		</div>
	</div>
<div class="container left">
		<div class="content">
			<h2>10/ 11/23</h2>			
		</div>
	</div>
<div class="container left">
		<div class="content">
			<h2>10/ 11/23</h2>			
		</div>
	</div>

    
	
<div class="container left">
		<div class="content">
			<h2>10/ 11/23</h2>			
		</div>
	</div>

    
	
<div class="container left">
		<div class="content">
			<h2>10/ 11/23</h2>			
		</div>
	</div>

<div className='ddd'></div>
    
</div>


          </div>

</div>
  )
}

export default Profile