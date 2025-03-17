import React, { useState, useEffect, use } from "react";
import "../../../sass/components/general/menu.scss"

export const Menu = ({ onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("Home");

    useEffect(() => {
        const savedState = JSON.parse(localStorage.getItem("lastPage"));
        
        if (savedState != null) {
            setActiveItem(savedState);
            const newBackgroundColor = menuItems.find((item) => item.name == savedState).backgroundColor;
            document.getElementsByClassName("holder")[0].style.backgroundColor = newBackgroundColor;
        }
    }, []);


    const menuItems = [
        {
            name: "Home",
            color: "#d25942",
            backgroundColor: "rgba(210, 89, 66, .9)"
        },
        {
            name: "Collectables",
            color: "#e8abc9",
            backgroundColor: "rgba(232, 171, 201, .9)"
        },
        {
            name: "Einkaufsliste",
            color: "#e3b850",
            backgroundColor: "rgba(227, 184, 80, .9)"
        },
        {
            name: "Rezepte",
            color: "#47c151",
            backgroundColor: "rgba(71, 193, 81, .9)"
        },
        {
            name: "Orden",
            color: "#77a4dd",
            backgroundColor: "rgba(119, 164, 221, .9)"
        },
        {
            name: "Arena",
            color: "#d25942",
            backgroundColor: "rgba(210, 89, 66, .9)"
        },
        {
            name: "Lexikon",
            color: "#e8abc9",
            backgroundColor: "rgba(232, 171, 201, .9)"
        },
        {
            name: "Items",
            color: "#e3b850",
            backgroundColor: "rgba(227, 184, 80, .9)"
        },
        {
            name: "Aufträge",
            color: "#47c151",
            backgroundColor: "rgba(71, 193, 81, .9)"
        },
        {
            name: "Shops",
            color: "#77a4dd",
            backgroundColor: "rgba(119, 164, 221, .9)"
        },
        {
            name: "Duellkerker",
            color: "#d25942",
            backgroundColor: "rgba(210, 89, 66, .9)"
        }
    ];

    return (
        <nav className="menu">
            {/* Burger Button */}
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="burgerMenu">
                ☰ Menü
            </button>

            {/* Menü-Einträge */}
            <div className={`${isOpen ? "open" : ""} itemMenu`}>
                {menuItems.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => {
                            setActiveItem(item.name);
                            onSelect(item.name);
                            setIsOpen(false);
                            localStorage.setItem("lastPage", JSON.stringify(item.name));

                            document.getElementsByClassName("holder")[0].style.backgroundColor = item.backgroundColor;
                        }}
                        className={`item ${ activeItem == item.name ? "active": ""}`}
                        style={{ backgroundColor: item.color }}
                    >
                        {item.name}
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default Menu;
