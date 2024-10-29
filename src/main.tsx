import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage.tsx";
import EnterCode from "./routes/EnterCode.tsx";
import Room from "./routes/Room.tsx";
import Home from "./routes/Home.tsx";

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
                path: "/entercode",
                element: <EnterCode />
            },
            {
                path: "/room",
                element: <Room />
            }
        ]
    },
    {
        path: "/entercode",
        element: <EnterCode/>,
    },
    {
        path: "/room",
        element: <Room/>,
    },
    ]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
