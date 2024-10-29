import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

// Navbar component
import Home from '../pages/home/home';

export const routesConfig = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/canadaups",
        element: <Home />,
    }
];

export const router = createBrowserRouter(routesConfig);