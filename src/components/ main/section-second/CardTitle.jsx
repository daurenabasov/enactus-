import React from "react";
import Card from "./Card";
import s from "./CartTitle.module.css";

import i1 from '../../../assets/cards/photo5192939967574293524.jpg'
import i2 from '../../../assets/cards/photo5192939967574293525.jpg'
import i3 from '../../../assets/cards/photo5192939967574293528.jpg'
import i4 from '../../../assets/cards/photo5192939967574293529.jpg'
import i5 from '../../../assets/cards/photo5192939967574293530.jpg'
import i6 from '../../../assets/cards/photo5192939967574293531.jpg'
import i7 from '../../../assets/cards/photo5192939967574293532.jpg'
import i8 from '../../../assets/cards/photo5192939967574293533.jpg'

const CardTitle = () => {
    return (
        <div>
            <div className={s.container}>
                <h1>начните подбор прямо сейчас!</h1>
                <div className={s.card__blocks}>
                    <Card image={i1}/>
                    <Card image={i2}/>

                    <Card image={i3}/>
                    <Card image={i4}/>
                    <Card image={i5}/>
                    <Card image={i6}/>

                    <Card image={i7}/>
                    <Card image={i8}/>

                    <Card image={i1}/>


                </div>
            </div>
        </div>
    );
};

export default CardTitle;
