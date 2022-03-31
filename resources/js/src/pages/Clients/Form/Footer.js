// React
import React from "react";
import { Inertia } from "@inertiajs/inertia";

function Footer() {
    return (
        <div className="form__footer">
            <p className="form__footer-text">Client List</p>
            <p
                className="form__footer-link"
                onClick={() => Inertia.get(route("clients.index"))}
            >
                Go back.
            </p>
        </div>
    );
}

export default Footer;
