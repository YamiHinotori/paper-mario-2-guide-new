import React, { useState, useEffect } from "react";
import { ArenaKampf } from "../general/ArenaKampf";
import "../../../sass/components/pages/arena.scss";

export const Arena = () => {
    const [kaempfe, setKaempfe] = useState([]);

    useEffect(() => {
        fetchKaempfe();
    }, []);

    const fetchKaempfe = async () => {
        try {
            const response = await fetch("/data/arena.json");
            const jsonData = await response.json();
            setKaempfe(jsonData);
        } catch (error) {
            console.error("Fehler beim Laden der Arena-Kämpfe:", error);
        }
    };

    return (
        <div className="arenaListe">
            <h2>Arena-Kämpfe</h2>
            <div className="arenaItems">
                {kaempfe.map(kampf => (
                    <ArenaKampf key={kampf.id} kampf={kampf} />
                ))}
            </div>
        </div>
    );
};
