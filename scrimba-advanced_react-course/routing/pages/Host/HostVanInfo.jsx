import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {
    const [data,setData] = useOutletContext();
    
    return (
        <h2>{data.name}</h2>
        
    )
}