import React from "react";
import "../../../sass/components/general/orden-item.scss";

export const OrdenItem = ({ orden, toggleCollectedStatus }) => {
    const { id, name, op, beschreibung, bild, orte, isCollected } = orden;

    return (
        <div className="ordenItem">
            <div className="ueberschriftContainer">
                <div className="nameContainer">
                    <img src={bild} alt={name} className="orden-bild" />
                    <span className="name">{name}</span>
                </div>
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
            <p className="bp"><strong>OP-Kosten:</strong> {op}</p>
            <p className="orte">
                <strong>Fundorte:</strong>{" "}
                {orte.map(ort => (
                    <span key={ort.name}>{ort.name}{ort.beschreibung ? ` - ${ort.beschreibung}` : ""}</span>
                )).reduce((prev, curr) => [prev, ", ", curr])}
            </p>
        </div>
    );
};
