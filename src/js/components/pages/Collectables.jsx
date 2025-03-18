import React, { useState, useEffect } from "react";
import { Collectable } from "../general/Collectable";
import "../../../sass/components/pages/collectables.scss";

export const Collectables = () => {
    const [checkedItems, setCheckedItems] = useState({});
    const [gesammelteEinblenden, setGesammelteEinblenden] = useState(true);
    const [currentChapter, setCurrentChapter] = useState(0);
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const checkboxStates = JSON.parse(localStorage.getItem("checkboxStateCollectables")) || {};
        setCheckedItems(checkboxStates);

        const currentChapterState = JSON.parse(localStorage.getItem("chapterState")) || 1;
        setCurrentChapter(currentChapterState);

        getData();
    }, []);

    const getData = async () => {
        await fetch(`${process.env.REACT_APP_PUBLIC_URL}/data/collectables.json`).then(res => res.json()).then(data => setData(data));
    }
    
    const handleCheckboxChange = (id, containerId) => {
        const container = document.getElementById(containerId);
        
        if (container) {
            if (!gesammelteEinblenden) {
                if (container.style.display == "none") {
                    container.style.display = "flex";
                } else {
                    container.style.display = "none";
                }
            }
        }

        setCheckedItems((prev) => {                
            const newState = { ...prev, [id]: !prev[id] };
            localStorage.setItem("checkboxStateCollectables", JSON.stringify(newState));
            return newState;
        });
    };

    const gesammelteToggle = () => {
        const checkedItems = document.getElementsByClassName("collectableContainer checked");

        Array.prototype.forEach.call(checkedItems, function(element) {
            if (element.style.display == "none") {
                element.style.display = "flex";
            } else {
                element.style.display = "none";
            }
        });

        setGesammelteEinblenden(!gesammelteEinblenden);
    }

    const onChapterChange = (e) => {
        setCurrentChapter(e.target.value);
        localStorage.setItem("chapterState", JSON.stringify(e.target.value));
    }

    return(
        <div className="collectables">
            <div className="collectablesNav">
                <button className="item" onClick={gesammelteToggle}>{gesammelteEinblenden ? "Gesammelte ausblenden" : "Gesammelte einblenden"}</button>
                <select className="item" name="chapters" id="chapters" onChange={(e) => onChapterChange(e)} value={currentChapter}>
                    <option value="1">Prolog</option>
                    <option value="2">Kapitel 1</option>
                    <option value="3">Kapitel 2</option>
                    <option value="4">Kapitel 3</option>
                    <option value="5">Kapitel 4</option>
                    <option value="6">Kapitel 5</option>
                    <option value="7">Kapitel 6</option>
                    <option value="8">Kapitel 7</option>
                </select>
            </div>
            <div className="collectablesContainer">
                {data.map((chapter, index) => (
                    chapter.chapter == currentChapter &&
                        chapter.items.map((collectable, index) => (
                            <Collectable
                                key={`collectables-chapter-${chapter.chapter}-${index}`}
                                id={`collectables-chapter-${chapter.chapter}-${index}`}
                                containerId={`collectables-chapter-${chapter.chapter}-container-${index}`}
                                ort={collectable.ort}
                                typ={collectable.typ}
                                beschreibung={collectable.beschreibung}
                                checked={checkedItems[`collectables-chapter-${chapter.chapter}-${index}`] || false}
                                onChange={() => handleCheckboxChange(`collectables-chapter-${chapter.chapter}-${index}`, `collectables-chapter-${chapter.chapter}-container-${index}`)}
                            />
                        ))
                ))}
            </div>
        </div>
    )
}