 import { Link } from 'react-router-dom';
import '../footer/footer.css';

 const Footer=()=>{

    return(
        <div class="information"><div class="content">
    <div class="Corp">
        <div class="Corp-b">
            <a href="#">Русский</a>
          </div>

     
    <div class="Corp-menu-1">
        <div><Link to="Working">РАБОТА В Game-net</Link></div>
        <div> <Link to="/Company">О КОМПАНИИ</Link></div>
            <div><Link to="/help">ПОДДЕРЖКА</Link></div>
            <div><a href="#">ОТКРЫТЬ ЗАПРОС</a></div>
            <div><a href="#">ПРЕСС-РЕЛИЗЫ</a></div>
            <div><a href="#">API</a></div>
            <div><a href="#">КАРТА САЙТА</a></div>
 </div>  


        <div class="Corp-info">Все игры в одном приложении:<img src="https://gamenet.ru/images/header/logo.png"/><a href="#"> Приложение Game-net.com</a></div>

<p><span>©&nbsp;2010&nbsp;–&nbsp;2022&nbsp;</span><a href="/">GameNet.ru</a></p>
 <p>Все упомянутые товарные знаки являются собственностью соответствующих владельцев.</p>
 

    
 <div class="Corp-menu-2">
 <div><a href="#">Политика конфиденциальности</a></div>  
 <div><a href="#">Соглашения</a></div>  
 <div><a href="#">Условия</a></div>  
 <div><a href="#">Политика cookie</a> </div> 
 <div><a href="#">Параметры cookie</a></div> 
</div> 
    </div>  
</div></div>
    )
 }

 export default Footer