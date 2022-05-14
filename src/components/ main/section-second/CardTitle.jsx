import React from "react";
import Card from "./Card";
import s from "./CartTitle.module.css";

const CardTitle = () => {
    return (
        <div>
            <div className={s.container}>
                <h1>начните подбор прямо сейчас!</h1>
                <div className={s.card__blocks}>
                    <Card />
                    <Card />

                    <Card />
                    <Card />
                    <Card />
                    <Card />

                    <Card />
                    <Card />

                    <Card />


                </div>
            </div>
        </div>
    );
};

export default CardTitle;
