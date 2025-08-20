import React from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function Vans() {
    const [ vans, setVans ] = React.useState(null);
    
    React.useEffect(
        () => {
            fetch("/api/vans").then( res => res.json() ).then( data => setVans(data.vans) )
            }, []
    )

    const [searchParams, setSearchParams] = useSearchParams()
    
    const typeFilter = searchParams.get("type")
    
    console.log(typeFilter)

    const vanElements = typeFilter ? vans.filter( van => van.type === typeFilter ) : vans;
    
    const displayedVanElements = vanElements.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
                <button
                    onClick={() => handleFilterChange("type", "simple")}
                    className="van-type simple"
                >Simple</button>
                <button
                    onClick={() => handleFilterChange("type", "luxury")}
                    className="van-type luxury"
                >Luxury</button>
                <button
                    onClick={() => handleFilterChange("type", "rugged")}
                    className="van-type rugged"
                >Rugged</button>
                <button
                    onClick={() => handleFilterChange("type", null)}
                    className="van-type clear-filters"
                >Clear filter</button>
        </div>
        
    )
}