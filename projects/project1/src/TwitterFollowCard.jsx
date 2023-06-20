import { useState } from "react";

export function TwitterFollowCard({formatUsername, username="unknown", children}){
    const [isFollowing, setIsFollowing]=useState(false);
    const text=isFollowing ? "Siguiendo" : "Seguir";
    const buttonClassname=isFollowing ? "tw-followCard-button is-following"
    : "tw-followCard-button"
    const handleClick=()=>{
        setIsFollowing(!isFollowing);
    }
    return(
        <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img 
            className="tw-followCard-avatar"
            src={`https://unavatar.io/${username}`}
            alt="Avatar del usuario" 
            />
            <div className="tw-followCard-info">
                <strong>{children}</strong>
                <p>{formatUsername(username)}</p>
            </div>
        </header>
        <aside>
            <button className={buttonClassname} onClick={handleClick}>{text}</button>
        </aside>
    </article>
    )
}