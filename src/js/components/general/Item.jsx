import React from "react";
import "../../../sass/components/general/item.scss";

export const Item = ({ item }) => {
    const { name, bild, beschreibung } = item;

    return (
        <div className="item">
            <img src={bild} alt={name} className="item-bild" />
            <div className="item-info">
                <h3>{name}</h3>
                <p className="beschreibung">{beschreibung}</p>
            </div>
        </div>
    );
};
