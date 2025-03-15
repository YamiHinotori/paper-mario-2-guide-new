import React, { useState, useEffect } from "react";

function App() {
    const [isChecked, setIsChecked] = useState(false);

    // Beim Laden der App den gespeicherten Zustand abrufen
    useEffect(() => {
        const savedState = localStorage.getItem("checkboxState") === "true";
        setIsChecked(savedState);
    }, []);

    // Zustand speichern, wenn Checkbox geändert wird
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        localStorage.setItem("checkboxState", !isChecked);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Paper Mario 2 Guide</h1>
            <label>
                <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                Merke mich!
            </label>
        </div>
    );
}

export default App;
