import React from "react";
import "../../../sass/components/general/einkaufslisten-item.scss";

export const EinkaufslistenItem = ({ item, updateItemCount }) => {
    const { id, name, anzahl, bild, count } = item;

    const decrement = () => {
        if (count > 0) {
            updateItemCount(id, count - 1);
        }
    };

    const increment = () => {
        if (count < anzahl) {
            updateItemCount(id, count + 1);
        }
    };

    return (
        <div className="einkaufslistenItem">
            <div className="nameContainer">
                <img src={bild} alt={name} className="image-image" />
                <span className="name">{name}</span>
            </div>
            <span className="count">
                <i>{count}/{anzahl}</i>
            </span>
            <div className="buttonContainer">
                <button className="button" onClick={decrement}>-</button>
                <button className="button" onClick={increment}>+</button>
            </div>
        </div>
    );
};
