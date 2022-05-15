import React from 'react';
import s from './SectionThird.module.css'

const SectionThird = () => {
    return (
        <div>
            <div className={s.container}>
                <span className={s.title}>
                    Хотите, чтобы ваше производство <br />
                    попало к нам в базу?
                </span>

                <p className={s.text}>заказчики смогут легко вас найти. у вас будет личная страница на сайте <br /> с рейтингом и отзывами. возможности рекламы и продвижения</p>

                <button className={s.btn}>
                    <span className={s.title__btn}>Дальше</span></button>
            </div>
        </div>
    );
};

export default SectionThird;