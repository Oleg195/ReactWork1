import React from "react";
import "../Company/Company.css";

import {faCameraRetro} from "@fortawesome/free-solid-svg-icons";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {faQuestion} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Company() {
    return (
      <div className="imgfon">
        <div>
        <h2 className="ht">ДОБРО ПОЖАЛОВАТЬ В GOD_OF_GAMES</h2>
        <p className="pt">Сотрудники GOD_OF_GAMES подходят к разработке игр с душой и вкладывают частичку самих себя в каждый проект. Мы неотступно следуем нашим основным ценностям и продолжаем радовать нашу аудиторию потрясающими развлекательными продуктами. Неважно, кто вы и где живете, являетесь ли членом нашего растущего и разнообразного сообщества, работаете ли в одном из наших офисов по всему миру или берете с собой сувенир Blizzard в космос, — мы всегда вам рады.</p>
        <h2 className="ht">Наши ценности</h2><p className="pt">
Цель нашей компании — создавать самую потрясающую развлекательную продукцию в истории. Восемь основных ценностей Blizzard Entertainment — это наши убеждения и принципы, выработанные многолетним опытом. Они находят воплощение в повседневной работе и решениях каждого сотрудника.</p>
           
      </div><div className="centre"><h1 className="ht">Оставайтесь на связи</h1>
      <ul><li className="interwal"><Link><FontAwesomeIcon icon={faCameraRetro}/></Link></li>
      <li className="interwal"><Link><FontAwesomeIcon icon={faPaperPlane}/></Link></li>
      <li className="interwal"><Link><FontAwesomeIcon icon={faCameraRetro}/></Link></li>

      <li>
 
 </li></ul></div></div>
 
    );
  }

  export default Company