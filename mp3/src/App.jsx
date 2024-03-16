import React, { useState, useRef } from "react";
import TimeSlider from "react-input-slider";

import "./App.scss";
import PrevIcon from "./icons/PrevIcon";
import NextIcon from "./icons/NextIcon";
import PauseIcon from "./icons/PauseIcon";
import PlayIcon from "./icons/PlayIcon";
import audios from "./audios";

const App = () => {
  const audioRef = useRef();
  const [audioIndex, setAudioIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);
  const [content, setContent] = useState(false);

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
    if (isPlay) audioRef.current.play();
  };

  const handlePausePlayClick = () => {
    if (isPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlay(!isPlay);
  };

  const handleTimeSliderChange = ({ x }) => {
    audioRef.current.currentTime = x;
    setCurrentTime(x);

    if (!isPlay) {
      setPlay(true);
      audioRef.current.play();
    }
  };

  const handleRandomClick = () => {
    let random = Math.floor(Math.random() * audios.length - 1) + 1;
    setAudioIndex(
       random
    )
  }

  return (
    <div className="App">
      <img className={`Song-Thumbnail ${isPlay && 'animationRound'}`} src={audios[audioIndex].thumb} alt={audios[audioIndex].title} />
      <h2 className="Song-Title">{audios[audioIndex].title}</h2>
      <p className="Singer">{audios[audioIndex].artist}</p>
      <div className="Control-Button-Group">
        <div
          className="Prev-Button"
          onClick={() => setAudioIndex((audioIndex - 1) % audios.length)}
        >
          <PrevIcon />
        </div>
        <div className="Pause-Play-Button" onClick={handlePausePlayClick}>
          {isPlay ? <PauseIcon /> : <PlayIcon />}
        </div>
        <div
          className="Next-Button"
          onClick={() => setAudioIndex((audioIndex + 1) % audios.length)}
        >
          <NextIcon />
        </div>
      </div>
      <TimeSlider
        axis="x"
        xmax={duration}
        x={currentTime}
        onChange={handleTimeSliderChange}
        styles={{
          track: {
            backgroundColor: "#e3e3e3",
            height: "2px",
          },
          active: {
            backgroundColor: "#333",
            height: "2px",
          },
          thumb: {
            marginTop: "-3px",
            width: "8px",
            height: "8px",
            backgroundColor: "#333",
            borderRadius: 0,
          },
        }}
      />
      <audio
        loop
        ref={audioRef}
        src={audios[audioIndex].src}
        onLoadedData={handleLoadedData}
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
        onEnded={() => setPlay(false)}
      />

      <div className="content">
        <button className={content && 'active'} onClick={handleRandomClick}>Nghe gì?</button>
        {
          audios[audioIndex].lyrics.length > 0 && (
            <>
              <button className={content && 'active'} onClick={() => setContent(!content)}>Xem lời</button>
              {content && <div className="lyrics">{audios[audioIndex].lyrics.map((item) => <p>{item}</p>)}</div>}
            </>
          )
        }
      </div>


    </div>
  );
};

export default App;