import React from 'react'
import "./Subscription.css"
import zlogo from "../../media/z.png"
import Log from "../../media/loginlogo.PNG"
import Gratuit from "../../media/normal.png"
import ROYAL from "../../media/prem.png"
import { Link } from 'react-router-dom'

const Payment = () => {
  return (


<div  style={{backgroundImage:`url(${Log})`}}  className="containersub">
    
{/* <div  className="containersubimg"> */}
        <div   className="container-top">
            <h2>Profitez de la version Premium avec des accès exclusifs pour votre voyage sur Zemus:</h2>
           <Link to={"/home"}><span class="material-symbols-outlined">
home
</span></Link>
        </div>
        <div  className="container-content2"> 
        <div className="container-content">
            <div className="starter">
            <div  style={{background:"#009AAD"}}  className='h3div'>
                <h3 className='h4sub'>Version de base gratuite</h3>
                </div>
                <div  className='infosub'> 
                
                <img   style={{width:"188px"}}  src={Gratuit}/>
                <h4 className="pro_price">Version <span style={{color:'#009AAD'}}> Gratuite</span> </h4>
                <h4   style={{marginTop:"-34px"}}  className="pro_price">0.00 <span style={{color:'#009AAD'}}> €</span> / au mois</h4>

                <ul>
            <li>Recherche dans chaque pays</li>
            <li>Recherche dans sa langue (mots-clefs) d’informations en langues étrangères</li>
            <li>Suivi et partage des articles de presse dans la langue de son choix</li>
            <li>Archivage d’articles favoris</li>
            <li>Suivi thématique de la presse par pays</li>
            <li>Réalisation et publication de revues de presse (journaux uniquement)</li>
            <li>Rechercher et consulter les profils d’autres membres de Zemus</li>
            <li>Messages privés à vos amis</li>
            <li>Suivre les pays et les thématiques de votre choix</li>
            <li>Suggestions intelligente</li>
        </ul>
                </div>
            </div>
            <div className="professional">
            <div  style={{background:"#FFE500"}}  className='h3div'>
                <h3 className='h4sub'>Obtenez plus avec Premium</h3>
                </div>
                <div className='infosub'> 
                
                <img   style={{width:"188px"}}  src={ROYAL}/>
                <h4 className="pro_price">Version <span style={{color:'#FFE500'}}> Premium</span> </h4>
                <h4   style={{marginTop:"-34px"}}  className="pro_price">9.00 <span style={{color:'#FFE500'}}> €</span> / au mois</h4>
                <h4   style={{marginTop:"-34px"}}  className="pro_price">7.00<span style={{color:'#FFE500'}}> €</span>  etudiant et demandeur</h4>
                <ul  >
            <li>Recherche dans chaque pays</li>
            <li>Recherche dans sa langue (mots-clefs) d’informations en langues étrangères</li>
            <li>Suivi et partage des articles de presse dans la langue de son choix</li>
            <li>Archivage d’articles favoris</li>
            <li>Suivi thématique de la presse par pays</li>
            <li>Réalisation et publication de revues de presse (journaux uniquement)</li>
            <li>Rechercher et consulter les profils d’autres membres de Zemus</li>
            <li>Messages privés à vos amis</li>
            <li>Suivre les pays et les thématiques de votre choix</li>
            <li>Suggestions intelligentes</li>
        </ul>
                </div>
            </div>

           
        </div>
        {/* style={{marginTop:"43px"}} */}
        <div > 
        <button  onClick={()=>{alert("action Subscribe")}} className='btnpre'>Passer a la version Premium</button>
        <h2 className="pro_h2">Les membres Premium peuvent profiter de nombreux avantages liés à Zemus!
</h2>
        </div>
        </div> 
       
    </div>
   
  
  )
}

export default Payment