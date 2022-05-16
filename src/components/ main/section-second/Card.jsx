import React from 'react';
import s from './CartTitle.module.css'
import image from '../../../assets/city.png'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const Card = (props) => {
    return (
        <>
            <div className={s.card__container}>
                <img src={props.image} className={s.img__block}/>
                <h2>
                    Название
                </h2>

                <Stack className={s.star} spacing={1}>
                    <Rating name="size-large" defaultValue={0} size="large" />
                </Stack>
                <div>
                    <div className={s.under__title}>



                        <div className={s.comment}>
                            <div className={s.star_block}>
                                <span className={s.image__city}>
                                    <img src={image} alt="img" />
                                </span>
                                 Город
                            </div>
                            <div>0 Отзывов</div>
                        </div>
                    </div>

                </div>


            </div>
        </>
    );
};

export default Card