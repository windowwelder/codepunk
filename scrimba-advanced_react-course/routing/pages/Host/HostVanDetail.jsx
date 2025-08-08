import React from "react"
import {useParams} from "react-router-dom"

export default function HostVanDetail() {

    const params = useParams();
    const [van,setVan] = React.useState([])
    
    React.useEffect(
        fetch(`/api/host/vans/${params.id}`).then( res => res.json() ).then(
            data => setVan(data.van)
        )
    ,[])
    
    return (
        <div className="van-host-container">
            <h1>{van.name}</h1>
            <img src={van.imageUrl} />
            <p>{van.price}</p>
            <p>{van.type}</p>
        </div>        
        )
}
