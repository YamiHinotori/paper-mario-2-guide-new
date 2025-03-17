import React, { useState, useEffect } from "react";
import { OrdenItem } from "../general/OrdenItem";
import "../../../sass/components/pages/orden.scss";

export const Orden = () => {
    const [orden, setOrden] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [orteSearchTerm, setOrteSearchTerm] = useState("");
    const [hideCollected, setHideCollected] = useState(false);

    useEffect(() => {
        fetchOrden();
    }, []);

    const fetchOrden = async () => {
        try {
            const response = await fetch("/data/orden.json");
            const jsonData = await response.json();

            // Lade gespeicherte gesammelte Orden aus localStorage
            const savedData = JSON.parse(localStorage.getItem("gesammelteOrden")) || {};
            const updatedOrden = jsonData.map(orden => ({
                ...orden,
                isCollected: savedData[orden.id] || false // Standardmäßig nicht gesammelt
            }));

            setOrden(updatedOrden);
        } catch (error) {
            console.error("Fehler beim Laden der Orden:", error);
        }
    };

    const toggleCollectedStatus = (id) => {
        const updatedOrden = orden.map(ordenItem =>
            ordenItem.id === id ? { ...ordenItem, isCollected: !ordenItem.isCollected } : ordenItem
        );
        setOrden(updatedOrden);

        // Speichern im localStorage
        const savedData = JSON.parse(localStorage.getItem("gesammelteOrden")) || {};
        savedData[id] = !savedData[id]; // Toggle-Wert
        localStorage.setItem("gesammelteOrden", JSON.stringify(savedData));
    };

    return (
        <div className="orden">
            <div className="inputContainer">
                <input
                    type="text"
                    placeholder="Orden suchen..."
                    className="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Fundorte suchen..."
                    className="search"
                    value={orteSearchTerm}
                    onChange={(e) => setOrteSearchTerm(e.target.value)}
                />
                <button className="button" onClick={() => setHideCollected(!hideCollected)}>
                    {hideCollected ? "Gesammelte einblenden" : "Gesammelte ausblenden"}
                </button>
            </div>

            <div className="ordenItems">
                {orden
                    .filter(ordenItem => ordenItem.name.toLowerCase().includes(searchTerm.toLowerCase()))
                    .filter(ordenItem => 
                        ordenItem.orte.some(ort => ort.name.toLowerCase().includes(orteSearchTerm.toLowerCase()))
                    )
                    .filter(ordenItem => !(hideCollected && ordenItem.isCollected)) // Filtere nur, wenn `hideCollected` aktiv ist
                    .map(ordenItem => (
                        <OrdenItem
                            key={ordenItem.id}
                            orden={ordenItem}
                            toggleCollectedStatus={toggleCollectedStatus}
                        />
                    ))}
            </div>
        </div>
    );
};
