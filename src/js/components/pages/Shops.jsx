import React, { useState, useEffect } from "react";
import { Shop } from "../general/Shop";
import "../../../sass/components/pages/shops.scss";

export const Shops = () => {
    const [shops, setShops] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchShops();
    }, []);

    const fetchShops = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_PUBLIC_URL}/data/shops.json`);
            const jsonData = await response.json();
            setShops(jsonData);
        } catch (error) {
            console.error("Fehler beim Laden der Shop-Daten:", error);
        }
    };

    const gefilterteShops = shops
        .map(shop => {
            // Filtere die Items basierend auf dem Suchbegriff
            const gefilterteItems = shop.items.filter(item =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

            // Falls der Ort passt oder mindestens ein Item übrig bleibt, Shop behalten
            if (shop.ort.toLowerCase().includes(searchTerm.toLowerCase()) || gefilterteItems.length > 0) {
                return { ...shop, items: gefilterteItems.length > 0 ? gefilterteItems : shop.items };
            }
            return null;
        })
        .filter(shop => shop !== null);

    return (
        <div className="shopListe">
            <div className="inputContainer">
                <input
                    type="text"
                    placeholder="Nach Ort oder Item suchen..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search"
                />
            </div>

            <div className="shopContainer">
                {gefilterteShops.map(shop => (
                    <Shop key={shop.id} shop={shop} />
                ))}
            </div>
        </div>
    );
};
