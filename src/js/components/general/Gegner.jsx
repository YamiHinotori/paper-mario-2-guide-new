import React from "react";
import "../../../sass/components/general/gegner.scss";

export const Gegner = ({ gegner }) => {
    const { name, kp, angriff, verteidigung, bild, beschreibung, orte } = gegner;

    return (
        <div className="gegnerItem">
            <img src={bild} alt={name} className="gegner-bild" />
            <div className="gegner-info">
                <h3>{name}</h3>
                <p className="beschreibung">{beschreibung}</p>
                <p><strong>KP:</strong> {kp} | <strong>Angriff:</strong> {angriff} | <strong>Verteidigung:</strong> {verteidigung}</p>
                <p><strong>Fundorte:</strong> {orte.join(", ")}</p>
            </div>
        </div>
    );
};
