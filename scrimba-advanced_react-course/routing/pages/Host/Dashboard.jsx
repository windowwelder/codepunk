import React from "react"
import { Outlet } from "react-router-dom"

export default function Dashboard() {
    return(
        <>
            <h1>Here is Dashboard</h1>
            <Outlet />
        </>
    )
}