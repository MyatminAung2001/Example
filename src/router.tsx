import { createBrowserRouter } from "react-router-dom";

// components
import AppLayout from "./components/AppLayout";

// pages
import Home from "./pages/Home";
import Page from "./pages/Page";
import Popular from "./pages/Popular";
import Details from "./pages/Details";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/page", element: <Page /> },
            { path: "/popular", element: <Popular /> },
            { path: "/detail/:movieId", element: <Details /> },
        ],
    },
]);

export default router;
