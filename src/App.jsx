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
  const [bgColor, setBgColor] = useState("#E6E6FA"); // initial light purple

  const colors = ["#c089a7ff", "#db87dbff", "#9db5e0ff", "#86b7c0ff"]; // shades of purple

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

  // 🌈 Change background color every second
  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setBgColor(randomColor);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
        background: bgColor,
        minHeight: "100vh",
        width: "100%",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "15px",
        gap: "30px",
        transition: "background 0.5s ease",
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
      <div className="image-grid">
        {[cuttwoImg, flowerImg, cutieImg, parkImg, balloImg, hbgImg, spoojaImg, wisheImg, goImg, msgImg].map((img, i) => {
          const year = 2016 + i;
          const isSecondOrFourth = i === 1 || i === 3; // 2nd & 4th image
          return (
            <div key={i}>
              <img
                src={img}
                alt=""
                style={{
                  height: isSecondOrFourth ? "350px" : "350px",
                  width: i === 3 ? "120%" : "100%", // increase 4th image width
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
              position: "absolute",
              width: "150%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "15px",
              border: "5px solid white",
              opacity: 0,
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
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          width: 100%;
          max-width: 900px;
        }

        .slideshow {
          position: relative;
          width: 150%;
          max-width: 400px;
          height: 550px;
          margin: 20px auto;
          overflow: hidden;
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

        @media (max-width: 480px) {
          h1 { font-size: 1.6rem; }
          h2 { font-size: 1.3rem; }
          .slideshow { max-width: 100%; height: 200px; }
        }
      `}</style>
    </div>
  );
}
