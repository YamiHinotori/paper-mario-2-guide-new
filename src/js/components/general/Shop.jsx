import React from "react";
import { ShopItem } from "./ShopItem";
import "../../../sass/components/general/shop.scss";

export const Shop = ({ shop }) => {
    const { ort, items } = shop;

    return (
        <div className="shop">
            <h3>{ort}</h3>
            <div className="shopItems">
                {items.map((item, index) => (
                    <ShopItem key={index} item={item} />
                ))}
            </div>
        </div>
    );
};
