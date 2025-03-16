import React from "react";
import "../../../sass/components/general/text-item.scss"

export const TextItem = ({ueberschrift, text, id}) => {
    return (
        <div className="item" id={id}>
            <p className="ueberschrift"><strong>{ueberschrift}</strong></p>
            <p className="text">{text}</p>
        </div>
    );
}