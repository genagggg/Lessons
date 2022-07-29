import React from "react";
import style from './BlockSlide2.module.css';

const BlockSlide2 = () => {
    let arrayName = ['Viktor', 'Boris'];
    const[vik, bor]=arrayName;
    return (
        <div className={style.blockSlide}>
            <p>{
                vik
                }</p>
                <p>{bor}</p>
        </div>
    )
}

export default BlockSlide2;