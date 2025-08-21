import React from "react"
import { Link, useSearchParams } from "react-router-dom"
import { getVans } from "../../api"

export default function Vans() {
    const [ vans, setVans ] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null)
    
    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans()
                setVans(data)
                
            } catch(err) {
                console.log("")
                console.log(err)
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        
        loadVans()
    }, [])

    const [searchParams, setSearchParams] = useSearchParams()
    
    const typeFilter = searchParams.get("type")
    
    console.log(typeFilter)

    const vanElements = typeFilter ? vans.filter( van => van.type === typeFilter ) : vans;
    
    const displayedVanElements = vanElements.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={van.id}>
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

    if (loading) {
        return <h1 aria-live="polite">Loading...</h1>
    }

    if (error) {
        return <h1 aria-live="assertive">There was an error: {error.message}</h1>
    }

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
                <button
                    onClick={() => handleFilterChange("type", "simple")}
                    className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}
                >Simple</button>
                <button
                    onClick={() => handleFilterChange("type", "luxury")}
                    className={`van-type luxury simple ${typeFilter === "luxury" ? "selected" : ""}`}
                >Luxury</button>
                <button
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}
                >Rugged</button>
                {typeFilter ? <button
                    onClick={() => handleFilterChange("type", null)}
                    className="van-type clear-filters"
                >Clear filter</button> 
                : null}
            <div className="van-list">
                {vanElements}
            </div>
        </div>
        
    )
}