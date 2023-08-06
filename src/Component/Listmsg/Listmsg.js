import React, { useContext } from "react";
import "./Listmsg.css";
import cancel from "../../media/cancel.svg";
import vu from "../../media/icons8-double-tick-64.png";
import { Context } from "../../Helper/Context";

function Listmsg() {
  const { Fil, SetFil } = useContext(Context);
  return (
    <div className="ListmsgContainer">
      <div  onClick={()=>{SetFil("conv")}} className="Listmsg">
        <div className="listprofmg">
          <div style={{ display: "flex" }}>
            <img
              className="listprofmgi"
              src="https://i.imgur.com/0I4lkh9.jpg"
            />

            <div style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <h2> Salah Houbni </h2>
              <img
                className="imgcancelmsg"
                onClick={() => {
                  alert("delete Friend");
                }}
                src={cancel}
              />
            </div>
          </div>

          <div className="msgtxt">
            <div className="txtt">
              <p> Quelle est ta matière préférée? Pourquoi? ...</p>
              <span class="infofriendspanmsg">Derniere message</span>
            </div>
            <div className="vu">
              <p>1h</p>
              <img src={vu} />
            </div>
          </div>
        </div>
      </div>


      <div className="Listmsg">
        <div className="listprofmg">
          <div style={{ display: "flex" }}>
            <img
              className="listprofmgi"
              src="https://i.imgur.com/0I4lkh9.jpg"
            />

            <div style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <h2> Salah Houbni </h2>
              <img
                className="imgcancelmsg"
                onClick={() => {
                  alert("delete Friend");
                }}
                src={cancel}
              />
            </div>
          </div>

          <div className="msgtxt">
            <div className="txtt">
              <p> Quelle est ta matière préférée? Pourquoi? ...</p>
              <span class="infofriendspanmsg">Derniere message</span>
            </div>
            <div className="vu">
              <p>1h</p>
              <img src={vu} />
            </div>
          </div>
        </div>
      </div>

      <div className="Listmsg">
        <div className="listprofmg">
          <div style={{ display: "flex" }}>
            <img
              className="listprofmgi"
              src="https://i.imgur.com/0I4lkh9.jpg"
            />

            <div style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <h2> Salah Houbni </h2>
              <img
                className="imgcancelmsg"
                onClick={() => {
                  alert("delete Friend");
                }}
                src={cancel}
              />
            </div>
          </div>

          <div className="msgtxt">
            <div className="txtt">
              <p> Quelle est ta matière préférée? Pourquoi? ...</p>
              <span class="infofriendspanmsg">Derniere message</span>
            </div>
            <div className="vu">
              <p>1h</p>
              <img src={vu} />
            </div>
          </div>
        </div>
      </div>

      <div className="Listmsg">
        <div className="listprofmg">
          <div style={{ display: "flex" }}>
            <img
              className="listprofmgi"
              src="https://i.imgur.com/0I4lkh9.jpg"
            />

            <div style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <h2> Salah Houbni </h2>
              <img
                className="imgcancelmsg"
                onClick={() => {
                  alert("delete Friend");
                }}
                src={cancel}
              />
            </div>
          </div>

          <div className="msgtxt">
            <div className="txtt">
              <p> Quelle est ta matière préférée? Pourquoi? ...</p>
              <span class="infofriendspanmsg">Derniere message</span>
            </div>
            <div className="vu">
              <p>1h</p>
              <img src={vu} />
            </div>
          </div>
        </div>
      </div>

      <div className="Listmsg">
        <div className="listprofmg">
          <div style={{ display: "flex" }}>
            <img
              className="listprofmgi"
              src="https://i.imgur.com/0I4lkh9.jpg"
            />

            <div style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <h2> Salah Houbni </h2>
              <img
                className="imgcancelmsg"
                onClick={() => {
                  alert("delete Friend");
                }}
                src={cancel}
              />
            </div>
          </div>

          <div className="msgtxt">
            <div className="txtt">
              <p> Quelle est ta matière préférée? Pourquoi? ...</p>
              <span class="infofriendspanmsg">Derniere message</span>
            </div>
            <div className="vu">
              <p>1h</p>
              <img src={vu} />
            </div>
          </div>
        </div>
      </div>

      <div className="Listmsg">
        <div className="listprofmg">
          <div style={{ display: "flex" }}>
            <img
              className="listprofmgi"
              src="https://i.imgur.com/0I4lkh9.jpg"
            />

            <div style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <h2> Salah Houbni </h2>
              <img
                className="imgcancelmsg"
                onClick={() => {
                  alert("delete Friend");
                }}
                src={cancel}
              />
            </div>
          </div>

          <div className="msgtxt">
            <div className="txtt">
              <p> Quelle est ta matière préférée? Pourquoi? ...</p>
              <span class="infofriendspanmsg">Derniere message</span>
            </div>
            <div className="vu">
              <p>1h</p>
              <img src={vu} />
            </div>
          </div>
        </div>
      </div>

      <div className="Listmsg">
        <div className="listprofmg">
          <div style={{ display: "flex" }}>
            <img
              className="listprofmgi"
              src="https://i.imgur.com/0I4lkh9.jpg"
            />

            <div style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <h2> Salah Houbni </h2>
              <img
                className="imgcancelmsg"
                onClick={() => {
                  alert("delete Friend");
                }}
                src={cancel}
              />
            </div>
          </div>

          <div className="msgtxt">
            <div className="txtt">
              <p> Quelle est ta matière préférée? Pourquoi? ...</p>
              <span class="infofriendspanmsg">Derniere message</span>
            </div>
            <div className="vu">
              <p>1h</p>
              <img src={vu} />
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Listmsg;
