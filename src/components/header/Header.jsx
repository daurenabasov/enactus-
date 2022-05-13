import React from 'react';
import s from './header.module.css'
import logo from '../../assets/ok.png'
import like from '../../assets/ok1.png'

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.logo}>
                <img src={logo} alt='ok'/>
            </div>
            <div className={s.panel}>
                <div></div>
                <div className={s.pan_img}>
                    <img src={like} alt=''/>
                </div>
                <div className={s.panel_register}>
                Войти/Регистрация
                </div>
                <div>
                    <button className={s.pan_btn}>
                        Добавить компанию
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;