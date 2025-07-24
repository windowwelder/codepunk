import React from "react"
import Toggle from "./Toggle/index"
import { BsStar, BsStarFill } from "react-icons/bs"
import useToggle from "../hooks/useToggle"

export default function Star( { onChange } ) {
    const [on, toggle] = useToggle(false)
    return (
        <div onClick={toggle}>
            { on ?
                <BsStarFill className="star filled" /> :
                    <BsStar className="star" />
            }
        </div>
    )
}