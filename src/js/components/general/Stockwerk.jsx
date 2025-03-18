import React from "react";
import "../../../sass/components/general/stockwerk.scss";

export const Stockwerk = ({ etage }) => {
    return (
        <div className="stockwerkContainer">
            <strong><p>Etage {etage.etage}</p></strong>
            <div className="gegnerListe">
                {etage.gegner.map((gegner, index) => (
                    <div className="gegnerContainer" key={`gegner-${index}`}>
                    <div className="gegner">
                        <img src={gegner.bild} alt={gegner.name} className="image" />
                        <div className="infoContainer">
                            <p>{gegner.name}</p>
                            <div className="table">
                                <div>
                                    <p className="head">KP</p>
                                    <p className="info">{gegner.kp}</p>
                                </div>
                                <div>
                                    <p className="head">A</p>
                                    <p className="info">{gegner.angriff}</p>
                                </div>
                                <div>
                                    <p className="head">V</p>
                                    <p className="info">{gegner.verteidigung}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};
