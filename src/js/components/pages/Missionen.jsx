import React, { useState, useEffect } from "react";
import { Auftrag } from "../general/Auftrag";
import "../../../sass/components/pages/missionen.scss";

export const Missionen = () => {
    const [checkedItems, setCheckedItems] = useState({});
    const [fertigeEinblenden, setFertigeEinblenden] = useState(true);
    const [currentChapter, setCurrentChapter] = useState(0);
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const checkboxStates = JSON.parse(localStorage.getItem("checkboxStateMissionen")) || {};
        setCheckedItems(checkboxStates);

        const currentChapterState = JSON.parse(localStorage.getItem("chapterState")) || 1;
        setCurrentChapter(currentChapterState);

        getData();
    }, []);

    const getData = async () => {
        await fetch(`${process.env.REACT_APP_PUBLIC_URL}/data/auftraege.json`).then(res => res.json()).then(data => setData(data));
    }
    
    const handleCheckboxChange = (id, containerId) => {
        const container = document.getElementById(containerId);
        
        if (container) {
            if (!fertigeEinblenden) {
                if (container.style.display == "none") {
                    container.style.display = "flex";
                } else {
                    container.style.display = "none";
                }
            }
        }

        setCheckedItems((prev) => {                
            const newState = { ...prev, [id]: !prev[id] };
            localStorage.setItem("checkboxStateMissionen", JSON.stringify(newState));
            return newState;
        });
    };

    const fertigeToggle = () => {
        const checkedItems = document.getElementsByClassName("auftragContainer checked");

        Array.prototype.forEach.call(checkedItems, function(element) {
            if (element.style.display == "none") {
                element.style.display = "flex";
            } else {
                element.style.display = "none";
            }
        });

        setFertigeEinblenden(!fertigeEinblenden);
    }

    const onChapterChange = (e) => {
        setCurrentChapter(e.target.value);
        localStorage.setItem("chapterState", JSON.stringify(e.target.value));
    }

    return(
        <div className="auftraege">
            <div className="auftraegeNav">
                <button className="item" onClick={fertigeToggle}>{fertigeEinblenden ? "Fertige ausblenden" : "Fertige einblenden"}</button>
                <select className="item" name="chapters" id="chapters" onChange={(e) => onChapterChange(e)} value={currentChapter}>
                    <option value="1">Prolog</option>
                    <option value="2">Kapitel 1</option>
                    <option value="3">Kapitel 2</option>
                    <option value="4">Kapitel 3</option>
                    <option value="5">Kapitel 4</option>
                    <option value="6">Kapitel 5</option>
                    <option value="7">Kapitel 6</option>
                    <option value="8">Kapitel 7</option>
                    <option value="9">Kapitel 8</option>
                </select>
            </div>
            <div className="auftraegeContainer">
                {data.map((chapter, index) => (
                    chapter.chapter == currentChapter &&
                        chapter.items.map((auftrag, index) => (
                            <Auftrag
                                key={`auftraege-chapter-${chapter.chapter}-${index}`}
                                id={`auftraege-chapter-${chapter.chapter}-${index}`}
                                containerId={`auftraege-chapter-${chapter.chapter}-container-${index}`}
                                titel={auftrag.titel}
                                ort={auftrag.ort}
                                verfuegbar={auftrag.verfuegbar}
                                loesung={auftrag.loesung}
                                belohnung={auftrag.belohnung}
                                checked={checkedItems[`auftraege-chapter-${chapter.chapter}-${index}`] || false}
                                onChange={() => handleCheckboxChange(`auftraege-chapter-${chapter.chapter}-${index}`, `auftraege-chapter-${chapter.chapter}-container-${index}`)}
                            />
                        ))
                ))}
            </div>
        </div>
    )
}