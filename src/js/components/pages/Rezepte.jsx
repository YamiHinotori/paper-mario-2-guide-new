import React, { useState, useEffect } from "react";
import { RezeptItem } from "../general/RezeptItem";
import "../../../sass/components/pages/rezepte.scss";

export const Rezepte = () => {
    const [rezepte, setRezepte] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [zutatenSearchTerm, setZutatenSearchTerm] = useState("");
    const [hideCollected, setHideCollected] = useState(false);

    useEffect(() => {
        fetchRezepte();
    }, []);

    const fetchRezepte = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_PUBLIC_URL}/data/rezepte.json`);
            const jsonData = await response.json();

            // Lade gespeicherte gesammelte Rezepte aus localStorage
            const savedData = JSON.parse(localStorage.getItem("gesammelteRezepte")) || {};
            const updatedRezepte = jsonData.map(rezept => ({
                ...rezept,
                isCollected: savedData[rezept.id] || false // Standardwert: false
            }));

            setRezepte(updatedRezepte);
        } catch (error) {
            console.error("Fehler beim Laden der Rezepte:", error);
        }
    };

    const toggleCollectedStatus = (id) => {
        const updatedRezepte = rezepte.map(rezept =>
            rezept.id === id ? { ...rezept, isCollected: !rezept.isCollected } : rezept
        );
        setRezepte(updatedRezepte);

        // Aktualisiere localStorage
        const savedData = JSON.parse(localStorage.getItem("gesammelteRezepte")) || {};
        savedData[id] = !savedData[id]; // Toggle-Wert
        localStorage.setItem("gesammelteRezepte", JSON.stringify(savedData));
    };

    return (
        <div className="rezepte">
            <div className="inputContainer">
                <input
                    className="search"
                    type="text"
                    placeholder="Rezept suchen..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <input
                    className="search"
                    type="text"
                    placeholder="Zutaten suchen..."
                    value={zutatenSearchTerm}
                    onChange={(e) => setZutatenSearchTerm(e.target.value)}
                />
                <button className="button" onClick={() => setHideCollected(!hideCollected)}>
                    {hideCollected ? "Gekochte Rezepte einblenden" : "Gekochte Rezepte ausblenden"}
                </button>
            </div>

            <div className="rezepteItems">
                {rezepte
                    .filter(rezept => rezept.name.toLowerCase().includes(searchTerm.toLowerCase()))
                    .filter(rezept => rezept.zutaten.some(zutat => zutat.toLowerCase().includes(zutatenSearchTerm.toLowerCase())))
                    .filter(rezept => !(hideCollected && rezept.isCollected)) // Filtere nur, wenn `hideCollected` aktiv ist
                    .map(rezept => (
                        <RezeptItem
                            key={rezept.id}
                            rezept={rezept}
                            toggleCollectedStatus={toggleCollectedStatus}
                        />
                    ))}
            </div>
        </div>
    );
};
