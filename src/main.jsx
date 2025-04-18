import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//react router
import { createBrowserRouter,RouterProvider,} from "react-router";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello Worldffff</div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
