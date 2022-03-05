import React, {useState, createContext} from 'react'
import './app.scss'
import Player from './components/Player'
import data from './data'

export const currentSongContext = createContext()

function App() {
const [songData] = useState(data());
const [currentSong, setCurrentSong] = useState(songData[0])

  return (
    <>
    <currentSongContext.Provider value={currentSong}>
      <Player  songData={songData} setCurrentSong={setCurrentSong} />
      </currentSongContext.Provider>
    </>
  )
}

export default App
