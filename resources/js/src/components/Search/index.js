// React
import React from "react";
import { useForm, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

// Components
import Button from "@components/Button";

// Styles
import "./styles.css";

function Search(only) {
    const { props } = usePage();
    const { data, setData } = useForm({
        q: props.q ?? "",
    });

    const handleSearch = (e) => {
        setData("q", e.target.value);

        Inertia.reload({
            only,
            data: { q: e.target.value.toLowerCase() },
            preserveState: true,
            replace: true,
        });
    };

    return (
        <form className="search" onSubmit={(e) => e.preventDefault()}>
            <input
                type="search"
                value={data.q}
                className="search__input"
                onChange={(e) => handleSearch(e)}
            />
            <Button type="submit" name="Search" />
        </form>
    );
}

export default Search;
