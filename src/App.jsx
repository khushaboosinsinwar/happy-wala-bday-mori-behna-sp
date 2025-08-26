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

import birthdayVideo from "./assets/birthday-video.mp4";

import earing from "./assets/earS.mp4";
export default function App() {
  const [audio] = useState(new Audio("/music.mp3"));
  const [isPlaying, setIsPlaying] = useState(false);
  const [bgColor, setBgColor] = useState("#E6E6FA");

  const colors = ["#d87dc9ff", "#cf91caff", "#88a8d3ff"];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setBgColor(colors[Math.floor(Math.random() * colors.length)]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    confetti({ particleCount: 200, spread: 120, origin: { y: 0.6 } });
    const emojiContainer = document.createElement("div");
    emojiContainer.className = "fixed top-0 left-0 w-full h-full pointer-events-none";
    document.body.appendChild(emojiContainer);

    const emojis = ["💗", "🧿", "💖", "🌸", "✨"];
    const interval = setInterval(() => {
      const span = document.createElement("span");
      span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
      span.className = "absolute text-2xl animate-floatUp";
      span.style.left = Math.random() * 100 + "vw";
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

  const memories = [
    { img: cuttwoImg, width: "w-[200px]", height: "h-[300px]", year: 2016 },
    { img: flowerImg, width: "w-[250px]", height: "h-[300px]", year: 2017 },
    { img: cutieImg, width: "w-[200px]", height: "h-[300px]", year: 2018 },
    { img: parkImg, width: "w-[300px]", height: "h-[300px]", year: 2019 },
    { img: balloImg, width: "w-[200px]", height: "h-[300px]", year: 2020 },
    { img: hbgImg, width: "w-[200px]", height: "h-[300px]", year: 2021 },
    { img: spoojaImg, width: "w-[250px]", height: "h-[300px]", year: 2022 },
    { img: wisheImg, width: "w-[200px]", height: "h-[300px]", year: 2023 },
    { img: goImg, width: "w-[200px]", height: "h-[300px]", year: 2024 },
    { img: msgImg, width: "w-[250px]", height: "h-[300px]", year: 2025 },
  ];

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center text-center p-4 gap-6 md:gap-10 transition-colors duration-500"
      style={{ backgroundColor: bgColor, fontFamily: "'Dancing Script', cursive" }}
    >
      {/* 🎂 Birthday Header */}
      <div className="bg-white/10 p-8 md:p-12 rounded-3xl shadow-xl w-[95%] max-w-screen-xl mx-auto">
        <h1 className="text-xl md:text-5xl lg:text-6xl font-bold italic text-white drop-shadow-[0_0_10px_#ff69b4] animate-neonGlow">
          Happy Birthday SP (Sanjana-Pooja) 💖💕
        </h1>
        <p className="text-lg md:text-2xl lg:text-3xl mt-4 italic">
          In my darkest hours, you were the light that guided me, never letting me fall.
        </p>
        <img
          src={girlImg}
          className="w-48 md:w-64 lg:w-80 h-auto rounded-lg mt-6 mx-auto"
          alt="Birthday"
        />
      </div>

      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold italic text-purple-600 drop-shadow-[0_0_10px_#ff69b4] animate-neonGlow mt-8">
        OUR BEST MEMORY 🧿💗
      </h1>

{/* 🌟 Memories Grid - 2 pics per row */}
<div className="grid grid-cols-2 sm:grid-cols-2 gap-4 md:gap-6 w-full max-w-screen-xl">
  {memories.map((mem, i) => (
    <React.Fragment key={i}>
      {/* Image */}
      <div className="flex flex-col items-center">
        <img
          src={mem.img}
          className={`${mem.width} ${mem.height} object-cover rounded-lg border-4 border-white`}
          alt=""
        />
        <p
          className={`mt-2 font-bold italic text-xl ${
            mem.year === 2024 ? "text-red-500" : "text-black"
          }`}
        >
          {mem.year === 2024 ? "❤️2024❤️" : mem.year}
        </p>
      </div>

      {/* If last item (2025), show video in separate full-width row */}
      {mem.year === 2025 && (
        <div className="col-span-full flex justify-center mt-4">
          <video
            src={birthdayVideo}
            controls
            autoPlay
            loop
            muted
            className="w-[90%] max-w-[800px] h-auto rounded-lg"
          />
        </div>
        
      )}
    </React.Fragment>
  ))}
   <div className="col-span-full flex justify-center mt-4">
          <video
            src={earing}
            controls
            autoPlay
            loop
            muted
            className="w-[90%] max-w-[800px] h-auto rounded-lg"
          />
        </div>
</div>


      {/* 🤝 Friendship Card */}
      <div className="flex flex-col bg-white/70 rounded-3xl p-6 md:p-8 w-full max-w-screen-md gap-4">
        <img src={sajanapoojaImg} className="w-full rounded-lg" alt="friends" />
        <div>
          <h1 className="text-2xl md:text-3xl font-bold italic bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-300">
            🌸 True Friendship is a Treasure ✨
          </h1>
          <p className="text-black mt-2 italic">
            "Happy Birthday to the most amazing friend of my life! 🌸 In my hardest times, when I felt weak and broken, you stood by me like my backbone and gave me the courage to rise again. You are not just a friend, but my strength, my guide, and my biggest supporter..."
          </p>
          <button
            onClick={balloonBurst}
            className="mt-4 px-6 py-2 bg-pink-400 rounded-full font-bold hover:bg-pink-500 transition"
          >
            🎉 Celebrate 💕🫶🌸
          </button>
        </div>
      </div>

      {/* Tailwind Custom Animations */}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(100vh); opacity: 1; }
          100% { transform: translateY(-10vh); opacity: 0; }
        }
        .animate-floatUp { animation: floatUp 6s linear forwards; }

        @keyframes neonGlow {
          from { text-shadow: 0 0 5px #ff69b4,0 0 10px #ff69b4,0 0 20px #ff69b4,0 0 40px #ff69b4,0 0 80px #ff69b4; }
          to { text-shadow: 0 0 10px #ffb6c1,0 0 20px #ffb6c1,0 0 30px #ffb6c1,0 0 50px #ffb6c1,0 0 100px #ffb6c1; }
        }
        .animate-neonGlow { animation: neonGlow 1.5s ease-in-out infinite alternate; }
      `}</style>
    </div>
  );
}
