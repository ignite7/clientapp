// React
import React from "react";
import { Inertia } from "@inertiajs/inertia";

// Components
import Button from "@components/Button";

// Styles
import "./styles.css";

function Pagination({ pagination }) {
    const checkLabelName = (label) => {
        if (label.toLowerCase() === "&laquo; previous") {
            return "Previous";
        }

        if (label.toLowerCase() === "next &raquo;") {
            return "Next";
        }

        return label;
    };

    return (
        <ul className="pagination">
            {pagination.meta.links.map((link, idx) => (
                <li key={`link-${idx}`} className="pagination__item">
                    <Button
                        name={checkLabelName(link.label)}
                        action={() => link.url && Inertia.get(link.url)}
                    />
                </li>
            ))}
        </ul>
    );
}

export default Pagination;
