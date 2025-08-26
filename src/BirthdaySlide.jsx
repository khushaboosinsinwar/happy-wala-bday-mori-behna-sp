// // BirthdaySlide.jsx
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import confetti from "canvas-confetti";
// // Import images
// import girlImg from "./assets/poooja/girl.jpg";
// import cuttwoImg from "./assets/poooja/2016.jpg";
// import flowerImg from "./assets/poooja/2017.png";
// import cutieImg from "./assets/poooja/2018.jpg";
// import parkImg from "./assets/poooja/2019.jpg";
// import balloImg from "./assets/poooja/2020.jpg";
// import hbgImg from "./assets/poooja/2021.jpg";
// import spoojaImg from "./assets/poooja/2022-sp.jpg";
// import wisheImg from "./assets/poooja/2023.jpg";
// import goImg from "./assets/poooja/2024.jpg";
// import msgImg from "./assets/poooja/2025.jpg";
// import sajanapoojaImg from "./assets/poooja/2025-sp.jpg";

// // Map codes → names
// const codeNameMap = {
//   xyz123: "SP (Sajana-Pooja💖💕) ",
// };

// export default function BirthdaySlide() {
//   const { code } = useParams();
//   const name = codeNameMap[code];
//   const [audio] = useState(new Audio("/music.mp3"));
//   const [isPlaying, setIsPlaying] = useState(false);

//   // 🎶 Setup music (no autoplay)
//   useEffect(() => {
//     audio.loop = true;
//     audio.volume = 0.5;
//     return () => audio.pause();
//   }, [audio]);

//   const toggleMusic = () => {
//     if (isPlaying) {
//       audio.pause();
//       setIsPlaying(false);
//     } else {
//       audio
//         .play()
//         .then(() => setIsPlaying(true))
//         .catch(() =>
//           console.log("User interaction required to start audio 🎶")
//         );
//     }
//   };

//   // 🎉 Confetti + Floating Emojis
//   useEffect(() => {
//     confetti({
//       particleCount: 200,
//       spread: 120,
//       origin: { y: 0.6 },
//     });

//     const emojiContainer = document.createElement("div");
//     emojiContainer.style.position = "fixed";
//     emojiContainer.style.top = "0";
//     emojiContainer.style.left = "0";
//     emojiContainer.style.width = "100%";
//     emojiContainer.style.height = "100%";
//     emojiContainer.style.pointerEvents = "none";
//     document.body.appendChild(emojiContainer);

//     const emojis = ["💗", "🧿", "💖", "🌸", "✨"];
//     const interval = setInterval(() => {
//       const span = document.createElement("span");
//       span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
//       span.style.position = "absolute";
//       span.style.left = Math.random() * 100 + "vw";
//       span.style.fontSize = "2rem";
//       span.style.animation = "floatUp 6s linear forwards";
//       emojiContainer.appendChild(span);

//       setTimeout(() => span.remove(), 6000);
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//       emojiContainer.remove();
//     };
//   }, []);

//   // 🎈 Balloon Burst + 🍫 Falling Chocolates/Toffees
//   const balloonBurst = () => {
//     confetti({
//       particleCount: 3000,
//       spread: 160,
//       origin: { y: 0.6 },
//     });

//     const fallContainer = document.createElement("div");
//     fallContainer.style.position = "fixed";
//     fallContainer.style.top = "0";
//     fallContainer.style.left = "0";
//     fallContainer.style.width = "100%";
//     fallContainer.style.height = "100%";
//     fallContainer.style.pointerEvents = "none";
//     document.body.appendChild(fallContainer);

//     const items = ["🍫", "🍬", "🍭"];
//     for (let i = 0; i < 30; i++) {
//       const span = document.createElement("span");
//       span.innerText = items[Math.floor(Math.random() * items.length)];
//       span.style.position = "absolute";
//       span.style.left = Math.random() * 100 + "vw";
//       span.style.fontSize = Math.random() * 2 + 1 + "rem";
//       span.style.animation = "fall 5s linear forwards";
//       fallContainer.appendChild(span);

