import React from "react"
import { sleep } from "./utils"

export default function Product({ product }) {
    sleep(1)
    return (
        <div className="product-card">
            <p className="truncate">{product.name}</p>
        </div>
    )
}