import React from 'react';
import s from './CartTitle.module.css'
import image from '../../../assets/city.png'

const Card = () => {
    return (
        <div>
            <div className={s.card__container}>
                <div className={s.img__block}></div>
                <h2>
                    Название
                </h2>

                <span>звезда залупа</span>

                <div>
                    <div className={s.under__title}>
                        <span className={s.image__city}>
                            <img src={image} alt="img" />
                        </span>
                        <span>
                            Город
                        </span>
                    </div>
                    <span>0 Отзывов</span>
                </div>


            </div>
        </div>
    );
};

export default Card