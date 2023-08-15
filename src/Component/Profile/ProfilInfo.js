import React, { useContext, useState } from "react";
import { Context } from "../../Helper/Context";
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
    color: "#00D5F3", // Change text color to #00D5F3
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
        color: "#00D5F3", // Change text color to #00D5F3
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
const ProfilInfo = () => {
  const { publicationID, setPublicationID } = useContext(Context);
  const { Fil, SetFil } = useContext(Context);
  const [Options, setOptions] = useState("Vue");

  const [searchTerm, setSearchTerm] = useState("");

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const [anchorEl2, setAnchorEl2] = useState(null);

  const handleClose2 = () => {
    setAnchorEl2(null);
    alert("Edit A propos");
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="ProfilInfo">
        <div className="profimg">
          {/* <img src="https://i.imgur.com/0I4lkh9.jpg" /> */}
          <div style={{ marginTop: "29px" }}>
            <div className="profnameprof">
              <div style={{ display: "flex" }}>
                <h1> Salah Houbni </h1>
              </div>

              {/* <span style={{ marginLeft: "3px" }} className="infofriendspan">A propos</span> */}

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
                  style={{
                    backgroundColor: "transparent",
                    color: "#02b3e3",
                    fontSize: "15px",
                    fontWeight: 700,
                    position: "relative",
                    marginTop: "-14px",
                    // marginLeft: "-24px",
                    padding: 0,
                  }}
                >
                  A propos
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
                    <h2
                      style={{
                        fontSize: "16px",
                        margin: 0,
                        paddingBottom: "8px",
                      }}
                    >
                      Vue d’ensemble:
                    </h2>
                    <div className="apropos" onClick={handleClose2}>
                      <span class="material-symbols-outlined">add_circle</span>
                      <li>Ajouter une ******</li>
                    </div>
                    <div className="apropos" onClick={handleClose2}>
                      <span class="material-symbols-outlined">add_circle</span>
                      <li>Ajouter une ******</li>{" "}
                    </div>
                    <div className="apropos" onClick={handleClose2}>
                      <span class="material-symbols-outlined">add_circle</span>
                      <li>Ajouter un mail ******</li>{" "}
                    </div>
                    <div className="apropos" onClick={handleClose2}>
                      <span class="material-symbols-outlined">add_circle</span>
                      <li>Ajouter un mail ******</li>{" "}
                    </div>

                    <h2
                      style={{
                        fontSize: "16px",
                        margin: 0,
                        paddingBottom: "8px",
                      }}
                    >
                      Presentation:
                    </h2>
                    <div className="apropos" onClick={handleClose2}>
                      <span class="material-symbols-outlined">add_circle</span>
                      <li>Ajouter une bio</li>
                    </div>
                    <div className="apropos" onClick={handleClose2}>
                      <span class="material-symbols-outlined">add_circle</span>
                      <li>Ajouter des centres d’intérêt</li>{" "}
                    </div>
                    <div className="apropos" onClick={handleClose2}>
                      <span class="material-symbols-outlined">add_circle</span>
                      <li>Ajouter un compétence</li>
                    </div>
                    <div className="apropos" onClick={handleClose2}>
                      <span class="material-symbols-outlined">add_circle</span>
                      <li>Ajouter une bio</li>
                    </div>
                    <h2
                      style={{
                        fontSize: "16px",
                        margin: 0,
                        paddingBottom: "8px",
                      }}
                    >
                      Réseux sociaux:
                    </h2>
                    <div className="apropos" onClick={handleClose2}>
                      <span class="material-symbols-outlined">add_circle</span>
                      <li>Ajouter une lien</li>
                    </div>
                    <div className="apropos" onClick={handleClose2}>
                      <span class="material-symbols-outlined">add_circle</span>
                      <li>Ajouter une adresse</li>{" "}
                    </div>
                    <div className="apropos" onClick={handleClose2}>
                      <span class="material-symbols-outlined">add_circle</span>
                      <li>Ajouter un numéro</li>{" "}
                    </div>
                    <div className="apropos" onClick={handleClose2}>
                      <span class="material-symbols-outlined">add_circle</span>
                      <li>Ajouter un mail</li>{" "}
                    </div>
                    <h2
                      style={{
                        fontSize: "16px",
                        margin: 0,
                        paddingBottom: "8px",
                      }}
                    >
                      Coordonnées:
                    </h2>
                    <div className="apropos" onClick={handleClose2}>
                      <span class="material-symbols-outlined">add_circle</span>
                      <li>Ajouter une lien</li>
                    </div>
                    <div className="apropos" onClick={handleClose2}>
                      <span class="material-symbols-outlined">add_circle</span>
                      <li>Ajouter une adresse</li>{" "}
                    </div>
                    <div className="apropos" onClick={handleClose2}>
                      <span class="material-symbols-outlined">add_circle</span>
                      <li>Ajouter un numéro</li>{" "}
                    </div>
                  </ul>

                  {/* <Divider sx={{ my: 0.5 }} /> */}
                </StyledMenu>
              </div>
            </div>
          </div>
        </div>

        <div className="imgInfo-Container">
          <div className="imgprofil">
            <img src="https://i.imgur.com/0I4lkh9.jpg" />
          </div>

          <div className="Listinfo">
            <div
              onClick={() => {
                setOptions("Vue");
              }}
              style={
                Options === "Vue"
                  ? { backgroundColor: "#00C2FE" }
                  : { backgroundColor: "white" }
              }
            >
              <h3
                style={
                  Options === "Vue" ? { color: "white" } : { color: "#00C2FE" }
                }
              >
                {" "}
                Vue d’ensemble
              </h3>
            </div>
            <div
              onClick={() => {
                setOptions("Presentation");
              }}
              style={
                Options === "Presentation"
                  ? { backgroundColor: "#00C2FE" }
                  : { backgroundColor: "white" }
              }
            >
              <h3
                style={
                  Options === "Presentation"
                    ? { color: "white" }
                    : { color: "#00C2FE" }
                }
              >
                {" "}
                Presentation
              </h3>
            </div>
            <div
              onClick={() => {
                setOptions("Reseux");
              }}
              style={
                Options === "Reseux"
                  ? { backgroundColor: "#00C2FE" }
                  : { backgroundColor: "white" }
              }
            >
              <h3
                style={
                  Options === "Reseux"
                    ? { color: "white" }
                    : { color: "#00C2FE" }
                }
              >
                Réseux sociaux
              </h3>
            </div>
            <div
              onClick={() => {
                setOptions("Coordonnees");
              }}
              style={
                Options === "Coordonnees"
                  ? { backgroundColor: "#00C2FE" }
                  : { backgroundColor: "white" }
              }
            >
              <h3
                style={
                  Options === "Coordonnees"
                    ? { color: "white" }
                    : { color: "#00C2FE" }
                }
              >
                Coordonnées
              </h3>
            </div>
          </div>

          <div className="listinfo-details">
            {Options === "Vue" ? (
              <ul className="ulprof">
                <div className="profpuls">
                  <span class="material-symbols-outlined">add_circle</span>
                  <li>Habite en france</li>
                </div>
                <div className="profpuls">
                  <span class="material-symbols-outlined">add_circle</span>

                  <li>A Paris</li>
                </div>
                <div className="profpuls">
                  <span class="material-symbols-outlined">add_circle</span>

                  <div>
                    {" "}
                    <li>Lycée Claude Garamond a Colombes</li>{" "}
                    <span className="supprofi">2009 / 2013</span>{" "}
                  </div>
                </div>
                <div className="profpuls">
                  <span class="material-symbols-outlined">add_circle</span>{" "}
                  <div>
                    {" "}
                    <li>CFA COMMERCE & SERVICE DE BLAGNAC</li>
                    <span className="supprofi">
                      2018 / 2019 Niveau: Diplome Obtenu
                    </span>{" "}
                  </div>
                </div>
                <div className="profpuls">
                  <span class="material-symbols-outlined">add_circle</span>
                  <li>Rosario Com’</li>{" "}
                </div>
                <div className="profpuls">
                  <span class="material-symbols-outlined">add_circle</span>
                  <li>www.rosarioCOM’.com</li>{" "}
                </div>
              </ul>
            ) : Options === "Presentation" ? (
              <ul className="ulprof">
                <div className="profpuls">
                  <span class="material-symbols-outlined">add_circle</span>

                  <div>
                    {" "}
                    <li style={{ fontSize: "18px" }}>
                      Bio:{" "}
                      <span className="biospan">
                        {" "}
                        Archic te eatis dolor aut ut voluptio molup - tasit es
                        et experibus rempeli quiaectas pratur accuptias es
                        excepre prepeli busdaepellab imeni oditatur? Am seque
                        volupti orporum corem aru - mque plab ius explabo. Is
                        est et dolut ad ut maio totae. Neque sed quiation cuptia
                        digenis auta sed quunt quiaEcatis autes eiusandae sam
                        sit quatumquunt, omnis que il ma doloreiure volori - bus
                        exped quamet, oditae cum ra et ut.{" "}
                      </span>
                    </li>{" "}
                  </div>
                </div>

                <div className="profpuls">
                  <span class="material-symbols-outlined">add_circle</span>
                  <li>Centre de journal</li>{" "}
                </div>
                <div className="profpuls">
                  <span class="material-symbols-outlined">add_circle</span>
                  <div className="licpmp">
                    <li >COMPETENCE</li>
                    <li >• Autonomie.</li>
                    <li >• Prise d’initiatives.</li>
                    <li >• Capacité d’adaptation.</li>
                    <li >• Travail en équipe.</li>
                    <li >• Créativité</li>
                    <li >• Capacité créative.</li>
                    <li >• Communication.</li>
                    <li >• Sens du relationnel</li>
                    <li className="Obtenu">2018 / 2019 <span>Niveau:</span> Diplome Obtenu</li>
                  </div>
                </div>
              </ul>
            ) : Options == "Reseux" ? (
              <div>Reseux</div>
            ) : Options === "Coordonnees" ? (
              <div>Coordonnees</div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilInfo;
