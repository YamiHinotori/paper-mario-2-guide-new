import React from "react";
import "../../../sass/components/general/arena-kampf.scss";

export const ArenaKampf = ({ kampf }) => {
    const { name, rang, information, gegner } = kampf;

    return (
        <div className="arenaItem">
            <h3 className="name">{name} (Rang {rang})</h3>
            {information && <p className="information">{information}</p>}

            <div className="gegnerListe">
                <h4>Gegner:</h4>
                <ul>
                    {gegner.map((gegnerItem, index) => (
                        <li key={index} className="gegnerItem">
                            <img src={gegnerItem.bild} alt={gegnerItem.name} className="gegner-bild" />
                            <div>
                                <strong>{gegnerItem.name}</strong> (x{gegnerItem.anzahl})<br />
                                KP: {gegnerItem.kp} | Angriff: {gegnerItem.angriff} | Verteidigung: {gegnerItem.verteidigung}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
