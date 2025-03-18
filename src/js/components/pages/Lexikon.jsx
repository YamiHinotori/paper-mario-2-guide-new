import React, { useState, useEffect } from "react";
import { Gegner } from "../general/Gegner";
import "../../../sass/components/pages/lexikon.scss";

export const Lexikon = () => {
    const [gegner, setGegner] = useState([]);
    const [searchName, setSearchName] = useState("");
    const [searchOrt, setSearchOrt] = useState("");

    useEffect(() => {
        fetchGegner();
    }, []);

    const fetchGegner = async () => {
        try {
            const response = await fetch("/data/lexikon.json");
            const jsonData = await response.json();
            setGegner(jsonData);
        } catch (error) {
            console.error("Fehler beim Laden der Gegner-Daten:", error);
        }
    };

    const gefilterteGegner = gegner.filter(item => 
        item.name.toLowerCase().includes(searchName.toLowerCase()) &&
        (searchOrt === "" || item.orte.some(ort => ort.toLowerCase().includes(searchOrt.toLowerCase())))
    );

    return (
        <div className="lexikon">
            <div className="inputContainer">
                <input
                    type="text"
                    placeholder="Nach Name suchen..."
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                    className="search"
                />
                <input
                    type="text"
                    placeholder="Nach Ort suchen..."
                    value={searchOrt}
                    onChange={(e) => setSearchOrt(e.target.value)}
                    className="search"
                />
            </div>

            <div className="gegnerItems">
                {gefilterteGegner.map(gegner => (
                    <Gegner key={gegner.id} gegner={gegner} />
                ))}
            </div>
        </div>
    );
};
