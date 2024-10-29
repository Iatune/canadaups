// import React from 'react';
// import { createBrowserRouter } from 'react-router-dom';

// // Navbar component
// import Home from '../pages/home/home';

// export const routesConfig = [
//     {
//         path: "/",
//         element: <Home />,
//     },
//     {
//         path: "/canadaups",
//         element: <Home />,
//     }
// ];

// export const router = createBrowserRouter(routesConfig);

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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

export const router = createBrowserRouter(routesConfig, {
    basename: "/canadaups",
});
