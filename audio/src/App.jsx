import React, { useState, useEffect, useRef } from 'react';
import { songs, book } from './songs'; // Danh sách bài hát
import backgroundMusic from './audio/background.mp3'; // Nhạc nền

function App() {
  const [currentSong, setCurrentSong] = useState(songs[0]); // Bài hát hiện tại
  const [isPlaying, setIsPlaying] = useState(false); // Trạng thái phát nhạc
  const [isBgMusicPlaying, setIsBgMusicPlaying] = useState(false); // Trạng thái nhạc nền
  const [bgVolume, setBgVolume] = useState(0.5); // Âm lượng nhạc nền (50% mặc định)
  const [currentTime, setCurrentTime] = useState(0); // Thời gian phát hiện tại
  const [duration, setDuration] = useState(0); // Tổng thời lượng bài hát
  const bgAudioRef = useRef(null); // Tham chiếu đến phần tử audio của nhạc nền

   // Sử dụng useEffect để cập nhật tiêu đề
   useEffect(() => {
    document.title = currentSong.title + ' - ' + book; // Đặt tiêu đề bài hát làm title
  }, [currentSong]); // Chạy lại khi currentSong thay đổi

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
    setCurrentSong(song); // Cập nhật bài hát mới
    setIsPlaying(true); // Đánh dấu trạng thái phát nhạc
    
    setTimeout(() => {
      const audio = document.getElementById('audio-player');
      if (audio) {
        audio.load(); // Tải lại bài hát mới
        audio.play(); // Phát ngay lập tức
      }
    }, 100); // Đợi React cập nhật state trước khi gọi phát nhạc
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
      <audio ref={bgAudioRef} src={backgroundMusic} loop volume={bgVolume} hidden />

      <h1>{book}</h1>

      {/* Trình phát nhạc */}
      <div className="player">
        <img src={currentSong.cover} alt={currentSong.title} />
        <h3>{currentSong.title}</h3>        
        <audio
          id="audio-player"
          src={currentSong.src}
          controls
          onTimeUpdate={updateTime}
        ></audio>
       
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
              {index + 1}. {song.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