//       setTimeout(() => span.remove(), 5000);
//     }
//   };

//   // if (!name)
//   //   return (
//   //     <p style={{ textAlign: "center", marginTop: "50px" }}>
//   //       Oops! Name not found 😢
//   //     </p>
//   //   );

//   return (
//     <div
//       style={{
//         fontFamily: "'Dancing Script', cursive",
//         background:
//           "linear-gradient(-45deg, #FFC0CB, #b175a4, #8ba2ceff, #B5FFFC)",
//         backgroundSize: "400% 400%",
//         animation: "gradientShift 10s ease infinite",
//         minHeight: "100vh",
//         width: "50%",
//         color: "#fff",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         textAlign: "center",
//         overflowX: "hidden",
//         position: "relative",
//         padding: "20px",
//         gap: "40px",
//       }}
//     >
//       {/* 🎈 Floating Balloons */}
//       <div className="balloons">
//         {Array.from({ length: 8 }).map((_, i) => (
//           <div key={i} className="balloon" style={{ "--i": i }}></div>
//         ))}
//       </div>

//       {/* 🎂 Birthday Header */}
//       <div
//         style={{
//           background: "rgba(255, 255, 255, 0.1)",
//           padding: "30px",
//           borderRadius: "20px",
//           boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
//           textAlign: "center",
//           justifyItems: "center",
//           width: "60%",
//           margin: "0 auto",
//         }}
//       >
//         <h1
//           style={{ fontSize: "3rem", marginBottom: "20px" }}
//           className="neon-text"
//         >
//         Happy Birthday SP (Sajana-Pooja💖💕) 
//         </h1>

//         <p
//           style={{ fontSize: "2rem", marginBottom: "10px" }}
//           className="typewriter"
//         >
//           May your day be filled with joy, love, and laughter!
//         </p>
//         <p style={{ fontSize: "2rem" }}>Have an amazing year ahead!</p>

//         <img
//           src={girlImg}
//           alt="Birthday"
//           style={{
//             width: "200px",
//             height: "auto",
//             borderRadius: "15px",
//             marginTop: "20px",
//             justifyItems: "center",
//           }}
//         />
//       </div>



// <div
//     style={{
      
//        marginTop: "40px",
//     marginBottom: "20px",
//     padding: "20px",
//       gridTemplateColumns: "repeat(5, 1fr)",
//       background: "rgba(255, 255, 255, 0.2)",
//     borderRadius: "20px",
//     boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
//       gap: "30px",
//       width: "85%",
//       justifyItems: "center",
//     }}
//     className="image-grid"
//   >

  
// {/* 🌟 Our Beautiful Memory Section */}
// <div
//   style={{
//     marginTop: "40px",
//     marginBottom: "20px",
//     padding: "20px",
//     background: "rgba(255, 255, 255, 0.2)",
//     borderRadius: "20px",
//     boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
//     textAlign: "center",
//   }}
// >
//   <h2
//     style={{
//       fontSize: "2.8rem",
//       fontWeight: "bold",
//       color: "#fff",
//       textShadow: "2px 2px 10px #ff69b4",
//     }}
//   >
//     OUR BEAUTIFUL MEMORY 💖✨
//   </h2>
// </div>


//   <div
//     style={{
//       display: "grid",
//        marginTop: "40px",
//     marginBottom: "20px",
//     padding: "20px",
//       gridTemplateColumns: "repeat(5, 1fr)",
     
//       gap: "30px",
//       width: "100%",
//       justifyItems: "center",
//     }}
//     className="image-grid"
//   >

