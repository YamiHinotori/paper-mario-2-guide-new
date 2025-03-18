import React from "react";
import "../../../sass/components/general/collectable.scss";

export const Collectable = ({ id, containerId, ort, beschreibung, checked, onChange, typ }) => {
    const images = {
        insignie: `${process.env.REACT_APP_PUBLIC_URL}/images/collectables/insignie.png`,
        sternsplitter: `${process.env.REACT_APP_PUBLIC_URL}/images/collectables/sternsplitter.png`,
    };
    
    return (
        <div id={containerId} className={`collectableContainer ${checked ? "checked" : ""}`}>
            <img className="image" src={images[typ]} alt={typ} />
            <div className="textContainer">
                <p className="ort">
                    Ort: {ort}
                </p>
                <p className="beschreibung">
                    Beschreibung: <br/>
                    {beschreibung}
                </p>
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