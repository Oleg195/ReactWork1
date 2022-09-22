import React, {Component} from "react";
import { Link } from "react-router-dom";
import '../Working/Worging.css';
import {faEnvelopesBulk} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Working() {
    return (
      <div>
        <h2></h2>
        <div><div class="game">
            <div class="content">
        <div class="gameh">
            <div class="zagolovok-game  centre"><h2 className="centre">Вакансии</h2></div>
            <div class="clear"></div>
         
                <div class="game-src">
                    
<a className='block'>                   
    <img className="war" src="https://brainshef.ru/storage/app/uploads/public/616/61d/aa6/61661daa658be657834484.jpeg"/>
    <div className="tekst_sverhu_kartinki_1" >
    <p>Дизай</p>
    </div>
</a>
                <a className='block'>
                    <img className="war" src="https://avatars.mds.yandex.net/i?id=a4956f508e2ee1aa2944c83e180dd183-5320304-images-thumbs&n=13"/>
                    <div className="tekst_sverhu_kartinki_1"><p>Маркетология</p>
                    </div>
                </a> 
                <a className='block'>
                    <img className="war" src="https://avatars.mds.yandex.net/i?id=2e7296ea85ccd0014d96e4ed81295768-5390929-images-thumbs&n=13"/>
                    <div className="tekst_sverhu_kartinki_1">
                    <p>Инжерения <br/> технология</p></div>
                </a> 
                <a className='block'>
                    <img className="war" src="https://olymptv.ru/public/05-cybersport.jpg"/>
                    
                    <div className="tekst_sverhu_kartinki_1">
                    <p>Киберспорт <br/> Сми</p></div>
                </a>
                
      
                
</div>
    
     </div></div></div></div>
        <h2>Заинтересованы? <br/>Напишите нам на <Link><FontAwesomeIcon icon={faEnvelopesBulk}/>почту</Link> </h2>
      </div>
    );
  }

  export default Working
