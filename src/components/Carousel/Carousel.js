import React, {Component, useState, useEffect} from "react";
import "../Carousel/Carousel.css";
import slide1 from "../Img/1.jpg";
import slide2 from "../Img/2.jpg";
import slide3 from "../Img/3.jpg";
import slide4 from "../Img/4.jpg";

const img = [
    <img className="img-car" key={slide1} src = {require ("../Img/1-1.png")}/>,
    <img className="img-car" key={slide2} src = {require ("../Img/1-2.png")}/>,
    <img className="img-car" key={slide3} src = {require ("../Img/1-3.png")}/>,
    <img className="img-car" key={slide4} src = {require ("../Img/1-4.png")}/>,

]
export function Slider() {
    // Индекс текущего слайда
const [activeIndex, setActiveIndex] = useState(0);
 
// Хук Effect
useEffect(() => {
//     // Запускаем интервал
    const interval = setInterval(() => {
//         // Меняем состояние
        setActiveIndex((current) => {
//             // Вычисляем индекс следующего слайда, который должен вывестись
            const res = current === img.length - 1 ? 0 : current + 1
//             // Возвращаем индекс
            return res
        })
    }, 8000)
//     // Выключаем интервал
    return () => clearInterval()
}, [])
 
// // Вычисляем индекс предыдущего слайда
const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
// // Вычисляем индекс следующего слайда
const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1
return (
    <div className="slider">
        <div><img key={slide1}></img></div>
    <div className="slider-img slider-img-prev"
                key={prevImgIndex}>
            {img[prevImgIndex]}
            <div class="text"></div>
        </div>
        <div className="slider-img"
                key={activeIndex}>
            {img[activeIndex]}
            <div class="text"></div>
        </div>
        <div className="slider-img slider-img-next"
                key={nextImgIndex}>
            {img[nextImgIndex]}
            <div class="text"></div>
        </div> 
    </div>
)}

export default Slider