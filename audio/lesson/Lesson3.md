# Tạo dự án music

### Hiển thị danh sách bài hát dạng list

```
import React, { useState, useRef } from 'react';
import { songs } from './songs'; // Danh sách bài hát
import backgroundMusic from './audio/background.mp3'; // Nhạc nền

function App() {
  const [currentSong, setCurrentSong] = useState(songs[0]); // Bài hát hiện tại
  const [isPlaying, setIsPlaying] = useState(false); // Trạng thái phát nhạc
  const [isBgMusicPlaying, setIsBgMusicPlaying] = useState(true); // Trạng thái nhạc nền
  const [bgVolume, setBgVolume] = useState(0.5); // Âm lượng nhạc nền (50% mặc định)
  const bgAudioRef = useRef(null); // Tham chiếu đến phần tử audio của nhạc nền

  // Điều khiển nhạc bài hát chính
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

  return (
    <div className="App">
      {/* Nhạc nền */}
      <audio ref={bgAudioRef} src={backgroundMusic} autoPlay loop volume={bgVolume} hidden />

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
              onClick={() => setCurrentSong(song)}
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
### Update CSS
```
.background-music-control {
  margin-top: 20px;
}

.volume-control {
  margin-top: 10px;
}

#volume-slider {
  width: 100%;
}

.song-list ul {
  list-style: none;
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

.song-list li.bold {
  font-weight: bold;
  color: blue;
}

```