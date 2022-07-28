import React from "react";
import style from './Navbar.module.css'
const Navbar = () =>{
    return(
    <div className={style.superDiv}>
<ul className={style.navBarList}>
    <li className={style.navLi}>главная</li>
    <li className={style.navLi}>блог</li>
    <li className={style.navLi}>корзина</li>
    <li className={style.navLi}>разное</li>
    <li className={style.navLi}>новости</li>
</ul>
<div className={style.transformBlock}></div>
    </div>)
}
export default Navbar;
