import React, { useState, useEffect } from "react";
import { Stockwerk } from "../general/Stockwerk";
import "../../../sass/components/pages/duellkerker.scss";

export const Duellkerker = () => {
    const [etagen, setEtagen] = useState([]);

    useEffect(() => {
        fetchEtagen();
    }, []);

    const fetchEtagen = async () => {
        try {
            const response = await fetch("/data/duellkerker.json");
            const jsonData = await response.json();
            setEtagen(jsonData);
        } catch (error) {
            console.error("Fehler beim Laden der Turm-Daten:", error);
        }
    };

    return (
        <div className="turmListe">
            <h2>Turm der Prüfungen</h2>
            <div className="etagenContainer">
                {etagen.map(etage => (
                    <Stockwerk key={etage.id} etage={etage} />
                ))}
            </div>
        </div>
    );
};
