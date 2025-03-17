import React from "react";
import "../../../sass/components/general/rezept-item.scss";

export const RezeptItem = ({ rezept, toggleCollectedStatus }) => {
    const { id, name, bild, beschreibung, zutaten, aufbewahren, isCollected } = rezept;

    return (
        <div className="rezeptItem">
            <div className="ueberschriftContainer">
                <div className="nameContainer">
                    <img src={bild} alt={name} className="image" />
                    <span className="name">{name}</span>
                </div>
                {aufbewahren && <p className="aufbewahren">Aufbewahren!</p>}
                <label>
                    <input
                        type="checkbox"
                        id={id}
                        checked={isCollected}
                        onChange={() => toggleCollectedStatus(id)}
                    />
                    <div className="input">
                        {isCollected && <span className="inputCheckmark">✔</span>}
                    </div>
                </label>
            </div>
            <p className="beschreibung">{beschreibung}</p>
            <p className="zutaten">Zutaten: {zutaten.join(", ")}</p>
        </div>
    );
};
