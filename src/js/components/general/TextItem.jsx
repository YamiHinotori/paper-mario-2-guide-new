import React from "react";
import "../../../sass/components/general/text-item.scss"

export const TextItem = ({ueberschrift, text, key}) => {
    return (
        <div className="item" id={key}>
            <p className="ueberschrift"><strong>{ueberschrift}</strong></p>
            <p className="text">{text}</p>
        </div>
    );
}