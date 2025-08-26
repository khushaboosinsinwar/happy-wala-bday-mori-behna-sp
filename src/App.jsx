// App.jsx
import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";

// Import images
import girlImg from "./assets/poooja/girl.jpg";
import cuttwoImg from "./assets/poooja/2016.jpg";
import flowerImg from "./assets/poooja/2017.png";
import cutieImg from "./assets/poooja/2018.jpg";
import parkImg from "./assets/poooja/2019.jpg";
import balloImg from "./assets/poooja/2020.jpg";
import hbgImg from "./assets/poooja/2021.jpg";
import spoojaImg from "./assets/poooja/2022.jpg";
import wisheImg from "./assets/poooja/2023.jpg";
import goImg from "./assets/poooja/2024.jpg";
import msgImg from "./assets/poooja/2025.jpg";
import sajanapoojaImg from "./assets/poooja/2025-sp.jpg";

export default function App() {
  const [audio] = useState(new Audio("/music.mp3"));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audio.loop = true;
    audio.volume = 0.5;
    return () => audio.pause();
  }, [audio]);

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const balloonBurst = () => {
    confetti({ particleCount: 3000, spread: 160, origin: { y: 0.6 } });
  };

  useEffect(() => {
    confetti({ particleCount: 200, spread: 120, origin: { y: 0.6 } });
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Dancing Script', cursive",
        background: "linear-gradient(135deg, #E6E6FA, #D8BFD8)", // light purple gradient
        minHeight: "100vh",
        width: "100%",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "15px",
        gap: "30px",
      }}
    >
      {/* 🎂 Birthday Header */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          padding: "20px",
          borderRadius: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <h1 className="neon-text">Happy Birthday SP 💖💕</h1>
        <p className="typewriter">May your day be filled with love & laughter!</p>
        <img
          src={girlImg}
          alt="Birthday"
          style={{
            width: "100%",
            maxWidth: "200px",
            borderRadius: "15px",
            marginTop: "20px",
          }}
        />
      </div>

      {/* 🌟 Memories Grid */}
      <h2 style={{ textShadow: "2px 2px 10px #ff69b4" }}>
        OUR BEAUTIFUL MEMORY 💖✨
      </h2>
      <div className="image-grid">
        {[cuttwoImg, flowerImg, cutieImg, parkImg, balloImg, hbgImg, spoojaImg, wisheImg, goImg, msgImg].map((img, i) => {
          const year = 2016 + i;
          const isSecondOrFourth = i === 1 || i === 3; // 2nd & 4th images taller
          return (
            <div key={i}>
              <img
                src={img}
                alt=""
                style={{
                  height: isSecondOrFourth ? "200px" : "200px",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                  border: "5px solid white",
                }}
              />
              <p style={{ color: year === 2024 ? "red" : "black" }}>
                {year === 2024 ? "❤️ 2024 ❤️" : year}
              </p>
            </div>
          );
        })}
      </div>

      {/* 🎶 Music Toggle */}
      <button onClick={toggleMusic}>
        {isPlaying ? "⏸ Pause Music" : "▶ Play Music"}
      </button>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

        h1 { font-size: 2rem; }
        h2 { font-size: 1.5rem; }
        p { font-size: 1rem; }

        .image-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr); /* 4 images per row */
          gap: 15px;
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
        }

        .neon-text {
          color: #fff;
          text-shadow: 0 0 5px #ff69b4, 0 0 10px #ff69b4, 0 0 20px #ff69b4, 0 0 40px #ff69b4;
          animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
          from { text-shadow: 0 0 10px #fff, 0 0 20px #ff69b4, 0 0 30px #ff69b4; }
          to { text-shadow: 0 0 20px #fff, 0 0 30px #dda0dd, 0 0 40px #dda0dd; }
        }

        .typewriter {
          overflow: hidden;
          border-right: 4px solid #fff;
          white-space: nowrap;
          animation: typing 4s steps(40, end), blink .75s step-end infinite;
        }

        @keyframes typing { from { width: 0 } to { width: 100% } }
        @keyframes blink { from, to { border-color: transparent } 50% { border-color: #fff; } }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @media (max-width: 768px) {
          .image-grid { grid-template-columns: repeat(2, 1fr); } /* 2 images/row tablet */
        }
        @media (max-width: 480px) {
          .image-grid { grid-template-columns: 1fr; } /* 1 image/row mobile */
        }

        button {
          background: #DDA0DD;
          border: none;
          padding: 10px 20px;
          border-radius: 25px;
          font-weight: bold;
          cursor: pointer;
          color: black;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}
