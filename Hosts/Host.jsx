import React from "react";
import Reviews from './Reviews';
import Income from './Income';
import Dashboard from "./DashBoard";


export default function Host (){
    return (
        <>
        <Dashboard />
        <Income />
        <Reviews />
        </>
    )
}