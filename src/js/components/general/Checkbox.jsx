import React from "react";
import "../../../sass/components/general/checkbox.scss";

export const Checkbox = ({ label, id, checked, onChange }) => {
    return (
        <label className="checkboxLabel">
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
            />
            <div className="checkboxInput">
                {checked && <span className="checkboxCheckmark">✔</span>}
            </div>
            {label}
        </label>
    );
};