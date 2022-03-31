// React
import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/inertia-react";

// Components
import Layout from "@components/Layout";
import Input from "@components/Form/Input";
import Button from "@components/Button";

// Recaptcha
import Recaptcha from "react-recaptcha";

// Styles
import "@assets/styles/form.css";

function Signup() {
    const [recaptcha, setRecaptcha] = useState(false);
    const { data, setData, post, processing, cancel, errors, reset } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        email_confirmation: "",
        password: "",
        password_confirmation: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (recaptcha) {
            post(route("signup.store"), {
                onSuccess: () => reset(),
                onError: () => cancel(),
            });
        }
    };

    return (
        <form className="page-signup form" onSubmit={handleSubmit}>
            <h1 className="page-signup__title form__title">
                Create your account
            </h1>
            <Input
                type="text"
                placeholder="First name"
                value={data.first_name}
                onChange={(e) => setData("first_name", e.target.value)}
                error={errors.first_name}
                required
            />
            <Input
                type="text"
                placeholder="Last name"
                value={data.last_name}
                onChange={(e) => setData("last_name", e.target.value)}
                error={errors.last_name}
                required
            />
            <Input
                type="email"
                placeholder="Email address"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
                error={errors.email}
                required
            />
            <Input
                type="email"
                placeholder="Confirm email address"
                value={data.email_confirmation}
                onChange={(e) => setData("email_confirmation", e.target.value)}
                error={errors.email_confirmation}
                required
            />
            <Input
                type="password"
                placeholder="Password"
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
                error={errors.password}
                required
            />
            <Input
                type="password"
                placeholder="Repeat you password"
                value={data.password_confirmation}
                onChange={(e) =>
                    setData("password_confirmation", e.target.value)
                }
                error={errors.password_confirmation}
                required
            />
            <Recaptcha
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                render="explicit"
                onloadCallback={() =>
                    console.log("Recaptcha successfully loaded.")
                }
                verifyCallback={(response) => response && setRecaptcha(true)}
            />
            {!recaptcha && <p className="input-error">Recaptcha required.</p>}
            <Button type="submit" name="CREATE ACCOUNT" disabled={processing} />
            <div className="form__footer">
                <p className="form__footer-text">Already have an account?</p>
                <p
                    className="form__footer-link"
                    onClick={() => Inertia.get(route("login"))}
                >
                    Login here.
                </p>
            </div>
        </form>
    );
}

Signup.layout = (page) => <Layout children={page} />;

export default Signup;
