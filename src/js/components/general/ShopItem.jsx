import React from "react";
import "../../../sass/components/general/shop-item.scss";

export const ShopItem = ({ item }) => {
    const { name, bild, beschreibung, preis } = item;

    return (
        <div className="shopItem">
            <img src={bild} alt={name} className="shopItem-bild" />
            <div className="shopItem-info">
                <h4>{name}</h4>
                <p className="beschreibung">{beschreibung}</p>
                <p className="preis">Preis: {preis} Münzen</p>
            </div>
        </div>
    );
};
