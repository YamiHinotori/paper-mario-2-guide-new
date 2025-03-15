import React, { useState, useEffect } from "react";

const Menu = ({ onSelect }) => {
    const menuItems = [
        "Home", "Collectables", "Einkaufsliste", "Rezepte", "Arena", "Orden", "Lexikon", "Items", "Missionen", "Shops", "Duellkerker"
    ];

    return (
        <nav style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
            gap: "10px",
            flexWrap: "wrap",
            background: "#af2002",
            padding: "10px",
            border: "3px solid black",
            boxShadow: "4px 4px 0px black",
            position: "fixed",
            top: 0,
            left: 0,
            height: "50px"
        }}>
            {menuItems.map((item) => (
                <button
                    key={item}
                    onClick={() => onSelect(item)}
                    style={{
                        background: "white",
                        padding: "8px 12px",
                        borderRadius: "5px",
                        border: "3px solid black",
                        fontWeight: "bold",
                        cursor: "pointer",
                        boxShadow: "2px 2px 0px black",
                        fontFamily: "Nunito"
                    }}
                >
                    {item}
                </button>
            ))}
        </nav>
    );
};

const Checkbox = ({ label, id, checked, onChange }) => {
    return (
        <label
            style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
                background: "white",
                padding: "10px",
                borderRadius: "10px",
                boxShadow: "4px 4px 0px black",
                border: "3px solid black",
                fontWeight: "bold",
                fontFamily: "Nunito",
            }}
        >
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
                style={{ display: "none" }}
            />
            <div
                style={{
                    width: "24px",
                    height: "24px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "white",
                    border: "3px solid black",
                    borderRadius: "5px",
                    fontFamily: "Nunito"
                }}
            >
                {checked && <span style={{ fontSize: "18px", fontWeight: "bold" }}>✔</span>}
            </div>
            {label}
        </label>
    );
};

function App() {
    const [checkedItems, setCheckedItems] = useState({});
    const [selectedPage, setSelectedPage] = useState("Home");

    useEffect(() => {
        const savedState = JSON.parse(localStorage.getItem("checkboxState")) || {};
        setCheckedItems(savedState);
    }, []);

    const handleCheckboxChange = (id) => {
        setCheckedItems((prev) => {
            const newState = { ...prev, [id]: !prev[id] };
            localStorage.setItem("checkboxState", JSON.stringify(newState));
            return newState;
        });
    };

    return (
        <>
            <Menu onSelect={setSelectedPage} />
        
            <div className="holder">
                <div className="mainContainer">
                    <h1
                        style={{
                            fontSize: "32px",
                            fontWeight: "bold",
                            background: "white",
                            padding: "10px 20px",
                            borderRadius: "10px",
                            border: "3px solid black",
                            boxShadow: "4px 4px 0px black",
                            fontFamily: "Nunito",
                            width: "max-content"
                        }}
                    >
                        {selectedPage}
                    </h1>
                    {selectedPage === "Home" && (
                        <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                            {["Erste Aufgabe", "Zweite Aufgabe", "Dritte Aufgabe","Erste Aufgabe", "Zweite Aufgabe", "Dritte Aufgabe", "Erste Aufgabe", "Zweite Aufgabe", "Dritte Aufgabe", "Erste Aufgabe", "Zweite Aufgabe", "Dritte Aufgabe"].map((task, index) => (
                                <Checkbox
                                    key={index}
                                    id={`task-${index}`}
                                    label={task}
                                    checked={checkedItems[`task-${index}`] || false}
                                    onChange={() => handleCheckboxChange(`task-${index}`)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default App;
