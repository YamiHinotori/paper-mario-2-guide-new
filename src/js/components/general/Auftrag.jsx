import React from "react";
import "../../../sass/components/general/auftrag.scss";

export const Auftrag = ({ id, containerId, titel, ort, verfuegbar, loesung, belohnung, checked, onChange }) => {
    
    return (
        <div id={containerId} className={`auftragContainer ${checked ? "checked" : ""}`}>
            <div className="textContainer">
                <p className="ueberschrift">{titel}</p>
                <p className="verfuegbar">Verfügbar nach: {verfuegbar}</p>
                <p className="ort">Ort des Auftrags: {ort}</p>
                <div className="loesungContainer">
                    <p>Lösung:</p>
                    <p className="loesung">{loesung}</p>
                </div>
                <div className="belohnungContainer">
                    <p>Belohnung:</p>
                    <p className="belohnung">{belohnung}</p>
                </div>
            </div>
            <label>
                <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
                />
                <div className="input">
                    {checked && <span className="inputCheckmark">✔</span>}
                </div>
            </label>
        </div>
    );
};