import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "../pages/home/Home";
import AddEvent from "../pages/createEvents/addEvent";

const router=createBrowserRouter([
    {
        path:"/",
        element:<Home />
    },
    {
        path:"addevent",
        element:<AddEvent />
    },
    
])


export default function Routing(params) {
    return <RouterProvider router={router} />
}