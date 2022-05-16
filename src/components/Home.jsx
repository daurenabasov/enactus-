import React from 'react';
import s from './help.module.css'

const Help = () => {
    return (
        <div className={s.help_container}>

            <div className={s.help_block}>

                <h2 >
                    поможем отшить вашу задумку быстро и без нюансов в кыргызстане
                </h2>

                <button class="btn draw-border"> оформить заказ
                </button>

            </div>

            <div className={s.help_blocks}>

                <div className={s.help_description}>
                    <div>
                        индивидуальный подход
                    </div>
                    <div>
                        подбор
                        производства
                    </div>
                    <div>
                        подбор материалов
                    </div>
                    <div>
                        контроль качества
                    </div>
                    <div>
                        доставка
                    </div>
                    <div>
                        и другое
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Help;