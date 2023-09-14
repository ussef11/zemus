import React, { useContext, useState } from "react";
import Side from "../sidecontainer/side";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import Lignea from "../../media/Ligne.png"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Home.css";
import backgroundImg from "../../media/Ligne.png"
import { Context } from "../../Helper/Context";
import etoille from "../../media/startremovebg.png"
import Noetoille from "../../media/startred.png"


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
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 25,
        color: theme.palette.text.secondary,
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

const StyledMenu1 = styled((props) => (
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
    minWidth: 350,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 25,
        color: theme.palette.text.secondary,
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
export const Profile = () => {

  const {selection, setselection} = useContext(Context);
  const {Fil , SetFil} =useContext(Context)
    const [searchTerm, setSearchTerm] = useState("");

    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const [ton , setton] = useState("")
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const [anchorEl1, setAnchorEl1] = React.useState(null);
    const open1 = Boolean(anchorEl1);
  
    const handleClick1 = (event) => {
      setAnchorEl1(event.currentTarget);
    };
    const handleClose1 = () => {
      setAnchorEl1(null);
    };
  
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const open2 = Boolean(anchorEl2);
  
    const handleClick2 = (event) => {
      setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
      setAnchorEl2(null);
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


    const [isHover , setisHover] = useState(false)

    const handleEnter = ()=>{
      setisHover(true)
    }
    const handleleave= ()=>{
      setisHover(false)
    }

  return (
 <> 
 {  Fil !== "amis" && Fil  !== "suivis" && Fil !== "msg" && Fil !== "Publication" && Fil !== "ProfilInfo" ?  <div> 
    <div style={{ display: "flex" }} className="profile">
      <div  className="icon">
        <Stack direction="row" spacing={2}>
           { isHover && <div onMouseEnter={handleEnter}  onMouseLeave={handleleave} className="file-input">
 <input
   type="file"
   name="file-input"
   id="file-input"
   className="file-input__input"
 />
 <label className="file-input__label" for="file-input">
   <svg
     aria-hidden="true"
     focusable="false"
     data-prefix="fas"
     data-icon="upload"
     className="svg-inline--fa fa-upload fa-w-16"
     role="img"
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 512 512"
   >
     <path
       fill="currentColor"
       d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
     ></path>
   </svg>
</label>
</div>}
        <img onMouseEnter={handleEnter}  onMouseLeave={handleleave} className="iconProfile" src="https://i.imgur.com/0I4lkh9.jpg" />
 

          <div className="profilename">
            <h2>Femy Sharp </h2>
            <button
              className="btnpreprofile"
              onClick={() => {
               window.location.href ="/Subscription"
              }}
            >
              Passer a la version Premium
            </button>
          </div>
        </Stack>
      </div>
      <div className="name"></div>

      <div className="serach">
        <Paper
          component="form"
          onSubmit={handleSubmit}
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Rechercher"
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
   {  !selection && Fil !=="friendmsg" &&   <div className="droplist">
      <div className="list1">
        <Button
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
          style={{backgroundColor:"#009AAD"}}
        >
          Journaux
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

<div className="actuins" onClick={handleClose2}> <li> <img className="startArticle" src={etoille} /><a href="#">Russie</a></li></div>
<div className="actuins" onClick={handleClose2}> <li> <img className="startArticle" src={etoille} /><a href="#">Chine</a></li></div>
<div className="actuins" onClick={handleClose2}> <li> <img className="startArticle" src={etoille} /><a href="#">Irlande</a></li></div>
<div className="actuins" onClick={handleClose2}> <li> <img className="startArticle" src={etoille} /><a href="#">France</a></li></div>
<div className="actuins" onClick={handleClose2}> <li> <img className="startArticle" src={etoille} /><a href="#">Romania</a></li></div>
<div className="actuins" onClick={handleClose2}> <li> <img className="startArticle" src={etoille} /><a href="#">Amerique</a></li></div>
<div className="actuins" onClick={handleClose2}> <li> <img className="startArticle" src={etoille} /><a href="#">Brasile</a></li></div>
<div className="actuins" onClick={handleClose2}> <li> <img className="startArticle" src={etoille} /><a href="#">Spagne</a></li></div>
<div className="actuins" onClick={handleClose2}> <li> <img className="startArticle" src={etoille} /><a href="#">Almagne</a></li></div>
<div className="actuins" onClick={handleClose2}> <li> <img className="startArticle" src={etoille} /><a href="#">Albanie</a></li></div>
<div className="actuins" onClick={handleClose2}> <li> <img className="startArticle" src={etoille} /><a href="#">Maroc</a></li></div>
<div className="actuins" onClick={handleClose2}> <li> <img className="startArticle" src={etoille} /><a href="#">Algerie</a></li></div>
</ul>

          {/* <Divider sx={{ my: 0.5 }} /> */}
        </StyledMenu>
      </div>

      <div className="list2">
        <Button
          id="demo-customized-button"
          aria-controls={open1 ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open1 ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick1}
          endIcon={<KeyboardArrowDownIcon />}
          style={{backgroundColor:"#009AAD"}}
        >
          De quoi parle-t-on?
        </Button>
        <StyledMenu1
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl1}
          open={open1}
          onClose={handleClose1}
        >
          <div className="actions" onClick={handleClose1}>
            <span style={{color:"black"}} > De quels pays parle-t-on?</span>
          </div>
          <div  className="actions" onClick={handleClose1}>
            <span  style={{color:"black"}}>Quels pays en parlent?</span>
          </div>
        </StyledMenu1>
      </div>

      <div className="list3">
        <Button
          style={{backgroundColor:"#009AAD"}}
          id="demo-customized-button"
          aria-controls={open2 ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open2 ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick2}
          endIcon={<KeyboardArrowDownIcon />}
        >
          France
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl2}
          open={open2}
          onClose={handleClose2}
        >
    
     
          <ul className="ulflag">

<div className="divliinput"> <li>  <input placeholder="Rechercher" /> </li></div>
<div className="divli" onClick={handleClose2}> <li> <div className='divstart'>  <img className="startArticle" src={etoille} /> </div>   <img src="https://www.countryflagicons.com/FLAT/64/RU.png" /><a href="#">Russie</a></li></div>
<div className="divli" onClick={handleClose2}> <li> <div className='divstart'>  <img className="startArticle" src={etoille} /> </div>  <img src="https://www.countryflagicons.com/FLAT/64/CN.png" /><a href="#">Chine</a></li></div>
<div className="divli" onClick={handleClose2}> <li> <div className='divstart'>  <img className="startArticle" src={etoille} /> </div>  <img src="https://www.countryflagicons.com/FLAT/64/IE.png" /><a href="#">Irlande</a></li></div>
<div className="divli" onClick={handleClose2}> <li> <div className='divstart'>  <img className="startArticle" src={etoille} /> </div>  <img src="https://www.countryflagicons.com/FLAT/64/FR.png" /><a href="#">France</a></li></div>
<div className="divli" onClick={handleClose2}> <li> <div className='divstart'>  <img className="startArticle" src={etoille} /> </div>  <img src="https://www.countryflagicons.com/FLAT/64/RO.png" /><a href="#">Romania</a></li></div>
<div className="divli" onClick={handleClose2}> <li> <div className='divstart'>  <img className="startArticle" src={etoille} /> </div>  <img src="https://www.countryflagicons.com/FLAT/64/US.png" /><a href="#">Amerique</a></li></div>
<div className="divli" onClick={handleClose2}> <li> <div className='divstart'>  <img className="startArticle" src={etoille} /> </div>  <img src="https://www.countryflagicons.com/FLAT/64/BR.png" /><a href="#">Brasile</a></li></div>
<div className="divli" onClick={handleClose2}> <li> <div className='divstart'>  <img className="startArticle" src={etoille} /> </div>  <img src="https://www.countryflagicons.com/FLAT/64/ES.png" /><a href="#">Spagne</a></li></div>
<div className="divli" onClick={handleClose2}> <li> <div className='divstart'>  <img className="startArticle" src={etoille} /> </div>  <img src="https://www.countryflagicons.com/FLAT/64/DE.png" /><a href="#">Almagne</a></li></div>
<div className="divli" onClick={handleClose2}> <li> <div className='divstart'>  <img className="startArticle" src={etoille} /> </div>  <img src="https://www.countryflagicons.com/FLAT/64/AL.png" /><a href="#">Albanie</a></li></div>
<div className="divli" onClick={handleClose2}> <li> <div className='divstart'>  <img className="startArticle" src={etoille} /> </div>  <img src="https://www.countryflagicons.com/FLAT/64/MA.png" /><a href="#">Maroc</a></li></div>
<div className="divli" onClick={handleClose2}> <li> <div className='divstart'>  <img className="startArticle" src={etoille} /> </div>  <img src="https://www.countryflagicons.com/FLAT/64/DZ.png" /><a href="#">Algerie</a></li></div>
</ul>
         

          {/* <Divider sx={{ my: 0.5 }} /> */}
        </StyledMenu>
      </div>
    </div>}


    </div> : null}
    </>
   
  )
}
