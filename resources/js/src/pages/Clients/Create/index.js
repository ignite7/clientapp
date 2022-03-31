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

function Create() {
    const { data, setData, post, processing, cancel, errors, reset } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        picture: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("clients.store"), {
            onSuccess: () => reset(),
            onError: () => cancel(),
        });
    };

    return (
        <form className="page-clients-create form" onSubmit={handleSubmit}>
            <h1 className="page-clients-create__title form__title">
                New Client
            </h1>
            <Form data={data} setData={setData} errors={errors} required />
            <Button
                type="submit"
                name="CREATE NEW CLIENT"
                disabled={processing}
            />
            <FormFooter />
        </form>
    );
}

Create.layout = (page) => <Layout children={page} />;

export default Create;
