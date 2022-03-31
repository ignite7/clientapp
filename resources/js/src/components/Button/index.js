// React
import React from "react";

// Styles
import "./styles.css";

function Button({
    type = "button",
    name,
    action = null,
    disabled = false,
    children,
}) {
    return (
        <button
            type={type}
            className="button"
            disabled={disabled}
            onClick={action}
        >
            {name ?? children}
        </button>
    );
}

export default Button;
