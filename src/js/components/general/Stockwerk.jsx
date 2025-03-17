import React from "react";
import "../../../sass/components/general/stockwerk.scss";

export const Stockwerk = ({ etage }) => {
    return (
        <div className="turmEtage">
            <h3>Etage {etage.etage}</h3>
            <div className="gegnerListe">
                {etage.gegner.map((gegner, index) => (
                    <div key={index} className="gegner">
                        <img src={gegner.bild} alt={gegner.name} className="gegnerBild" />
                        <div className="gegnerInfo">
                            <h4>{gegner.name}</h4>
                            <p>KP: {gegner.kp}</p>
                            <p>Angriff: {gegner.angriff}</p>
                            <p>Verteidigung: {gegner.verteidigung}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
