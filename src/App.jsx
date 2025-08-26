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

import birthdayVideo from "./assets/birthday-video.mp4"; // replace with your video path




export default function App() {
  const [audio] = useState(new Audio("/music.mp3"));
  const [isPlaying, setIsPlaying] = useState(false);
  const [bgColor, setBgColor] = useState("#E6E6FA"); // initial light purple

const colors = [
  "#d87dc9ff", // soft pink
  "#cf91caff", // pastel sky blue
  "#88a8d3ff", // light yellow
  
];




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
    padding: "30px",           // thoda zyada padding
    borderRadius: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    width: "90%",               // div width badha di
    maxWidth: "800px",          // max width bhi increase
    textAlign: "center",
    margin: "0 auto",           // center align
    justifyItems: "center",
    textAlign: "center",
  }}
>
  <h1
  style={{
    fontSize: "3rem",
    fontWeight: "bold",
    color: "white", // base pink
    textShadow: `
      0 0 5px #ff69b4,
      0 0 10px #ff69b4,
      0 0 20px #ff69b4,
      0 0 40px #ff69b4,
      0 0 80px #ff69b4
    `,
    animation: "neonGlow 1.5s ease-in-out infinite alternate"
  }}
>
  Happy Birthday SP 💖💕
</h1>

<style>{`
@keyframes neonGlow {
  from {
    text-shadow: 0 0 5px #ff69b4,
                 0 0 10px #ff69b4,
                 0 0 20px #ff69b4,
                 0 0 40px #ff69b4,
                 0 0 80px #ff69b4;
  }
  to {
    text-shadow: 0 0 10px #ffb6c1,
                 0 0 20px #ffb6c1,
                 0 0 30px #ffb6c1,
                 0 0 50px #ffb6c1,
                 0 0 100px #ffb6c1;
  }
}
`}</style>

  <p
    className="typewriter"
    style={{ fontSize: "1.5rem", lineHeight: "2rem", margin:"2px",}} // text size aur readability improve
  >
    In my darkest hours, you were the light <br /> that guided me, never letting me fall.
  </p>



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
   <h1
  style={{
    fontSize: "3rem",
    fontWeight: "bold",
    color: "purple", // base pink
    textShadow: `
      0 0 5px #ff69b4,
      0 0 10px #ff69b4,
      0 0 20px #ff69b4,
      0 0 40px #ff69b4,
      0 0 80px #ff69b4
    `,
    animation: "neonGlow 1.5s ease-in-out infinite alternate"
  }}
>
OUR BEST MEMORY 🧿💗
</h1>

<style>{`
@keyframes neonGlow {
  from {
    text-shadow: 0 0 5px #ff69b4,
                 0 0 10px #ff69b4,
                 0 0 20px #ff69b4,
                 0 0 40px #ff69b4,
                 0 0 80px #ff69b4;
  }
  to {
    text-shadow: 0 0 10px #ffb6c1,
                 0 0 20px #ffb6c1,
                 0 0 30px #ffb6c1,
                 0 0 50px #ffb6c1,
                 0 0 100px #ffb6c1;
  }
}
`}</style>

{/* 🌟 Memories Grid */}
<div className="image-grid">  
  {[cuttwoImg, flowerImg, cutieImg, parkImg, balloImg, hbgImg, spoojaImg, wisheImg, goImg, msgImg].map((img, i) => {
    const year = 2016 + i;
    const isSecondOrFourth = i === 1 || i === 3; // 2nd & 4th image
    return (
      <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img
          src={img}
          alt=""
          style={{
            height: "280px",
            width: "250%",
            objectFit: "cover",
            borderRadius: "10px",
            border: "5px solid white",
          }}
        />
        <p
          style={{
            color: year === 2024 ? "red" : "black",
            fontWeight: 900,
            fontSize: "25px",
          }}
        >
          {year === 2024 ? "❤️2024❤️" : year}
        </p>

    {/* 🎥 Centered video for 2025 */}
{year === 2025 && (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "auto",
      marginTop: "20px",
    }}
  >
    <video
      src={birthdayVideo}
      controls
      autoPlay
      loop
      muted
      style={{
        width: "auto",      // increase width to 90% of container
        height: "500px",   // increase height
        maxWidth: "1000px",// optional maximum width
        borderRadius: "15px",
        objectFit: "cover" // keeps aspect ratio while filling box
      }}
    />
  </div>
)}

      </div>
    );
  })}
</div>


    
    
      {/* 🤝 Friendship Card */}
      <div className="friendship-card">
        <img src={sajanapoojaImg} alt="friends" />
        <div>
        <h1
  style={{
    background: "linear-gradient(90deg, #ff69b4, #fff200)", // pink to yellow
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "2rem",
    fontWeight: "bold",
  }}
>
  🌸 True Friendship is a Treasure ✨
</h1>

          <p className="text-black">"Happy Birthday to the most amazing friend of my life! 🌸 
            In my hardest times, when I felt weak and broken, you stood by 
            me like my backbone and gave me the courage to rise again. <br /> <br />You are not just a friend, but my strength, my guide, and my biggest supporter. On your special day, I just want to thank you for being the person who never let me face my struggles alone. May this year bring you endless happiness, success, love,
             and everything your beautiful heart deserves❤️. <br /> <br />You are truly
              a blessing in my life, and I’ll always cherish our bond forever.
              Love you bhena💐💐💐</p>
          <button onClick={balloonBurst}>🎉 Celebrate 💕🫶🌸</button>
        </div>
      </div>

      {/* 🌈 CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
        h1 { font-size: 2rem; }
        h2 { font-size: 1.5rem; }
        p { font-size: 1rem; }

        .image-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
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
