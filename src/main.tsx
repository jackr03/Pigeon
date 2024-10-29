import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.tsx';
import ErrorPage from "./routes/ErrorPage.tsx";
import Home from "./routes/Home.tsx";
import Room from "./routes/Room.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/room",
                element: <Room />
            }
        ]
    },
    {
        path: "/room",
        element: <Room />,
    },
    ]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