// {[
//   cuttwoImg,
//   flowerImg,
//   cutieImg,
//   parkImg,
//   balloImg,
//   hbgImg,
//   spoojaImg,
//   wisheImg,
//   goImg,   // 👉 2024 image
//   msgImg,  // 👉 2025 image
// ].map((img, i, arr) => {
//   const year = 2016 + i;
//   const isLast = i === arr.length - 1;
//   const isSecondRow = i >= 5;
//   const isSecondRowSecondImage = i === 6; // 👈 Row2, 2nd image condition
//   const isYear2024 = year === 2024; // 👈 condition for 2024

//   return (
//     <div key={i} style={{ textAlign: "center" }}>
//       <img
//         src={img}
//         alt="bday"
//         style={{
//           width: isSecondRowSecondImage ? "300px" : "200px", 
//           border: "7px solid white",
//           borderRadius: "15px",
//           height: isLast ? "400px" : isSecondRow ? "400px" : "250px",
//           objectFit: "cover",
//           boxShadow: "0 8px 20px rgba(0, 0, 0, 0.25)",
//         }}
//       />
//       <p
//         style={{
//           marginTop: "10px",
//           fontSize: "18px",
//           fontWeight: "bold",
//           color: isYear2024 ? "red" : "black", // 👈 red color for 2024
//         }}
//       >
//         {isYear2024 ? "❤️ 2024 ❤️" : year} {/* 👈 hearts with 2024 */}
//       </p>
//     </div>
//   );
// })}

//   </div>
// </div>


//       {/* 💌 Special Message */}
//       <div
//         style={{
//           background: "rgba(255,255,255,0.2)",
//           borderRadius: "25px",
//           padding: "30px",
//           width: "50%",
//         }}
//       >
//         <h2
//           style={{
//             fontSize: "2.5rem",
//             marginBottom: "20px",
//             borderRadius: "25px",
//             fontWeight: "bold",
//           }}
//         >
//           Special Message For You 💫💝💞
//         </h2>
//         <p
//           style={{ fontSize: "1.6rem", lineHeight: "1.8" }}
//           className="typewriter"
//         >
//           Wishing you a very Happy Birthday! 🥳 On this special day, may your
//           heart be filled with endless joy, your soul be showered with peace,
//           and your life be blessed with good health 🌿💪. May every sunrise
//           bring you new energy, and every sunset remind you of the love and
//           warmth that surrounds you. 💫💙 <br /> <br /> May your friendships
//           always stay strong and true, bringing laughter, support, and countless
//           unforgettable memories 🤝💞. May you continue to inspire the people
//           around you with your kindness, positivity, and strength. ✨🌹 <br />{" "}
//           <br /> As you step forward in your career, I pray that success follows
//           you wherever you go 🚀💼. May every challenge turn into an
//           opportunity, and every effort lead you one step closer to your dreams.
//           🌟💪 <br /> <br /> Today is not just about celebrating your age, but
//           celebrating the wonderful person you are, and the beautiful journey
//           that still lies ahead. 🌈🎁💝 <br /> <br /> Stay blessed, stay happy,
//           and may this year be the most amazing chapter of your life so far! 💐🎉🧿
//         </p>
//       </div>
     

//       {/* ✨ Animated Memories Gallery */}  
//       <div
//         style={{
//           marginTop: "60px",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           gap: "30px",
//           width: "100%",
//         }}
//       >
//         {[
//           cuttwoImg,
//           flowerImg,
//           cutieImg,
//           parkImg,
//           balloImg,
//           hbgImg,
//           spoojaImg,
//           wisheImg,
//           goImg,
//           msgImg,
//         ].map((img, i) => (
//           <motion.img
//             key={i}
//             src={img}
//             alt={`memory-${i}`}
//             initial={{ opacity: 0, scale: 0.5, y: 50 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             transition={{
//               delay: i * 1.2, // ek ke baad ek aayega
//               duration: 1,
//               type: "spring",
//             }}
//             style={{
//               width: "280px",
//               height: "380px",
//               objectFit: "cover",
//               borderRadius: "20px",
//               border: "6px solid white",
//               boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
//             }}
//           />
//         ))}
//       </div>



     
//       {/* 🤝 Friendship Card */}
//       <div
//         className="relative flex flex-col md:flex-row items-center bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/40"
//         style={{
//           width: "50%",
//           marginBottom: "50px",
//         }}
//       >
//         <div className="md:w-1/2 flex items-center justify-center">
//           <img
//             src={sajanapoojaImg}
//             alt="friends"
//             className="rounded-2xl object-cover h-[350px] w-full shadow-lg transform hover:scale-105 transition duration-500"
//           />
//         </div>

