import React from "react"
import Header from "./components/header.js"
import Albums from "./components/albums.js"
import './index.css';
import Mahal from "./Mahal.jpg"

const Data = [
  {
      id: 1,
      album_cover: {Mahal} ,
      album_title: "Mahal",
      album_artist: "Toro y Moi",
      album_label: "Dead Ocean",
      album_link: "https://toroymoi.bandcamp.com/album/mahal"
  },
  {
      id: 2,
      album_cover: {Mahal} ,
      album_title: "Step by Step EP",
      album_artist: "Braxe + Falcon",
      album_label: "Smuggler's Way",
      album_link: "https://toroymoi.bandcamp.com/album/mahal"
  },
  {
      id: 3,
      album_cover: {Mahal} ,
      album_title: "Expanding Horizons",
      album_artist: "Local Artist",
      album_label: "Mood Hut",
      album_link: "https://toroymoi.bandcamp.com/album/mahal"
  }
]

function App() {
  const TopAlbum = Data.map(album => {
    return (
      <Albums 
      id={album.id}
      items={album}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      {TopAlbum}
    </div>
  );
}

export default App;
