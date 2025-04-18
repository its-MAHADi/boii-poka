import React from 'react'
import { createBrowserRouter} from "react-router";
import root from '../pages/Root/root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';

export const router = createBrowserRouter([
    {
      path: "/",
      Component:root,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            index: true,
            path:"/",
            Component:Home
        }
      ]
    },
  ]);
