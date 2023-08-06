import React, { useContext, useState } from "react";
import "./articles.css";
import Favo from "../../media/bookmark.svg";
import Favoli from "../../media/bookmarklight.svg";
import facebook from "../../media/facebook.svg";
import twitter from "../../media/twitter.svg";
import linkedin from "../../media/linkedin.svg";

import { Context } from "../../Helper/Context";
const ArticlesFav = () => {
  const [showPopup, setShowPopup] = useState(false);
  const {selection, setselection} = useContext(Context);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleselected = () => {
    setselection(!selection);
  };
  return (
    <div>


{showPopup && <div className="blur-background"></div>}
      {showPopup && (
        <>
  
     
          <div className="popup">
         
          <div className="socialicons">
   <img src={facebook}/>
   <img src={linkedin}/>
   <img src={twitter}/>
</div>
            <div style={{ display: "flex" }} className="headtitle">
              <h1> Revue de Presse:</h1>
              <span onClick={togglePopup} className="material-symbols-outlined">
                close
              </span>
            </div>
            <div>
              <div class="Message">
                <input
                  title="Write Message"
                  tabindex="i"
                  pattern="\d+"
                  placeholder="Théme ..."
                  class="MsgInput"
                  type="text"
                />
                <span class="l"></span>
              </div>
              <div class="Message">
                <textarea
                  tabindex="i"
                  pattern="\d+"
                  placeholder="Description ..."
                  class="MsgInput"
                  rows={16}
                  style={{ height: "202px" }}
                />
                <span class="l"></span>
              </div>


              <div class="Message">
           <img
                className="favphoto"
                src="https://www.ferra.ru/thumb/860x0/filters:quality(75):no_upscale()/imgs/2022/06/25/15/5467074/9b8ac64149ba0a542220a03b494c6ad99f9206aa.jpg"
                alt="iphone 13 laying between plants on steel rail"
              />

</div>


            </div>
          </div>
        </>
      )}
            
      <section className="articlesfav">
      
     {selection &&   <div className="titleDivfav" style={{ display: "flex" }}>
          <button onClick={togglePopup}> Créer la revue de presse</button>
        </div>
        }

        <div  className="featuresfav">
   
          <div className="itemfav item1">
            <div onClick={handleselected}>
              <img
                className="item-photofav"
                src="https://www.ferra.ru/thumb/860x0/filters:quality(75):no_upscale()/imgs/2022/06/25/15/5467074/9b8ac64149ba0a542220a03b494c6ad99f9206aa.jpg"
                alt="iphone 13 laying between plants on steel rail"
              />
            </div>
            <div onClick={handleselected} className="arttfav">
              <div className="item-headerfav">
                <div style={{ display: "flex" }} className="imgdivfav">
                  <img src="https://www.ferra.ru/thumb/860x0/filters:quality(75):no_upscale()/imgs/2022/06/25/15/5467074/9b8ac64149ba0a542220a03b494c6ad99f9206aa.jpg" />
                  <p> Sarah Monica</p>
                </div>
                <ion-icon className="item-icon" name="bulb-outline"></ion-icon>
                <h3 className="item-titlefav">
                  Memoire - The World Ends With You
                </h3>
              </div>
              <p className="item-textfav">
                Molorem exerios milluptas et andeles sed modicimet pla nitatib
                usciet la consequ iatione Molorem exerios milluptas et andeles
                sed modicimet pla nitatib usciet la consequ iatione Molorem
                exerios milluptas et andeles sed modicimet pla nitatib usciet la
                consequ iatione Molorem exerios milluptas et andeles sed
                modicimet pla nitatib usciet la consequ iatione
              </p>
              {/* <a className="item-link" href="#">Click to see by yourself &rarr;</a> */}
            </div>

            {selection ? (
              <div className="actiondiv">
                <input type="checkbox" />
                <span
                  onClick={() => {
                    alert("delete from favoris");
                  }}
                  class="material-symbols-outlined"
                >
                  delete
                </span>
              </div>
            ) : (
              <div className="favicon">
                <img src={Favo} />
              </div>
            )}
          </div>

          <div className="itemfav item4">
            <div>
              <img
                className="item-photofav"
                src="https://www.ferra.ru/thumb/860x0/filters:quality(75):no_upscale()/imgs/2022/06/25/15/5467074/9b8ac64149ba0a542220a03b494c6ad99f9206aa.jpg"
                alt="iphone 13 laying between plants on steel rail"
              />
            </div>
            <div className="arttfav">
              <div className="item-headerfav">
                <div style={{ display: "flex" }} className="imgdivfav">
                  <img src="https://www.ferra.ru/thumb/860x0/filters:quality(75):no_upscale()/imgs/2022/06/25/15/5467074/9b8ac64149ba0a542220a03b494c6ad99f9206aa.jpg" />
                  <p> Sarah Monica</p>
                </div>
                <ion-icon className="item-icon" name="bulb-outline"></ion-icon>
                <h3 className="item-titlefav">Memoire - Foot Real vs PSG</h3>
              </div>
              <p className="item-textfav">
                Molorem exerios milluptas et andeles sed modicimet pla nitatib
                usciet la consequ iatione Molorem exerios milluptas et andeles
                sed modicimet pla nitatib usciet la consequ iatione Molorem
                exerios milluptas et andeles sed modicimet pla nitatib usciet la
                consequ iatione Molorem exerios milluptas et andeles sed
                modicimet pla nitatib usciet la consequ iatione
              </p>
              {/* <a className="item-link" href="#">Click to see by yourself &rarr;</a> */}
            </div>
            <div className="favicon">
              <img src={Favoli} />
            </div>
          </div>

          <div className="itemfav item5">
            <div>
              <img
                className="item-photofav"
                src="https://www.ferra.ru/thumb/860x0/filters:quality(75):no_upscale()/imgs/2022/06/25/15/5467074/9b8ac64149ba0a542220a03b494c6ad99f9206aa.jpg"
                alt="iphone 13 laying between plants on steel rail"
              />
            </div>
            <div className="arttfav">
              <div className="item-headerfav">
                <div style={{ display: "flex" }} className="imgdivfav">
                  <img src="https://www.ferra.ru/thumb/860x0/filters:quality(75):no_upscale()/imgs/2022/06/25/15/5467074/9b8ac64149ba0a542220a03b494c6ad99f9206aa.jpg" />
                  <p> Sarah Monica</p>
                </div>
                <ion-icon className="item-icon" name="bulb-outline"></ion-icon>
                <h3 className="item-titlefav">Memoire - Guerre</h3>
              </div>
              <p className="item-textfav">
                Molorem exerios milluptas et andeles sed modicimet pla nitatib
                usciet la consequ iationeMolorem exerios milluptas et andeles
                sed modicimet pla nitatib usciet la consequ iatione Molorem
                exerios milluptas et andeles sed modicimet pla nitatib usciet la
                consequ iatione Molorem exerios milluptas et andeles sed
                modicimet pla nitatib usciet la consequ iatione Molorem exerios
                milluptas et andeles sed modicimet pla nitatib usciet la consequ
                iatione
              </p>
              {/* <a className="item-link" href="#">Click to see by yourself &rarr;</a> */}
            </div>
            <div className="favicon">
              <img src={Favo} />
            </div>
          </div>
          <div className="itemfav item5">
            <div>
              <img
                className="item-photofav"
                src="https://www.ferra.ru/thumb/860x0/filters:quality(75):no_upscale()/imgs/2022/06/25/15/5467074/9b8ac64149ba0a542220a03b494c6ad99f9206aa.jpg"
                alt="iphone 13 laying between plants on steel rail"
              />
            </div>
            <div className="arttfav">
              <div className="item-headerfav">
                <div style={{ display: "flex" }} className="imgdivfav">
                  <img src="https://www.ferra.ru/thumb/860x0/filters:quality(75):no_upscale()/imgs/2022/06/25/15/5467074/9b8ac64149ba0a542220a03b494c6ad99f9206aa.jpg" />
                  <p> Sarah Monica</p>
                </div>
                <ion-icon className="item-icon" name="bulb-outline"></ion-icon>
                <h3 className="item-titlefav">Memoire - Guerre</h3>
              </div>
              <p className="item-textfav">
                Molorem exerios milluptas et andeles sed modicimet pla nitatib
                usciet la consequ iationeMolorem exerios milluptas et andeles
                sed modicimet pla nitatib usciet la consequ iatione Molorem
                exerios milluptas et andeles sed modicimet pla nitatib usciet la
                consequ iatione Molorem exerios milluptas et andeles sed
                modicimet pla nitatib usciet la consequ iatione Molorem exerios
                milluptas et andeles sed modicimet pla nitatib usciet la consequ
                iatione
              </p>
              {/* <a className="item-link" href="#">Click to see by yourself &rarr;</a> */}
            </div>
            <div className="favicon">
              <img src={Favo} />
            </div>
          </div>
          <div className="itemfav item5">
            <div>
              <img
                className="item-photofav"
                src="https://www.ferra.ru/thumb/860x0/filters:quality(75):no_upscale()/imgs/2022/06/25/15/5467074/9b8ac64149ba0a542220a03b494c6ad99f9206aa.jpg"
                alt="iphone 13 laying between plants on steel rail"
              />
            </div>
            <div className="arttfav">
              <div className="item-headerfav">
                <div style={{ display: "flex" }} className="imgdivfav">
                  <img src="https://www.ferra.ru/thumb/860x0/filters:quality(75):no_upscale()/imgs/2022/06/25/15/5467074/9b8ac64149ba0a542220a03b494c6ad99f9206aa.jpg" />
                  <p> Sarah Monica</p>
                </div>
                <ion-icon className="item-icon" name="bulb-outline"></ion-icon>
                <h3 className="item-titlefav">Memoire - Guerre</h3>
              </div>
              <p className="item-textfav">
                Molorem exerios milluptas et andeles sed modicimet pla nitatib
                usciet la consequ iationeMolorem exerios milluptas et andeles
                sed modicimet pla nitatib usciet la consequ iatione Molorem
                exerios milluptas et andeles sed modicimet pla nitatib usciet la
                consequ iatione Molorem exerios milluptas et andeles sed
                modicimet pla nitatib usciet la consequ iatione Molorem exerios
                milluptas et andeles sed modicimet pla nitatib usciet la consequ
                iatione
              </p>
              {/* <a className="item-link" href="#">Click to see by yourself &rarr;</a> */}
            </div>
            <div className="favicon">
              <img src={Favo} />
            </div>
          </div>
      
        </div>
      </section>
    </div>
  );
};

export default ArticlesFav;
