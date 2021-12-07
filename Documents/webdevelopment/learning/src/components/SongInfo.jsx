import React, {useContext} from 'react'
import { currentSongContext } from '../App'

function SongInfo() {
  const currentSong = useContext(currentSongContext)
  return (
    <div className='song-info'>
    <img src={currentSong.cover} alt='album cover'/>
     <h3>{currentSong.name}</h3>
    <h3>{currentSong.artist}</h3>
    <h2>{currentSong.album}</h2>    
    </div>
  )
}

export default SongInfo

