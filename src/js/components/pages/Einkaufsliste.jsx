import React, { useState, useEffect } from "react";
import { EinkaufslistenItem } from "../general/EinkaufslisteItem";
import "../../../sass/components/pages/einkaufsliste.scss";

export const Einkaufsliste = () => {
    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [hideCompleted, setHideCompleted] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_PUBLIC_URL}/data/einkaufsliste.json`);
            const jsonData = await response.json();

            const savedData = JSON.parse(localStorage.getItem("einkaufslistenItems")) || {};
            const updatedItems = jsonData.map(item => ({
                ...item,
                count: savedData[item.id]?.count || 0
            }));

            setItems(updatedItems);
        } catch (error) {
            console.error("Fehler beim Laden der JSON-Daten:", error);
        }
    };

    const updateItemCount = (id, newCount) => {
        const updatedItems = items.map(item =>
            item.id === id ? { ...item, count: newCount } : item
        );
        setItems(updatedItems);

        const savedData = JSON.parse(localStorage.getItem("einkaufslistenItems")) || {};
        savedData[id] = { name: updatedItems.find(item => item.id === id).name, count: newCount };
        localStorage.setItem("einkaufslistenItems", JSON.stringify(savedData));
    };

    return (
        <div className="einkaufsliste">
            <div className="inputContainer">
                <input
                    type="text"
                    className="search"
                    placeholder="Zutat suchen..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="button" onClick={() => setHideCompleted(!hideCompleted)}>
                    {hideCompleted ? "Gesammelte Zutaten einblenden" : "Gesammelte Zutaten ausblenden"}
                </button>
            </div>

            <div className="einkaufslistenItems">
                {items
                    .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
                    .filter(item => !(hideCompleted && item.count === item.anzahl)) 
                    .map((item) => (
                        <EinkaufslistenItem 
                            key={item.id}
                            item={item}
                            updateItemCount={updateItemCount}
                        />
                    ))}
            </div>
        </div>
    );
};
