// React
import React from "react";

// Components
import Message from "@components/Message/";

// Styles
import "./styles.css";

function Layout({ children }) {
    return (
        <main className="main">
            <Message />
            {children}
        </main>
    );
}

export default Layout;
