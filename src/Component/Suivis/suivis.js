import React from 'react'
import "./suivis.css"
import star from "../../media/star.png"
import startred from "../../media/startred.png"
import thema  from "../../media/ICONS THEMATIQUE/Fichier 5_1.png"
import amis  from "../../media/ICONS THEMATIQUE/Fichier2.png"
import security  from "../../media/ICONS THEMATIQUE/security.png"
import monde  from "../../media/ICONS THEMATIQUE/monde.png"
import culture  from "../../media/ICONS THEMATIQUE/Fichier 3.png"
import vivre  from "../../media/ICONS THEMATIQUE/Fichier 4.png"
import  z from  "../../media/z.png"
 
const Suivis = () => {
  return (
    <div  style={{display:"flex"}}>
      <div className='contry'> 
      
      <ul className="ulflag">
      <div className="divliinput"> <li>  <input placeholder="Rechercher" /> </li></div>
<div className="divli" > <li>    <img className='imgContry' src="https://www.countryflagicons.com/FLAT/64/RU.png" /><a href="#">Russie</a></li></div>
<div className="divli" > <li>   <img className='imgContry' src="https://www.countryflagicons.com/FLAT/64/CN.png" /><a href="#">Chine</a></li></div>
<div className="divli" > <li>   <img className='imgContry' src="https://www.countryflagicons.com/FLAT/64/IE.png" /><a href="#">Irlande</a></li></div>
<div className="divli" > <li>   <img className='imgContry' src="https://www.countryflagicons.com/FLAT/64/FR.png" /><a href="#">France</a></li></div>
<div className="divli" > <li>   <img className='imgContry' src="https://www.countryflagicons.com/FLAT/64/RO.png" /><a href="#">Romania</a></li></div>
<div className="divli" > <li>   <img className='imgContry' src="https://www.countryflagicons.com/FLAT/64/US.png" /><a href="#">Amerique</a></li></div>
<div className="divli" > <li>   <img className='imgContry' src="https://www.countryflagicons.com/FLAT/64/BR.png" /><a href="#">Brasile</a></li></div>
<div className="divli" > <li>   <img className='imgContry' src="https://www.countryflagicons.com/FLAT/64/ES.png" /><a href="#">Spagne</a></li></div>
<div className="divli" > <li>   <img className='imgContry' src="https://www.countryflagicons.com/FLAT/64/DE.png" /><a href="#">Almagne</a></li></div>
<div className="divli" > <li>   <img className='imgContry' src="https://www.countryflagicons.com/FLAT/64/AL.png" /><a href="#">Albanie</a></li></div>
<div className="divli" > <li>   <img className='imgContry' src="https://www.countryflagicons.com/FLAT/64/MA.png" /><a href="#">Maroc</a></li></div>
<div className="divli" > <li>   <img className='imgContry' src="https://www.countryflagicons.com/FLAT/64/DZ.png" /><a href="#">Algerie</a></li></div>
</ul>
<div className='divvalid1' style={{textAlign:"center"}}>  
<button className='Valider'>Valider </button>    </div>


      </div>
      <div className='thematcontainer'> 
      
      <div className='sourcecontan'> 
        <h1>Thématiques :</h1>

        <div className="themadiv">
        


        <div className='thema'>
<div style={{ marginLeft:"27px", display:"flex" , alignItems:"center"}}><img src={thema} />    <h2 style={{marginLeft:"10px"}} >Chroniques</h2>  </div>       
          <ul className="category-list">
        <li> <img src={star} /> Politique Choix Élections</li>
        <li> <img src={startred} /> Économie Finance</li>
        <li> <img src={startred} /> Contrats Investissements</li>
        <li> <img src={star} /> Affaires étrangères Visite</li>
        <li> <img src={startred} /> Fête Commémoration</li>
        <li> <img src={star} /> Théâtre Concert Exposition</li>
      </ul>
       
        </div>
        <div className='thema'>
<div style={{ marginLeft:"27px", display:"flex" , alignItems:"center"}}><img src={amis} />    <h2 style={{marginLeft:"10px"}} >Societé</h2>  </div>       
          <ul className="category-list">
          <li> <img src={star} />Éthique Science High Tech</li>
        <li> <img src={star} />Sport Handicap Dopage</li>
        <li> <img src={star} />Stage Volontariat Retraite</li>
        <li> <img src={star} />Travail Maladies Abus</li>
        <li> <img src={star} />Revendication Manifestation</li>
        <li> <img src={star} />TV Polémique Scandale</li>
        <li> <img src={star} />Préjugés Rumeur Révélation</li>
        <li> <img src={star} />Gouvernance Ingérenc</li>
      </ul>
       
        </div>


        <div className='thema'>
<div style={{ marginLeft:"27px", display:"flex" , alignItems:"center"}}><img src={security} />    <h2 style={{marginLeft:"10px"}} >Planéte</h2>  </div>       
          <ul className="category-list">

           <li> <img src={star} />Police Justice Insécurité</li>
         <li> <img src={star} />Alerte Signalement Délit</li>
         <li> <img src={star} />Surveillance Écoute Secret</li>
         <li> <img src={star} />Terrorisme Menace Paix</li>
         <li> <img src={star} />Tension Conflit Expatriés</li>
         <li> <img src={star} />Opération militaire Guerre</li>



      </ul>
       
        </div>

        <div className='thema'>
<div style={{ marginLeft:"27px", display:"flex" , alignItems:"center"}}><img src={monde} />    <h2 style={{marginLeft:"10px"}} >Vivre ensemble</h2>  </div>       
          <ul className="category-list">
          <li> <img src={star} />Police Justice Insécurité</li>
         <li> <img src={star} />Alerte Signalement Délit</li>
         <li> <img src={star} />Surveillance Écoute Secret</li>
         <li> <img src={star} />Terrorisme Menace Paix</li>
         <li> <img src={star} />Tension Conflit Expatriés</li>
         <li> <img src={star} />Opération militaire Guerre</li>
      </ul>
       
        </div>
        

      
        <div className='thema'>
<div style={{ marginLeft:"27px", display:"flex" , alignItems:"center"}}><img src={culture} />    <h2 style={{marginLeft:"10px"}} >Culture</h2>  </div>       
          <ul className="category-list">

           <li> <img src={star} />Éducation Scolarisation</li>
         <li> <img src={star} />Archéologie Patrimoine</li>
         <li> <img src={star} />Préhistoire Civilisation</li>
         <li> <img src={star} />Histoire Hommage Héros</li>
         <li> <img src={star} />Cuisine Astuce Bricolage</li>
         <li> <img src={star} />Mode Hommes Femmes</li>
         <li> <img src={star} />Loisirs Voyage Tourisme</li>

      </ul>
       
        </div>

      
        <div className='thema'>
<div style={{ marginLeft:"27px", display:"flex" , alignItems:"center"}}><img src={vivre} />    <h2 style={{marginLeft:"10px"}} >Vivre ensemble</h2>  </div>       
          <ul className="category-list">

          <li> <img src={star} />Interreligieux Minorités</li>
        <li> <img src={star} />Diaspora Immigrés Visa</li>
        <li> <img src={star} />Bi-nationalité Apatride</li>
        <li> <img src={star} />Amitié Mariage Insolite</li>
        <li> <img src={star} />Discrimination Sexisme</li>
        <li> <img src={star} />Vie Habitudes Mœurs</li>
        <li> <img src={star} />Réputation Crise Identité</li>

    
      </ul>
       
        </div>

      

          
       
        </div>
     
      </div>
      <div style={{textAlign:"right"}}>     <button  style={{marginRight:"15px" , top:'15px'}} className='Valider'>Valider </button>   </div>
 
      </div>

      <div className='source'>
      <h2>Sources :
</h2>

        <div>   
          <ul class="source-list">
       <li> <img src={star} />TV</li>
       <li> <img src={star} />Agences de presse</li>
       <li> <img src={star} />Pouvoirs publiques</li>
       <li> <img src={star} />Sécurité Nationale</li>
       <li> <img src={star} />Ambassades</li>
       <li> <img src={star} />Partis politiques</li>
       <li> <img src={star} />Think Tanks</li>
       <li> <img src={star} />Universités</li>
       <li> <img src={star} />Grandes entreprises</li>
    </ul> </div>
   <div className='Valider3'>  <button className='Valider'>Valider </button>    </div>
         </div>

<div className='sourcecontan'> 

<h1>Recapitulatif :</h1>
      <div className='reca-container'> 

        <div className='reca'>
<div className='recaflex'>
<div className='imgz'>
  <img src={z} />
</div>
   
<div className='infocontry'> 
        <p  className='contryname'>Italie</p>

        <p>Source :</p>
        <ul>
          <li>• Journaux</li>
          <li>• Agences de presse</li>
          <li>• TV</li>
        </ul>
        

        <div> 
        <p className='subname'>Thématique :</p>
        <ul>
          <li>• Politique</li>
       
        </ul>
        </div>

        </div>
<div className='imgz'><span class="material-symbols-outlined">delete</span> </div>
        
</div>
    
<div className='recaflex'>
<div className='imgz'>
  <img src={z} />
</div>
   
<div className='infocontry'> 
        <p  className='contryname'>Italie</p>

        <p>Source :</p>
        <ul>
          <li>• Journaux</li>
          <li>• Agences de presse</li>
          <li>• TV</li>
        </ul>
        

        <div> 
        <p className='subname'>Thématique :</p>
        <ul>
          <li>• Politique</li>
       
        </ul>
        </div>

        </div>
<div className='imgz'><span class="material-symbols-outlined">delete</span> </div>
        
</div>
    
<div className='recaflex'>
<div className='imgz'>
  <img src={z} />
</div>
   
<div className='infocontry'> 
        <p  className='contryname'>Italie</p>

        <p>Source :</p>
        <ul>
          <li>• Journaux</li>
          <li>• Agences de presse</li>
          <li>• TV</li>
        </ul>
        

        <div> 
        <p className='subname'>Thématique :</p>
        <ul>
          <li>• Politique</li>
       
        </ul>
        </div>

        </div>
<div className='imgz'><span class="material-symbols-outlined">delete</span> </div>
        
</div>
    

        </div>
      
        </div>



        </div> 
       
   
      

   
     


    </div>
  )
}

export default Suivis