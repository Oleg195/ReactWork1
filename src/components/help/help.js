import React,{Component} from "react";
import "./help.css"
function help() {
    return (
      <div>
        <h2>Есть вопрос?</h2>
        <div>
        <div className="verticalaccordion box ">
        <ul >
            <li><h3>Общие</h3>
            <div><p>Промокоды-.....</p>
<p>Они рабочие только в период какого либо внутри игрового события.Для того, чтобы активировать полученный промо-код необходимо ввести его в соответствующее поле </p>
</div></li>
<li> <h3>Кланы</h3>
<div><p>В большинтсве игр есть возможность обьединиться с другими игроками</p></div></li>
<li> <h3>WoW</h3>
<div><p><a href="https://eu.forums.blizzard.com/ru/wow/t/%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D0%B0-%D0%BF%D0%BE%D0%B4%D0%BF%D0%B8%D1%81%D0%BA%D0%B8/241709">Оплата Подписки</a></p>
<p><a href="https://eu.forums.blizzard.com/ru/wow/t/%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6-%D0%B8%D0%B7-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B8/254659">Персонаж из классики</a></p>
<p><a href="https://eu.forums.blizzard.com/ru/wow/t/%D0%B1%D0%B5%D1%81%D0%BA%D0%BE%D0%BD%D0%B5%D1%87%D0%BD%D0%B0%D1%8F-%D0%B8%D0%BD%D0%B8%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F/255155">Бесконечная инициализация</a></p>
<p><a href="https://eu.forums.blizzard.com/ru/wow/t/%D0%BE%D1%81%D0%B2%D0%BE%D0%B1%D0%BE%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B8%D0%BC%D0%B5%D0%BD-%D0%BD%D0%B5%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D1%85-%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6%D0%B5%D0%B9/111509">Освобождение имен неактивных персонажей</a></p>
<p><a href="https://eu.forums.blizzard.com/ru/wow/t/%D0%B4%D0%BE%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D1%8C-%D0%B2-%D1%87%D0%B0%D1%82%D0%B5-%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81/84099">Договоренность в чате (вопрос?)</a></p>
</div></li>
<li> <h3>Starcraft</h3>
<div><p><a href="https://eu.forums.blizzard.com/ru/sc2/t/%D0%B7%D0%B0%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%B0-%D0%B2-%D0%BC%D0%B0%D1%82%D1%87%D0%B0%D1%85/4402">Задержка в матчах</a></p>
<p><a href="https://eu.forums.blizzard.com/ru/sc2/t/%D0%BF%D0%BE%D0%BC%D0%BE%D0%B3%D0%B8%D1%82%D0%B5-%D0%BA%D0%B0%D0%BA-%D0%BF%D0%BE%D0%BC%D0%B5%D0%BD%D1%8F%D1%82%D1%8C-%D1%80%D0%B0%D0%B7%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D1%8F-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0-%D0%BD%D0%B5-%D0%B7%D0%B0%D1%85%D0%BE%D0%B4%D1%8F-%D0%B2-%D0%B8%D0%B3%D1%80%D1%83/744">Как сменить разрешение экрана</a></p>
<p><a href="https://eu.forums.blizzard.com/ru/sc2/t/%D1%8D%D1%82%D0%BE-%D0%B4%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B8%D0%B5-%D0%BD%D0%B5%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BD%D0%BE-%D0%BF%D0%BE%D0%BA%D0%B0-%D0%B8%D0%B4%D0%B5%D1%82-%D0%B8%D0%BD%D0%B8%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F/4393">Это действие недоступно пока идет инициализация</a></p>
<p><a href="https://eu.forums.blizzard.com/ru/sc2/t/%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-%D1%8F%D0%B7%D1%8B%D0%BA-%D0%BF%D0%BE%D0%BC%D0%B5%D0%BD%D1%8F%D0%BB%D1%81%D1%8F-%D0%BD%D0%B0-%C3%AF%C3%A0%C3%A2%C3%A0%C3%AF%C3%B0/4392">Русский язык поменялся на ÏÀâàïð</a></p>
<p><a href="https://eu.forums.blizzard.com/ru/sc2/t/%D0%BF%D1%80%D0%BE%D0%B1%D0%BB%D0%B5%D0%BC%D0%B0-%D1%81-%D1%81%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC/1222">Проблема с сохранением</a></p>
</div></li>
<li> <h3>Hearthstone</h3>
<div><p><a href="https://eu.forums.blizzard.com/ru/hearthstone/t/error-303-%D0%BF%D1%80%D0%B8-%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA%D0%B5-%D0%B8%D0%B3%D1%80%D1%8B/31575">Error 303 при запуске игры</a></p>
<p><a href="https://eu.forums.blizzard.com/ru/hearthstone/t/%D0%BF%D1%80%D0%B8-%D0%B7%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B5-%D0%B1%D0%BE%D1%8F-%D0%BE%D1%81%D0%BE%D0%B1%D0%B5%D0%BD%D0%BD%D0%BE-%D0%B2-%D1%80%D0%B5%D0%B6%D0%B8%D0%BC%D0%B5-%D0%BD%D0%B0%D0%B5%D0%BC%D0%BD%D0%B8%D0%BA%D0%B8-%D0%BF%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%BD%D0%BE-%D0%B2%D1%8B%D0%BB%D0%B5%D1%82%D0%B0%D0%B5%D1%82-%D0%B8%D0%B3%D1%80%D0%B0/30832">При загрузке боя (особенно в режиме Наемники) постоянно вылетает игра</a></p>
<p><a href="https://eu.forums.blizzard.com/ru/hearthstone/t/%D0%BD%D0%B5%D0%BA%D0%BE%D0%BC%D0%BF%D0%B5%D1%82%D0%B5%D0%BD%D1%82%D0%BD%D0%BE%D1%81%D1%82%D1%8C-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B-%D0%BE%D1%82%D0%B7%D1%8B%D0%B2%D0%BE%D0%B2/31565">Некомпетентность системы отзывов</a></p>
<p><a href="https://eu.forums.blizzard.com/ru/hearthstone/t/%D1%81%D0%BC%D0%B5%D0%BD%D0%B0-%D0%B0%D0%BA%D0%BA%D0%B0%D1%83%D0%BD%D1%82%D0%B0-%D0%BD%D0%B0-ios/31347">Смена аккаунта на iOS</a></p>
<p><a href="https://eu.forums.blizzard.com/ru/hearthstone/t/%D0%BD%D0%B5%D0%B2%D0%BE%D0%B7%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE-%D0%B7%D0%B0%D0%B9%D1%82%D0%B8-%D0%BD%D0%B0-%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D1%80-%D0%B0%D0%B7%D0%B8%D1%8F/31685">Невозможно зайти на сервер “Азия”</a></p>
</div></li>
<li> <h3>Heroes of the Storm</h3>
<div><p><a href="https://eu.forums.blizzard.com/ru/heroes/t/%D0%BD%D0%B5-%D0%B3%D1%80%D1%83%D0%B7%D0%B8%D1%82-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%BA%D0%BE%D0%BB%D0%BB%D0%B5%D0%BA%D1%86%D0%B8%D0%B8-%D0%BD%D0%B5-%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA%D0%B0%D0%B5%D1%82%D1%81%D1%8F-%D0%BF%D0%BE%D0%B8%D1%81%D0%BA-%D0%B8%D0%B3%D1%80%D1%8B/11381">Не грузит профиль, коллекции, не запускается поиск игры</a></p>
<p><a href="https://eu.forums.blizzard.com/ru/heroes/t/%D0%BE%D1%88%D0%B8%D0%B1%D0%BA%D0%B0-%D0%BF%D1%80%D0%B8-%D0%B0%D0%B2%D1%82%D0%BE%D1%80%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8/690">Ошибка при авторизации</a></p>
<p><a href="https://eu.forums.blizzard.com/ru/heroes/t/%D0%BF%D1%80%D0%BE%D0%BF%D0%B0%D0%BB-%D0%B2%D0%B5%D1%81%D1%8C-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B5%D1%81%D1%81-%D0%B0%D0%BA%D0%BA%D0%B0%D1%83%D0%BD%D1%82%D0%B0/6829">Пропал весь прогресс аккаунта</a></p>
<p><a href="https://eu.forums.blizzard.com/ru/heroes/t/%D0%BF%D0%BE%D1%81%D0%BB%D0%B5-%D0%BE%D0%B1%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B1%D0%B0%D1%82%D0%BB%D0%BD%D0%B5%D1%82%D0%B0-%D1%81%D0%BB%D0%B5%D1%82%D0%B5%D0%BB%D0%B8-%D0%B2%D1%81%D0%B5-%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B8-%D0%B2-%D0%B8%D0%B3%D1%80%D0%B5-%D0%B8-%D0%BD%D0%B5-%D1%81%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B0%D1%8E%D1%82%D1%81%D1%8F/11357">После обновления Батлнета слетели все настройки в игре и не сохранаются</a></p>
<p><a href="https://eu.forums.blizzard.com/ru/heroes/t/%D0%BD%D0%B5-%D0%BC%D0%BE%D0%B3%D1%83-%D0%B2%D0%B5%D1%80%D0%BD%D1%83%D1%82%D1%8C-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B5%D1%81%D1%81/11352">Не могу вернуть прогресс</a></p>
</div></li>
<li> <h3></h3>
<div><p><a href=""></a></p>
<p><a href=""></a></p>
<p><a href=""></a></p>
<p><a href=""></a></p>
<p><a href=""></a></p>
</div></li>
<li> <h3></h3>
<div><p><a href=""></a></p>
<p><a href=""></a></p>
<p><a href=""></a></p>
<p><a href=""></a></p>
<p><a href=""></a></p>
</div></li></ul>
</div>

<div className="verticalaccordion box">
<ul >
<li><h3>Тех-работы</h3>
<div><p>Иногда игры отключаются на 30-40 минут по причинам обновлений или исправлений багов</p>
<p>Об проведении вас уведомляют в самой игре</p>
</div></li>
<li> <h3>Игра</h3>
<div><p>Название</p></div></li>

<li> <h3>Diablo</h3>
<div><p>Стратегия в жанре темного фентези</p></div></li>
            <li><h3>Albion Online</h3>
            <div><p>Стратегия в реальном времени</p>
<p>Уникальность в смене профессий</p>
</div></li>
<li> <h3>Naruto</h3>
<div><p>игра в жанре...</p>
<p><a href=""></a></p></div></li>

<li><h3>Owerworch</h3>
<div><p><a href=""></a></p>
<p><a href="">1</a></p>
<p><a href="">2</a></p>
<p><a href="">3</a></p>
<p><a href="">4</a></p>

</div></li></ul>
</div>


<div className="verticalaccordion box" >
<ul >

<li> <h3>Reborn Online </h3>
<div><p><a href="https://support.gamenet.ru/kb/articles/reborn-31">Развитие клана</a></p>
<p><a href="https://support.gamenet.ru/kb/articles/reborn-30">Клановый эльф</a></p>
<p><a href="https://support.gamenet.ru/kb/articles/reborn-13">Покровители долины Бифрост</a></p>
<p><a href="https://support.gamenet.ru/kb/articles/reborn-12">Активные навыки камней богов</a></p>
<p><a href="https://support.gamenet.ru/kb/articles/reborn">Усиление питомцев</a></p></div></li>


<li><h3>NetStorm</h3>
<div><h1>Кристалы/Миниралы</h1>
<p>Основной ресурс игры</p>
<h1>Жрец</h1>
<p>Главный юнит - его потеря знаменует конец игры.В случае вражеского жреца вы получает основной ресурс игры и знания/технологию вашего противника</p>
</div></li>
<li> <h3>Sao Online</h3>
<div><p>Игра в жанре...</p></div></li>

<li> <h3>Combat Arms </h3>
<div><p><a href="https://support.gamenet.ru/kb/articles/ca-84">Как скопировать никнейм</a></p>
<p><a href="https://support.gamenet.ru/kb/articles/ca">Информационные ресурсы</a></p>
<p><a href="https://support.gamenet.ru/kb/articles/ca-27">Одиночный режим игры</a></p>
<p><a href="https://support.gamenet.ru/kb/articles/ca-31">Купоны на скидку</a></p>
<p><a href="https://support.gamenet.ru/kb/articles/ca-24">Настройка клиента игры</a></p>
</div></li>

<li> <h3>Морской Бой </h3>
<div><p><a href="https://support.gamenet.ru/kb/articles/article-147"> Ежедневные задания</a></p>
<p><a href="https://support.gamenet.ru/kb/articles/article-120"> Астрология</a></p>
<p><a href="https://support.gamenet.ru/kb/articles/article-105"> Статуя бога</a></p>
<p><a href="https://support.gamenet.ru/"> Питомцы</a></p>
<p><a href="https://support.gamenet.ru/kb/articles/article-108">Кузница</a></p>
</div></li>

<li> <h3>Bleach </h3>
<div><p><a href="https://support.gamenet.ru/kb/articles/bl">Занпакто</a></p>
<p><a href="https://support.gamenet.ru/kb/articles/bl-7">Завоевание меча</a></p>
<p><a href="https://support.gamenet.ru/kb/articles/bl-4">Ежедневные задания</a></p>
<p><a href="https://support.gamenet.ru/kb/articles/bl-15">Питомцы</a></p>
<p><a href="https://support.gamenet.ru/kb/articles/bl-9"> Охота</a></p>
</div></li>

<li> <h3>Страна Воинов</h3>
<div><p><a href="https://support.gamenet.ru/kb/articles/article-25">Вторжение</a></p>
<p><a href="https://support.gamenet.ru/kb/articles/article-23">Связь героев</a></p>
<p><a href="https://support.gamenet.ru/kb/articles/article-72">Скакун</a></p>
<p><a href="https://support.gamenet.ru/kb/articles/article-82">Артефакт</a></p>
<p><a href="https://support.gamenet.ru/kb/articles/article-83">Самоцветы</a></p>
</div></li>

<li> <h3> Astellia </h3>
<div><p><a href="https://support.gamenet.ru/kb/articles/astellia-cannot-find-nvtt-64-dll">Ошибка "Cannot find 'nvtt_64.dll"</a></p>
<p><a href="https://support.gamenet.ru/kb/articles/astellia-cannot-find-d3dcompiler-43-dll">Ошибка "Cannot find 'D3DCOMPILER_43.dll"</a></p>
<p><a href="https://support.gamenet.ru/kb/articles/astellia">Системные требования</a></p>
<p><a href=""></a></p>
<p><a href=""></a></p>
</div></li></ul>
</div>

<div><h1>Не нашли ответа? Напишите нам на <a href="#">почту</a></h1></div>
</div>
</div>
    );
  }

  export default help
