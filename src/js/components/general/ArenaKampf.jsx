import React from "react";
import "../../../sass/components/general/arena-kampf.scss";

export const ArenaKampf = ({ kampf }) => {
    const { name, rang, information, gegner } = kampf;

    return (
        <div className="arenaKampfContainer">
            <p className="name">Rang: {rang}: {name}</p>
            {information && <p className="information">{information}</p>}
            <div className="gegnerListe">
                { gegner.map((gegner, index) => (
                    <div className="gegnerContainer" key={`gegner-${index}`}>
                        <div className="gegner">
                            <img src={gegner.bild} alt={gegner.name} className="image" />
                            <div className="infoContainer">
                                <strong><p>{gegner.name} ({gegner.anzahl}x)</p></strong>
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
