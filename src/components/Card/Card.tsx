import React, { FC } from "react";
import { MapPin } from 'phosphor-react';
import "./card.css";
import { CardTypes } from '../Types/types';

const Card = ({ img, title, description, location }: CardTypes) => {
    return (
        <div className="card">
            <img src={img} alt={title} className="card-img" />
            <div className="body">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <div className="location">
                    <MapPin className='icon' size={28} />
                    <p className="card-location">{location}</p>
                </div>

            </div>
        </div>
    );
};

export default Card;