import React, { useState, useEffect } from "react";
import { Menu } from "./js/components/general/Menu";
import { Home } from "./js/components/pages/Home";
import { Collectables } from "./js/components/pages/Collectables";
import { Arena } from "./js/components/pages/Arena";
import { Einkaufsliste } from "./js/components/pages/Einkaufsliste";
import { Items } from "./js/components/pages/Items";
import { Lexikon } from "./js/components/pages/Lexikon";
import { Duellkerker } from "./js/components/pages/Duellkerker";
import { Missionen } from "./js/components/pages/Missionen";
import { Orden } from "./js/components/pages/Orden";
import { Rezepte } from "./js/components/pages/Rezepte";
import { Shops } from "./js/components/pages/Shops";


const pages = {
    Home: Home,
    Collectables: Collectables,
    Arena: Arena,
    Duellkerker: Duellkerker,
    Einkaufsliste: Einkaufsliste,
    Items: Items,
    Lexikon: Lexikon,
    Missionen: Missionen,
    Orden: Orden,
    Rezepte: Rezepte,
    Shops: Shops
};

function App() {
    const [selectedPage, setSelectedPage] = useState("Home");
    const PageComponent = pages[selectedPage] || Home; // Falls unbekannte Seite, Standard auf Home

    useEffect(() => {
        const savedState = JSON.parse(localStorage.getItem("lastPage"));
        
        if (savedState == null) {
            setSelectedPage("Home");
            localStorage.setItem("lastPage", JSON.stringify("Home"));
        } else {
            setSelectedPage(savedState);
        }
    }, []);

    return (
        <div className="background">
            <Menu onSelect={setSelectedPage} />
            <div className="holder">
                <div className="mainContainer">
                    <PageComponent />
                </div>
            </div>
        </div>
    );
}

export default App;
