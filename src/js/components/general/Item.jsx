import React from "react";
import "../../../sass/components/general/item.scss";

export const Item = ({ item }) => {
    const { name, bild, beschreibung } = item;

    return (
        <div className="itemClassContainer">
            <div className="ueberschriftContainer">
                <img src={bild} alt={name} className="bild" />
                <strong><p>{name}</p></strong>
            </div>
            <p className="beschreibung">{beschreibung}</p>
        </div>
    );
};
