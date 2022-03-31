// React
import React from "react";

// Components
import Input from "@components/Form/Input";

function Form({ data, setData, errors, required }) {
    return (
        <>
            <Input
                type="text"
                placeholder="First name"
                value={data.first_name}
                onChange={(e) => setData("first_name", e.target.value)}
                error={errors.first_name}
                required={required}
            />
            <Input
                type="text"
                placeholder="Last name"
                value={data.last_name}
                onChange={(e) => setData("last_name", e.target.value)}
                error={errors.last_name}
                required={required}
            />
            <Input
                type="email"
                placeholder="Email address"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
                error={errors.email}
                required={required}
            />
            <Input
                type="file"
                placeholder="Picture"
                onChange={(e) => setData("picture", e.target.files[0])}
                error={errors.picture}
                required={required}
            />
        </>
    );
}

export default Form;
