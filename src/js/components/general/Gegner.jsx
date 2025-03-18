import React from "react";
import "../../../sass/components/general/gegner.scss";

export const Gegner = ({ gegner }) => {
    const { name, kp, angriff, verteidigung, bild, beschreibung, orte } = gegner;

    return (
        <div className="gegnerContainerClass">
            <div className="innerContainer">
                <div className="gegner">
                    <img src={bild} alt={name} className="image" />
                    <div className="infoContainer">
                        <p>{name}</p>
                        <div className="table">
                            <div>
                                <p className="head">KP</p>
                                <p className="info">{kp}</p>
                            </div>
                            <div>
                                <p className="head">A</p>
                                <p className="info">{angriff}</p>
                            </div>
                            <div>
                                <p className="head">V</p>
                                <p className="info">{verteidigung}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="beschreibung">{beschreibung}</p>
            <div>
                <p>Fundorte:</p> 
                <p>{orte.join(", ")}</p>  
            </div>   
        </div>              
    );
};
