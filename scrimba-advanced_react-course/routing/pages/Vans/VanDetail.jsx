import React from "react"
import { Link, useParams, useLocation, useSearchParams } from "react-router-dom"
import { getVans } from "../../api"

export default function VanDetail() {
    const params = useParams()
    const location = useLocation()
    const [loading, setLoading] = React.useState(false)
    
    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans(id)
                setVan(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [id])

    const [van, setVan] = React.useState(null)

    const search = location.state?.search || ""

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="van-detail-container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {search.replace("?type=","")} vans</span></Link>
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