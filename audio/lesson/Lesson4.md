# Tạo dự án music

### Hiển thị audio trực quan

```
import React, { useState, useRef } from 'react';
import { songs } from './songs'; // Danh sách bài hát
import backgroundMusic from './audio/background.mp3'; // Nhạc nền

function App() {
  const [currentSong, setCurrentSong] = useState(songs[0]); // Bài hát hiện tại
  const [isPlaying, setIsPlaying] = useState(false); // Trạng thái phát nhạc
  const [isBgMusicPlaying, setIsBgMusicPlaying] = useState(true); // Trạng thái nhạc nền
  const [bgVolume, setBgVolume] = useState(0.5); // Âm lượng nhạc nền (50% mặc định)
  const [currentTime, setCurrentTime] = useState(0); // Thời gian phát hiện tại
  const [duration, setDuration] = useState(0); // Tổng thời lượng bài hát
  const bgAudioRef = useRef(null); // Tham chiếu đến phần tử audio của nhạc nền

  // Điều khiển bài hát chính
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

  const handleSelectSong = (song) => {
    setCurrentSong(song); // Đặt bài hát mới
    const audio = document.getElementById('audio-player');
    audio.pause();
    audio.load(); // Tải bài hát mới
    audio.play();
    setIsPlaying(true);
  };

  // Điều khiển nhạc nền
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
    setBgVolume(newVolume); // Cập nhật trạng thái volume
    bgAudioRef.current.volume = newVolume; // Cập nhật volume của audio
  };

  // Cập nhật thời gian phát nhạc
  const updateTime = () => {
    const audio = document.getElementById('audio-player');
    setCurrentTime(audio.currentTime);
    setDuration(audio.duration || 0);
  };

  return (
    <div className="App">
      {/* Nhạc nền */}
      <audio ref={bgAudioRef} src={backgroundMusic} autoPlay loop volume={bgVolume} hidden />

      <h1>Music Player</h1>

      {/* Trình phát nhạc */}
      <div className="player">
        <img src={currentSong.cover} alt={currentSong.title} />
        <h3>{currentSong.title}</h3>
        <p>{currentSong.artist}</p>
        <audio
          id="audio-player"
          src={currentSong.src}
          controls
          onTimeUpdate={updateTime}
        ></audio>
        <div className="progress-bar">
          <progress value={currentTime} max={duration}></progress>
          <p>
            {Math.floor(currentTime)} / {Math.floor(duration)} giây
          </p>
        </div>
        <div className="controls">
          <button onClick={handlePlayPause}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>

      {/* Điều khiển nhạc nền */}
      <div className="background-music-control">
        <h2>Nhạc nền</h2>
        <button onClick={toggleBackgroundMusic}>
          {isBgMusicPlaying ? "Tắt nhạc nền" : "Bật nhạc nền"}
        </button>
        <div className="volume-control">
          <label htmlFor="volume-slider">Âm lượng:</label>
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

      {/* Danh sách bài hát */}
      <div className="song-list">
        <h2>Danh sách bài hát</h2>
        <ul>
          {songs.map((song, index) => (
            <li
              key={index}
              onClick={() => handleSelectSong(song)}
              style={{
                cursor: 'pointer',
                fontWeight: currentSong === song ? 'bold' : 'normal',
                color: currentSong === song ? 'blue' : 'black',
              }}
            >
              {index + 1}. {song.title} - {song.artist}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
```

### Sửa lại file index.css

```
.App {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}

.player {
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  width: 300px;
  border-radius: 10px;
  background-color: #f9f9f9;
}

img {
  width: 100%;
  border-radius: 10px;
}

.controls {
  margin-top: 20px;
}

button {
  margin: 5px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.progress-bar {
  margin-top: 10px;
}

progress {
  width: 100%;
  height: 10px;
  appearance: none;
}

.song-list ul {
  list-style-type: none;
  padding: 0;
}

.song-list li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.song-list li:hover {
  background-color: #f0f0f0;
  cursor: pointer;
}

.background-music-control {
  margin-top: 20px;
}

.volume-control {
  margin-top: 10px;
}

#volume-slider {
  width: 100%;
}
```