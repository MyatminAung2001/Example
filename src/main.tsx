import React from "react";
import ReactDOM from "react-dom/client";

import Layout from "./components/layout/index.tsx";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Layout>
            <App />
        </Layout>
    </React.StrictMode>
);
