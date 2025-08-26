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
import sirhome from "./assets/poooja/sirhome.jpg";
import sirhome1 from "./assets/poooja/sirhome1.jpg";
import sirhome2 from "./assets/poooja/sirhome2.jpg";
import sirhome4 from "./assets/poooja/sirhome4.jpg";
import home from "./assets/poooja/home.jpg";
import chat from "./assets/poooja/chat.jpg";
import some from "./assets/poooja/some.jpg";
import fullclass from "./assets/poooja/fullclass.jpg";
import jijibday from "./assets/poooja/jijibday.jpg";
import sweeetadi from "./assets/poooja/sweetadi.jpg";
import sirclass from "./assets/poooja/sirclass.jpg";
import park3 from "./assets/poooja/park3.jpg";
import maam from "./assets/maam.jpg";
import threeHii from "./assets/3hii.jpg";
import sphi from "./assets/sphi.jpg";
import cutehi from "./assets/cutehi.jpg";
import filterImg from "./assets/filter.jpg";
import water from "./assets/water.jpg";
import jiji from "./assets/jiji.jpg";
import light from "./assets/light.png";

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

  // 🎉 Confetti + Floating Emojis
  useEffect(() => {
    confetti({ particleCount: 200, spread: 120, origin: { y: 0.6 } });

    const emojiContainer = document.createElement("div");
    emojiContainer.style.position = "fixed";
    emojiContainer.style.top = "0";
    emojiContainer.style.left = "0";
    emojiContainer.style.width = "100%";
    emojiContainer.style.height = "100%";
    emojiContainer.style.pointerEvents = "none";
    document.body.appendChild(emojiContainer);

    const emojis = ["💗", "🧿", "💖", "🌸", "✨"];
    const interval = setInterval(() => {
      const span = document.createElement("span");
      span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
      span.style.position = "absolute";
      span.style.left = Math.random() * 100 + "vw";
      span.style.fontSize = "2rem";
      span.style.animation = "floatUp 6s linear forwards";
      emojiContainer.appendChild(span);

      setTimeout(() => span.remove(), 6000);
    }, 1000);

    return () => {
      clearInterval(interval);
      emojiContainer.remove();
    };
  }, []);

  const balloonBurst = () => {
    confetti({ particleCount: 3000, spread: 160, origin: { y: 0.6 } });
  };

  return (
    <div
      style={{
        fontFamily: "'Dancing Script', cursive",
        background:
          "linear-gradient(-45deg, #FFC0CB, #b175a4, #8ba2ceff, #B5FFFC)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 10s ease infinite",
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
          return (
            <div key={i}>
              <img src={img} alt="" />
              <p style={{ color: year === 2024 ? "red" : "black" }}>
                {year === 2024 ? "❤️ 2024 ❤️" : year}
              </p>
            </div>
          );
        })}
      </div>

      {/* ✨ Slideshow */}
      <div className="slideshow">
        {[sirhome, sirhome1, sirhome2, sirhome4, home, chat, some, jiji, water, light, maam, threeHii, sphi, cutehi, filterImg, fullclass, jijibday, sweeetadi, sirclass, park3, goImg, msgImg, sajanapoojaImg].map((img, i, arr) => (
          <img
            key={i}
            src={img}
            alt="slideshow"
            style={{
              animation: `fadeInOut ${arr.length * 2}s infinite`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* 🤝 Friendship Card */}
      <div className="friendship-card">
        <img src={sajanapoojaImg} alt="friends" />
        <div>
          <h1>🌸 True Friendship is a Treasure ✨</h1>
          <p>A true friend stands with you in every moment 💕</p>
          <button onClick={balloonBurst}>🎉 Celebrate 💕🫶🌸</button>
        </div>
      </div>

      {/* 🎶 Music Toggle */}
      <button onClick={toggleMusic}>
        {isPlaying ? "⏸ Pause Music" : "▶ Play Music"}
      </button>

      {/* 🌈 CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

        h1 { font-size: 2rem; }
        h2 { font-size: 1.5rem; }
        p { font-size: 1rem; }

        .image-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr); /* 2 images per row */
          grid-template-rows: repeat(5, auto);   /* 5 rows */
          gap: 15px;
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
        }
        .image-grid img {
          width: 100%;
          border-radius: 10px;
          border: 5px solid white;
          object-fit: cover;
        }

        .slideshow {
          position: relative;
          width: 100%;
          max-width: 400px;
          height: 250px;
          margin: 20px auto;
          overflow: hidden;
        }
        .slideshow img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 15px;
          border: 5px solid white;
          opacity: 0;
        }

        @keyframes fadeInOut {
          0% { opacity: 0; }
          10% { opacity: 1; }
          40% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 0; }
        }

        .friendship-card {
          display: flex;
          flex-direction: column;
          background: rgba(255,255,255,0.7);
          border-radius: 20px;
          padding: 15px;
          width: 100%;
          max-width: 500px;
          gap: 15px;
        }
        .friendship-card img {
          width: 100%;
          border-radius: 15px;
        }
        .friendship-card button {
          background: pink;
          border: none;
          padding: 10px 20px;
          border-radius: 25px;
          font-weight: bold;
          cursor: pointer;
        }

        @keyframes floatUp {
          0% { transform: translateY(100vh); opacity: 1; }
          100% { transform: translateY(-10vh); opacity: 0; }
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

        @media (max-width: 480px) {
          h1 { font-size: 1.6rem; }
          h2 { font-size: 1.3rem; }
          .slideshow { max-width: 100%; height: 200px; }
          .image-grid { grid-template-columns: 1fr; grid-template-rows: auto; gap: 10px; }
        }
      `}</style>
    </div>
  );
}
