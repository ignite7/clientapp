// React
import React from "react";
import { Inertia } from "@inertiajs/inertia";

// Styles
import "./styles.css";

function Card({ client }) {
    return (
        <div className="card">
            <button
                className="card__delete btn-close"
                onClick={() =>
                    Inertia.delete(route("clients.destroy", client.id))
                }
            ></button>
            <div className="card__picture">
                <figure className="card__picture-figure">
                    <img
                        src={client.picture}
                        className="card__picture-figure-img"
                        alt="picture"
                    />
                </figure>
            </div>
            <div className="card__info">
                <h3 className="card__info-name">{client.name}</h3>
                <p className="card__info-email">{client.email}</p>
                <p
                    className="card__info-edit"
                    onClick={() =>
                        Inertia.get(route("clients.edit", client.id))
                    }
                >
                    Edit Client
                </p>
            </div>
        </div>
    );
}

export default Card;
