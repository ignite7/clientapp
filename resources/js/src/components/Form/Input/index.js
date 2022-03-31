// React
import React from "react";

// Styles
import "./styles.css";

function Input({
    type = "text",
    placeholder,
    value,
    onChange,
    error,
    required = false,
}) {
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                className="input-text"
                value={value}
                onChange={onChange}
                required={required}
            />
            {error && <p className="input-error">{error}</p>}
        </>
    );
}

export default Input;
