import React, {useState, useContext, useRef} from 'react'
import SongInfo from './SongInfo'
import {currentSongContext} from '../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons'


function Player({songData, setCurrentSong}) {
  const currentSong = useContext(currentSongContext)
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [timeControlInfo, setTimeControlInfo] = useState({
    currentTime: 0,
    duration: 0
  })



// prevSong skip
  const handlePrevSong = () => {
    currentSong.active = false
   let currentIndex = songData.findIndex((song) => song.id === currentSong.id)
   const prevSong = songData[(songData.length - (currentIndex - 1)) % songData.length]
    setCurrentSong(() => prevSong)
    if(isPlaying){
      const playPromise = audioRef.current.play();
      if(playPromise !== undefined){
        playPromise.then(() => {
          audioRef.current.play()
        })   
      }
    } 
    currentSong.active = true 
    audioRef.current.play()
  }


// nextSong skip
const handleNextSong = () => {
  currentSong.active = false
  let currentIndex = songData.findIndex((song) => song.id === currentSong.id)
  const nextSong = songData[(songData.length - (currentIndex - 1)) % songData.length]
  setCurrentSong(nextSong)
  if(isPlaying){
    const playPromise = audioRef.current.play();
    if(playPromise !== undefined){
      playPromise.then(() => {
        audioRef.current.play()
      })
    }
  }
  currentSong.active = true
  audioRef.current.play()
}



// update for song length and duration
const timeUpdateHandler = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration
  setTimeControlInfo({...timeControlInfo,currentTime: current, duration: duration})
}


// format time to show on player 
const formatTime  = (time) => {
return (
  Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
)
}

// draggable range input
const dragHandler = (e) => {
  audioRef.current.currentTime = e.target.value
setTimeControlInfo({...timeControlInfo, currentTime: e.target.value})
}


const playSongHandler = () => {
  setIsPlaying(() => {
    if(isPlaying){
      audioRef.current.pause()
      return !isPlaying
    } else
    audioRef.current.play()
    return !isPlaying
  })
}



  return (
    <section className='music-player'>
      <SongInfo />
      <div className='time-control'>
      <p>{formatTime(timeControlInfo.currentTime)}</p>
      <input onChange={dragHandler} min={0} max={timeControlInfo.duration || 0} value={timeControlInfo.currentTime} type='range' />
      <p>{formatTime(timeControlInfo.duration)}</p>

      </div>
      <div className='music-controls'>
      <FontAwesomeIcon onClick={handlePrevSong} size='2x' icon={faStepBackward}/>
      <FontAwesomeIcon onClick ={playSongHandler} size='2x' icon={isPlaying ? faPause : faPlay}/>
      <FontAwesomeIcon onClick={handleNextSong} size='2x' icon={faStepForward}/>

      </div>
       <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
    </section>
  )
}

export default Player