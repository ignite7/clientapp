// React
import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

// Components
import Layout from "@components/Layout";
import Button from "@components/Button";
import Search from "@components/Search";
import Card from "@components/Card";
import Pagination from "@components/Pagination";

// Styles
import "./styles.css";

function Clients({ clients }) {
    const { name } = usePage().props;

    return (
        <div className="page-clients">
            <h1 className="page-clients__title">Client List</h1>
            <p className="page-clients__welcome">
                Hello, {name} welcome to your admin account.
            </p>
            <div className="page-clients__container">
                <div className="page-clients__container-button">
                    <Button
                        name="Create Client"
                        action={() => Inertia.get(route("clients.create"))}
                    />
                </div>
                <div className="page-clients__container-search">
                    <Search only={["q"]} />
                </div>
            </div>
            {clients.data.length > 0 ? (
                clients.data.map((client) => (
                    <Card key={`client-id-${client.id}`} client={client} />
                ))
            ) : (
                <h1 className="page-clients__nodata">No Clients</h1>
            )}
            {clients.meta.total > 5 && (
                <div className="page-client__pagination">
                    <Pagination pagination={clients} />
                </div>
            )}
        </div>
    );
}

Clients.layout = (page) => <Layout children={page} />;

export default Clients;
