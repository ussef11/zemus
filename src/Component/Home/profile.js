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

  return (
 <>  
 {  Fil !== "amis" && Fil  !== "suivis" && Fil !== "msg" && Fil !== "Publication" ?  <div> 
    <div style={{ display: "flex" }} className="profile">
      <div className="icon">
        <Stack direction="row" spacing={2}>
          <Avatar
            className="avat"
            alt="Femy Sharp"
            src="/static/images/avatar/1.jpg"
          />
          <div className="profilename">
            <h2>Femy Sharp </h2>
            <button
              className="btnpreprofile"
              onClick={() => {
                alert("Passer a la version Premium");
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

<div className="actuins" onClick={handleClose2}> <li> <span class="material-symbols-outlined">star </span><a href="#">Russie</a></li></div>
<div className="actuins" onClick={handleClose2}> <li> <span class="material-symbols-outlined">star </span><a href="#">Chine</a></li></div>
<div className="actuins" onClick={handleClose2}> <li> <span class="material-symbols-outlined">star </span><a href="#">Irlande</a></li></div>
<div className="actuins" onClick={handleClose2}> <li> <span class="material-symbols-outlined">star </span><a href="#">France</a></li></div>
<div className="actuins" onClick={handleClose2}> <li> <span class="material-symbols-outlined">star </span><a href="#">Romania</a></li></div>
<div className="actuins" onClick={handleClose2}> <li> <span class="material-symbols-outlined">star </span><a href="#">Amerique</a></li></div>
<div className="actuins" onClick={handleClose2}> <li> <span class="material-symbols-outlined">star </span><a href="#">Brasile</a></li></div>
<div className="actuins" onClick={handleClose2}> <li> <span class="material-symbols-outlined">star </span><a href="#">Spagne</a></li></div>
<div className="actuins" onClick={handleClose2}> <li> <span class="material-symbols-outlined">star </span><a href="#">Almagne</a></li></div>
<div className="actuins" onClick={handleClose2}> <li> <span class="material-symbols-outlined">star </span><a href="#">Albanie</a></li></div>
<div className="actuins" onClick={handleClose2}> <li> <span class="material-symbols-outlined">star </span><a href="#">Maroc</a></li></div>
<div className="actuins" onClick={handleClose2}> <li> <span class="material-symbols-outlined">star </span><a href="#">Algerie</a></li></div>
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
            <span > De quels pays parle-t-on?</span>
          </div>
          <div  className="actions" onClick={handleClose1}>
            <span>Quels pays en parlent?</span>
          </div>
        </StyledMenu1>
      </div>

      <div className="list3">
        <Button
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

<div className="divli" onClick={handleClose2}> <li> <span class="material-symbols-outlined">star </span>   <img src="https://www.countryflagicons.com/FLAT/64/RU.png" /><a href="#">Russie</a></li></div>
<div className="divli" onClick={handleClose2}> <li> <span class="material-symbols-outlined">star </span>  <img src="https://www.countryflagicons.com/FLAT/64/CN.png" /><a href="#">Chine</a></li></div>
<div className="divli" onClick={handleClose2}> <li> <span class="material-symbols-outlined">star </span>  <img src="https://www.countryflagicons.com/FLAT/64/IE.png" /><a href="#">Irlande</a></li></div>
<div className="divli" onClick={handleClose2}> <li> <span class="material-symbols-outlined">star </span>  <img src="https://www.countryflagicons.com/FLAT/64/FR.png" /><a href="#">France</a></li></div>
<div className="divli" onClick={handleClose2}> <li> <span class="material-symbols-outlined">star </span>  <img src="https://www.countryflagicons.com/FLAT/64/RO.png" /><a href="#">Romania</a></li></div>
<div className="divli" onClick={handleClose2}> <li> <span class="material-symbols-outlined">star </span>  <img src="https://www.countryflagicons.com/FLAT/64/US.png" /><a href="#">Amerique</a></li></div>
<div className="divli" onClick={handleClose2}> <li> <span class="material-symbols-outlined">star </span>  <img src="https://www.countryflagicons.com/FLAT/64/BR.png" /><a href="#">Brasile</a></li></div>
<div className="divli" onClick={handleClose2}> <li> <span class="material-symbols-outlined">star </span>  <img src="https://www.countryflagicons.com/FLAT/64/ES.png" /><a href="#">Spagne</a></li></div>
<div className="divli" onClick={handleClose2}> <li> <span class="material-symbols-outlined">star </span>  <img src="https://www.countryflagicons.com/FLAT/64/DE.png" /><a href="#">Almagne</a></li></div>
<div className="divli" onClick={handleClose2}> <li> <span class="material-symbols-outlined">star </span>  <img src="https://www.countryflagicons.com/FLAT/64/AL.png" /><a href="#">Albanie</a></li></div>
<div className="divli" onClick={handleClose2}> <li> <span class="material-symbols-outlined">star </span>  <img src="https://www.countryflagicons.com/FLAT/64/MA.png" /><a href="#">Maroc</a></li></div>
<div className="divli" onClick={handleClose2}> <li> <span class="material-symbols-outlined">star </span>  <img src="https://www.countryflagicons.com/FLAT/64/DZ.png" /><a href="#">Algerie</a></li></div>
</ul>
         

          {/* <Divider sx={{ my: 0.5 }} /> */}
        </StyledMenu>
      </div>
    </div>}


    </div> : null}
    </>
   
  )
}
