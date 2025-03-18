import React, { useState, useEffect } from "react";
import { Item } from "../general/Item";
import "../../../sass/components/pages/items.scss";

export const Items = () => {
    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await fetch("/data/items.json");
            const jsonData = await response.json();
            setItems(jsonData);
        } catch (error) {
            console.error("Fehler beim Laden der Item-Daten:", error);
        }
    };

    const gefilterteItems = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="itemListe">
            <div className="inputContainer">
                <input
                    type="text"
                    placeholder="Nach Name suchen..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search"
                />
            </div>

            <div className="itemContainer">
                {gefilterteItems.map(item => (
                    <Item key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};
