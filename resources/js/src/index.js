// React
import React, { Suspense } from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";

// Styles
import "./assets/styles/base.css";

// DOM
createInertiaApp({
    resolve: (name) => require(`./pages/${name}`),
    setup({ el, App, props }) {
        render(<App {...props} />, el);
    },
    title: (title) => `${title} - Client List`,
});

// Progress indicator
InertiaProgress.init();
