import React from 'react';
import s from '../section-four/DataBase.module.css'
const DataBase = () => {
    return (
        <div>
            <div className={s.container}>
                <div className={s.first__block}>
                    <h1 className={s.number}>
                        0
                    </h1>

                    <span className={s.title}>
                        отечествнных
                        производителей
                    </span>
                    <p className={s.text}>в базе на данный момент</p>
                </div>
                <div className={s.second__block}>
                    <h1 className={s.number}>
                        0
                    </h1>

                    <span className={s.title}>
                        отечествнных
                        производителей
                    </span>
                    <p className={s.text}>в базе на данный момент</p>
                </div>
                <div className={s.third__block}>
                    <h1 className={s.number}>
                        0
                    </h1>

                    <span className={s.title}>
                        отечествнных
                        производителей
                    </span>
                    <p className={s.text}>в базе на данный момент</p>
                </div>
            </div>
        </div>
    );
};

export default DataBase;