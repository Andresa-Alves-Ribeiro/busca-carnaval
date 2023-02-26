import React, { useState } from 'react';
import { MapPin } from 'phosphor-react';
import Card from '../Card/Card';
import { CardTypes } from '../Types/types';
import CardsList from '../CardsList/CardsList';
import './cards.css';


const Cards = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredData = CardsList.filter((card: CardTypes) => {
        const { title, location } = card;
        const search = searchTerm.toLowerCase();
        return title.toLowerCase().includes(search) || location.toLowerCase().includes(search);
    });

    return (
        <main>
            <div className="body">
                <section className="top-body">
                    <h2>Blocos recomendados</h2>
                    <div className="view">
                        <button className="btn primary">Lista</button>
                        <button className="btn primary">Mapa</button>
                    </div>
                </section>

                <section className="cards">
                    {filteredData.map((card: CardTypes) => (
                        <Card key={card.id} {...card} />
                    ))}
                </section>
            </div>
        </main>
    );
};

export default Cards;
