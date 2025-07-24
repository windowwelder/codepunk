import React from "react"
import { IoPersonSharp } from "react-icons/io5"

export default function Avatar( { src, alt, children, ...rest } ) {
    let isAvatar = false;
    let isAvatarLetters = false;
    let isAvatarIcon = false;
    const whichClass = () => {
        if (src && alt) {
            isAvatar = true;
            return "avatar"
        }
        else if (children) {
            isAvatarLetters = true;
            return "avatar avatar-letters"
        }
        else {
            isAvatarIcon = true;
            return "avatar avatar-icon"
        }
    }
    return (
        <>
        { isAvatar &&
            <div className={whichClass()} {...rest}>
                <img src={src} alt={alt}/>
            </div>}
        { isAvatarLetters && 
            <div className={whichClass()}>{children}</div>
        }
        { isAvatarIcon &&
            <div className={whichClass()}>
                <IoPersonSharp />
            </div>
        }
        </>
    )
}