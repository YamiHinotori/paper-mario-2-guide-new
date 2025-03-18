import React from "react";
import "../../../sass/components/general/shop-item.scss";

export const ShopItem = ({ item }) => {
    const { name, bild, beschreibung, preis } = item;

    return (
        <div className="shopItemClassContainer">
            <div className="ueberschriftContainer">
                <img src={bild} alt={name} className="bild" />
                <p>{name}</p>
            </div>
            <div className="shopItem-info">
                <p className="beschreibung">{beschreibung}</p>
                <p className="preis">Preis: {preis} Münzen</p>
            </div>
        </div>
    );
};
