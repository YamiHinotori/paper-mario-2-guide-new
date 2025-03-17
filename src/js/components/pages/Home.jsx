import React, { useState, useEffect } from "react";
import { Checkbox } from "../general/Checkbox";
import { TextItem } from "../general/TextItem";
import "../../../sass/components/pages/home.scss";

export const Home = () => {

    const confirmAction = () => {
        const response = window.confirm("Bist du sicher, dass du ein neues Spiel starten möchtest?");

        if (response) {
            localStorage.removeItem("checkboxStateCollectables");
            localStorage.removeItem("checkboxStateMissionen");
            localStorage.removeItem("lastPage");
            localStorage.removeItem("einkaufslistenItems");
            localStorage.removeItem("gesammelteRezepte");
            localStorage.removeItem("gesammelteOrden");
            window.alert('Ein Neues Spiel wurde gestartet! Die Seite wird nun neu geladen.');
            window.location.reload();
        }
    }

    const elementsToRender = [
        {
            ueberschrift: "Orden Erstangriff:",
            text: "Nach Kapitel 2 im Orden-Shop erhältlich."
        },
        {
            ueberschrift: "So kommt man zur Mafia:",
            text: `Erst Trockenpilz, dann Schwirrwar kaufen.
            Lieblingsfarbe ist Gelb.`
        },
        {
            ueberschrift: "Informationen zum Peach Part nach Kapitel 3:",
            text: "nach rechts"
        },
        {
            ueberschrift: "Informationen zum Peach Part nach Kapitel 5:",
            text: "Rot - Blau - Gelb - Grün"
        },
        {
            ueberschrift: "Informationen zum Casino:",
            text: `Nach Kapitel 6 im Casino:
            19x Kampfwut - á 34 Palma = 646 Palma = 1.938 Münzen
            1x Geld! Geld! - 234 Palma = 702 Münzen
            Gesamt: 880 Palma = 2.640 Münzen`
        },
        {
            ueberschrift: "Aufenthaltsorte von General Bomb-umm:",
            text: `Blütenweiler
            Isla Corsaria
            Falkenheim
            Großer Baum
            Düsterdorf
            Großfrostheim`
        },
        {
            ueberschrift: "Informationen zum Crucionen Hauptquartier:",
            text: `Zuerst UG2
            Links - Rechts - Mitte
            Sicherheitscode: 014029`
        },
    ]
    
    return (
        <div className="home">
            <button className="button" onClick={() => confirmAction()}>Neues Spiel</button>
            <div className="mainContent">
                {elementsToRender.map((element, index) => {
                    return <TextItem key={`home-${index}`} id={`home-${index}`} ueberschrift={element.ueberschrift} text={element.text}/>
                })}
            </div>
    </div>
    );
}