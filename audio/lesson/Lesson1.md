# Tạo dự án music

### Khới tạo dự án với Vite
```
npm create vite@latest
```
### Tạo file dữ liệu cho danh sách nhạc 

Tạo file songs.js

```js
const url = 'https://kangnamaesthetichospital.com/cp/audio/TTHL/';

export const songs = [
    {
      title: "Nguồn gốc của thế gian và của các vị thần",
      artist: "Thần Thoại Hy Lạp",
      src: url + "TTHL001.mp3",
      cover: url + "TTHL001.jpg"
    },
    {
      title: "Cronos lật đổ Ouranos",
      artist: "Thần Thoại Hy Lạp",
      src: url + "TTHL002.mp3",
      cover: url + "TTHL002.png"
    }
];
```

### Cấu trúc giao diện và logic Sửa file App.js

```jsx
import { useState } from 'react';
import { songs } from './songs';

function App() {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

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

  return (
    <div className="App">
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
    </div>
  );
}

export default App;

```

### Thêm CSS để làm đẹp giao diện Tạo file index.css

```css
.App {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}

.player {
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  width: 300px;
  border-radius: 10px;
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
```