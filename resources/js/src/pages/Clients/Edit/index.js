// React
import React from "react";
import { useForm } from "@inertiajs/inertia-react";

// Components
import Layout from "@components/Layout";
import Button from "@components/Button";
import Form from "../Form";
import FormFooter from "../Form/Footer";

// Styles
import "@assets/styles/form.css";

function Edit({ client }) {
    const { data, setData, post, processing, cancel, errors, reset } =
        useForm(client);

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("clients.update", { client: client.id, _method: "put" }), {
            onSuccess: () => reset(),
            onError: () => cancel(),
        });
    };

    return (
        <form className="page-clients-edit form" onSubmit={handleSubmit}>
            <h1 className="page-clients-edit__title form__title">
                Edit Client
            </h1>
            <Form
                data={data}
                setData={setData}
                errors={errors}
                required={false}
            />
            <Button type="submit" name="UPDATE CLIENT" disabled={processing} />
            <FormFooter />
        </form>
    );
}

Edit.layout = (page) => <Layout children={page} />;

export default Edit;
