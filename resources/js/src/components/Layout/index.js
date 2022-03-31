// React
import React from "react";

// Styles

// Components

function Layout({ children }) {
    return (
        <>
            <header className="header"></header>
            <main className="main">{children}</main>
        </>
    );
}

export default Layout;
