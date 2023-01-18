import React from "react"
import Header from "./components/header.js"
import Albums from "./components/albums.js"
import './index.css';
import {Data} from "./data.js"

function App() {
  const TopAlbum = Data.map(album => {
    return (
      <Albums 
      key={album.id}
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