//         <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0 text-white text-center md:text-left">
//           <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
//             🌸 True Friendship is a Treasure ✨
//           </h1>
//           <p className="text-2xl leading-relaxed mb-4 text-black">
//             A true friend is not just someone who laughs with you in happy
//             times, but also stands beside you when life feels heavy. 💕 <br />{" "}
           
//           </p>
//           <button
//             onClick={balloonBurst}
//             className="mt-6 bg-gradient-to-r from-purple-400 via-blue-400 to-blue-500 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:scale-110 hover:shadow-2xl transition transform duration-500"
//           >
//             🎉 Celebrate 💕🫶🌸
//           </button>
//         </div>
//       </div>

//       {/* 🌈 Styles */}
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Pacifico&display=swap');

//           @keyframes gradientShift {
//             0% { background-position: 0% 50%; }
//             50% { background-position: 100% 50%; }
//             100% { background-position: 0% 50%; }
//           }

//           .neon-text {
//             color: #fff;
//             text-shadow: 0 0 5px #ff69b4, 0 0 10px #ff69b4, 0 0 20px #ff69b4, 0 0 40px #ff69b4;
//             animation: glow 2s ease-in-out infinite alternate;
//           }

//           @keyframes glow {
//             from { text-shadow: 0 0 10px #fff, 0 0 20px #ff69b4, 0 0 30px #ff69b4; }
//             to { text-shadow: 0 0 20px #fff, 0 0 30px #dda0dd, 0 0 40px #dda0dd; }
//           }

//           .typewriter {
//             overflow: hidden;
//             border-right: 4px solid #fff;
//             white-space: nowrap;
//             animation: typing 4s steps(40, end), blink .75s step-end infinite;
//           }

//           @keyframes typing {
//             from { width: 0 }
//             to { width: 100% }
//           }

//           @keyframes blink {
//             from, to { border-color: transparent }
//             50% { border-color: #fff; }
//           }

//           /* Balloons */
//           .balloons {
//             position: absolute;
//             width: 100%;
//             height: 100%;
//             overflow: hidden;
//             top: 0;
//             left: 0;
//             z-index: 0;
//           }

//           .balloon {
//             width: 40px;
//             height: 60px;
//             background: #ff69b4;
//             border-radius: 50%;
//             position: absolute;
//             bottom: -150px;
//             animation: float 8s infinite ease-in;
//             left: calc(100% * var(--i) / 8);
//           }

//           .balloon:nth-child(2) { background: #dda0dd; }
//           .balloon:nth-child(3) { background: #87ceeb; }
//           .balloon:nth-child(4) { background: #98fb98; }
//           .balloon:nth-child(5) { background: #ffb6c1; }

//           @keyframes float {
//             0% { transform: translateY(0) scale(1); }
//             100% { transform: translateY(-110vh) scale(1.1); }
//           }

//           @keyframes floatUp {
//             0% { transform: translateY(100vh); opacity: 1; }
//             100% { transform: translateY(-10vh); opacity: 0; }
//           }

//           @keyframes fall {
//             0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
//             100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
//           }

//           /* Responsive Grid */
//           @media (max-width: 768px) {
//             .image-grid {
//               grid-template-columns: repeat(2, 1fr);
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// } 