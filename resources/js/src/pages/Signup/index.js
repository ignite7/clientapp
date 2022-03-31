// React
import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/inertia-react";

// Components
import Layout from "@components/Layout";
import Input from "@components/Form/Input";
import Button from "@components/Button";

// Styles
import "./styles.css";

function Signup() {
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

        post(route("signup.store"), {
            onSuccess: () => reset(),
            onError: () => cancel(),
        });
    };

    return (
        <form className="page-signup" onSubmit={handleSubmit}>
            <h1 className="page-signup__title">Create your account</h1>
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
            <Button type="submit" name="CREATE ACCOUNT" disabled={processing} />
            <div className="page-signup__login">
                <p className="page-signup__login-text">
                    Already have an account?
                </p>
                <p
                    className="page-signup__login-link"
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
