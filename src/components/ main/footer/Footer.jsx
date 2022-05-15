import React from 'react';
import nukura__logo from '../../../assets/nukura-footer.png'
import enactus__logo from '../../../assets/enactus-logo.png'
import s from "./Footer.module.css"



const Footer = () => {
    return (
        <div>
            <div className={s.footer}>
                <div className={s.first__section}>
                    <div className={s.nukuraLogo}>
                        <img src={nukura__logo} alt="" />
                    </div>
                    <div className={s.nukura__text}>
                        Площадка, где заказчики легко <br /> смогут найти своего производителя <br /> из Кыргызстана в швейном деле
                    </div>
                </div>

                <div className={s.second__section}>
                    <div className={s.enactus__logo}>
                        <img src={enactus__logo} width="237px" alt="" />
                    </div>
                    <div className={s.enactus__text}>
                        Этот сайт - является проектом  <br /> команды Enactus IT-Academy 2022
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Footer;