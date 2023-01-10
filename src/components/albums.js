import React from "react"


export default function Albums(props) {
    console.log(props.items.album_cover.value)
    return (
        <div className="album-container">
            <img src={props.items.album_cover.value} className="album-cover" alt="cover of the Mahal album" />
            <h3 className="artist">{props.items.album_artist}</h3>
            <h3 className="album">{props.items.album_title}</h3>
            <p className="album-label">{props.items.album_label}</p>
            <a className="album-link" href={props.items.album_link}>{props.items.album_link}</a>
        </div>
    )
}