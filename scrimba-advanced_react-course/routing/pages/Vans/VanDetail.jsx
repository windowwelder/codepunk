import React from "react"
import { Link, useParams, useLocation, useSearchParams } from "react-router-dom"

export default function VanDetail() {
    const params = useParams()
    const location = useLocation()
   
    const [van, setVan] = React.useState(null)
    const [searchParams,setSearchParams] = useSearchParams()

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data))
    }, [params.id])

    return (
        <div className="van-detail-container">
            <Link
                to={location.search ? `..?${searchParams}` : ".."}
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}