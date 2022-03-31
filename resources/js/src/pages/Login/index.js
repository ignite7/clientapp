// React
import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/inertia-react";

// Components
import Layout from "@components/Layout";
import Input from "@components/Form/Input";
import Button from "@components/Button";

// Styles
import "@assets/styles/form.css";

function Login() {
    const { data, setData, post, processing, cancel, errors, reset } = useForm({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onSuccess: () => reset(),
            onError: () => cancel(),
        });
    };

    return (
        <form className="page-login form" onSubmit={handleSubmit}>
            <h1 className="page-login__title form__title">Login</h1>
            <Input
                type="email"
                placeholder="Email address"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
                error={errors.email}
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
            <Button type="submit" name="LOGIN" disabled={processing} />
            <div className="form__footer">
                <p className="form__footer-text">No account yet?</p>
                <p
                    className="form__footer-link"
                    onClick={() => Inertia.get(route("signup.index"))}
                >
                    Create one here.
                </p>
            </div>
        </form>
    );
}

Login.layout = (page) => <Layout children={page} />;

export default Login;
