# Tạo dự án music

### Thêm nhạc nền

```jsx
import React, { useState, useRef } from 'react';
import { songs } from './songs'; // Danh sách bài hát
import backgroundMusic from './audio/background.mp3'; // Nhạc nền

function App() {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBgMusicPlaying, setIsBgMusicPlaying] = useState(true); // Trạng thái nhạc nền
  const bgAudioRef = useRef(null); // Tham chiếu đến nhạc nền

  const handlePlayPause = () => {
    const audio = document.getElementById('audio-player');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const currentIndex = songs.indexOf(currentSong);
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentSong(songs[nextIndex]);
  };

  const toggleBackgroundMusic = () => {
    if (isBgMusicPlaying) {
      bgAudioRef.current.pause();
    } else {
      bgAudioRef.current.play();
    }
    setIsBgMusicPlaying(!isBgMusicPlaying);
  };

  return (
    <div className="App">
      {/* Nhạc nền */}
      <audio ref={bgAudioRef} src={backgroundMusic} autoPlay loop hidden />
      
      <h1>Music Player</h1>
      <div className="player">
        <img src={currentSong.cover} alt={currentSong.title} />
        <h3>{currentSong.title}</h3>
        <p>{currentSong.artist}</p>
        <audio id="audio-player" src={currentSong.src}></audio>
        <div className="controls">
          <button onClick={handlePlayPause}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
      
      {/* Nút bật/tắt nhạc nền */}
      <div className="background-music-control">
        <button onClick={toggleBackgroundMusic}>
          {isBgMusicPlaying ? "Tắt nhạc nền" : "Bật nhạc nền"}
        </button>
      </div>
    </div>
  );
}

export default App;
```

### Thêm nút điều chỉnh volum nhạc nền

```jsx
import React, { useState, useRef } from 'react';
import { songs } from './songs'; // Danh sách bài hát
import backgroundMusic from './audio/background.mp3'; // Nhạc nền

function App() {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBgMusicPlaying, setIsBgMusicPlaying] = useState(true); // Trạng thái nhạc nền
  const [bgVolume, setBgVolume] = useState(0.5); // Trạng thái âm lượng nhạc nền (mặc định: 50%)
  const bgAudioRef = useRef(null); // Tham chiếu đến nhạc nền

  const handlePlayPause = () => {
    const audio = document.getElementById('audio-player');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const currentIndex = songs.indexOf(currentSong);
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentSong(songs[nextIndex]);
  };

  const toggleBackgroundMusic = () => {
    if (isBgMusicPlaying) {
      bgAudioRef.current.pause();
    } else {
      bgAudioRef.current.play();
    }
    setIsBgMusicPlaying(!isBgMusicPlaying);
  };

  const adjustBackgroundVolume = (e) => {
    const newVolume = e.target.value;
    setBgVolume(newVolume);
    bgAudioRef.current.volume = newVolume; // Cập nhật âm lượng nhạc nền
  };

  return (
    <div className="App">
      {/* Nhạc nền */}
      <audio ref={bgAudioRef} src={backgroundMusic} autoPlay loop hidden volume={bgVolume} />
      
      <h1>Music Player</h1>
      <div className="player">
        <img src={currentSong.cover} alt={currentSong.title} />
        <h3>{currentSong.title}</h3>
        <p>{currentSong.artist}</p>
        <audio id="audio-player" src={currentSong.src}></audio>
        <div className="controls">
          <button onClick={handlePlayPause}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
      
      {/* Nút bật/tắt nhạc nền */}
      <div className="background-music-control">
        <button onClick={toggleBackgroundMusic}>
          {isBgMusicPlaying ? "Tắt nhạc nền" : "Bật nhạc nền"}
        </button>
        <div className="volume-control">
          <label htmlFor="volume-slider">Âm lượng nhạc nền:</label>
          <input
            id="volume-slider"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={bgVolume}
            onChange={adjustBackgroundVolume}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
```
