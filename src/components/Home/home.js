import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "./home.css";
import Carousel from "../Carousel/Carousel.js"
export default class Home extends React.Component{
    render(){
        return(

            <div>
                            <Carousel/>
                Home
                Приветствуем на сайте онлайн-игр всех мастей.
                у нас самый лучший выбор по жанрам и платформам.
                <div class="inform"><div class="content">
        <div class="sl">
       <h2>Создавайте новые миры</h2>
       <p>Узнайте больше о работе в нашей компании</p>
          <div class="but"><Link to="Working/"> Список вакансий</Link></div></div>
   </div>

    </div>
        <div class='list' >
        <ul class="b-games-features__list"><li class="b-games-features__list-item"><span class="b-games-features__list-item-ico b-games-features__list-item-ico_2"></span><article><header><h3 class="b-games-features__list-item-chapter">
                                        Единое приложение
                                    </h3></header><p class="b-games-features__list-item-description">
                                    Поможет быстро и безопасно
                                    <span class="b-games-features__br">скачать и установить игры, узнать </span>
                                    новости и поделиться с друзьями
                                </p></article></li><li class="b-games-features__list-item"><span class="b-games-features__list-item-ico b-games-features__list-item-ico_3"></span><article><header><h3 class="b-games-features__list-item-chapter">
                                        Много игр
                                    </h3></header><p class="b-games-features__list-item-description">
                                    Обширный каталог игр: от
                                    <span class="b-games-features__br">динамичных шутеров и </span>
                                    захватывающих RPG до мини-игр
                                </p></article></li><li class="b-games-features__list-item"><span class="b-games-features__list-item-ico b-games-features__list-item-ico_4"></span><article><header><h3 class="b-games-features__list-item-chapter">
                                        Удобно играть
                                    </h3></header><p class="b-games-features__list-item-description">
                                    GameNet — крупнейший портал
                                    <span class="b-games-features__br">Рунета, посвященный</span>
                                    компьютерным видеоиграм
                                </p></article></li></ul></div>
            </div>
        )
    }
}
