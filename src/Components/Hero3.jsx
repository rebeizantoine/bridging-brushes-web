// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHome,
//   faSearch,
//   faPlay,
//   faPlus,
//   faCircle,
// } from "@fortawesome/free-solid-svg-icons";
// import {
//   faFacebook,
//   faYoutube,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons";
// import "materialize-css/dist/css/materialize.min.css";
// import M from "materialize-css"; // Import Materialize JavaScript

// import bgTheCovenant from "../Images/exhibition2.jpg";
// import bgTheBlackDemon from "../Images/exhibition1.jpg";
// import bgTheTank from "../Images/GALLERY1.jpg";
// import bg65 from "../Images/exhibition4.jpg";
// // import theLittleMermaid from "./IMAGESMOVIES/the-little-mermaid.jpeg";
// import theLittleMermaid from "../Images/exhibition2.jpg";
// import theTank from "./IMAGESMOVIES/the-tank.jpeg";
// import bgLittleMermaid2 from "../Images/exhibition2.jpg";

// import bgTheCovenantpng from "./IMAGESMOVIES/the-covenant.jpg";
// import bgTheBlackDemonpng from "./IMAGESMOVIES/the-black-demon-title.png";
// import bgTheTankpng from "./IMAGESMOVIES/the-tank-title.png";
// import bg65png from "./IMAGESMOVIES/the-65-title.png";
// import theLittleMermaidpng from "./IMAGESMOVIES/the-little-mermaid-title.png";
// import "../Styles/hero3.css";

// const Hero3 = () => {
//   const [trailerActive, setTrailerActive] = useState(false);
//   const [carouselInitialized, setCarouselInitialized] = useState(false);

//   useEffect(() => {
//     const jqueryScript = document.createElement("script");
//     jqueryScript.src = "https://code.jquery.com/jquery-3.7.1.js";
//     jqueryScript.integrity =
//       "sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=";
//     jqueryScript.crossOrigin = "anonymous";
//     document.body.appendChild(jqueryScript);

//     const materializeScript = document.createElement("script");
//     materializeScript.src =
//       "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js";
//     document.body.appendChild(materializeScript);

//     return () => {
//       document.body.removeChild(jqueryScript);
//       document.body.removeChild(materializeScript);
//     };
//   }, []);

//   const toggleVideo = () => {
//     const trailer = document.querySelector(".trailer");
//     const video = document.querySelector("video");
//     video.pause();
//     setTrailerActive(!trailerActive);
//   };

//   const changeBg = (bg, title) => {
//     const banner = document.querySelector(".banner");
//     const contents = document.querySelectorAll(".content");
//     banner.style.background = `url(${bg})`;
//     banner.style.backgroundSize = "cover";
//     banner.style.backgroundPosition = "center";

//     contents.forEach((content) => {
//       content.classList.remove("active");
//       if (content.classList.contains(title)) {
//         content.classList.add("active");
//       }
//     });
//   };
//   useEffect(() => {
//     const elems = document.querySelectorAll(".carousel");
//     const options = {
//       duration: 200,
//       dist: 100,
//       shift: 0,
//       padding: 20,
//       numVisible: 5,
//       fullWidth: false,
//       indicators: true,
//       noWrap: false,
//       onCycleTo: null,
//     };
//     M.Carousel.init(elems, options);

//     return () => {
//       // Clean up if necessary
//     };
//   }, []);
//   return (
//     <div className="hero3">
//       <div
//         className="banner"
//         style={{ backgroundImage: `url(${bgLittleMermaid2})` }}
//       >
//         <div class="content the-little-mermaid active">
//           <img src={theLittleMermaidpng} alt="" class="movie-title" />
//           <h4>
//             <span>2023</span>
//             <span>
//               <i>Modern</i>
//             </span>
//             <span>Painting</span>
//             <span>Akrilic</span>
//           </h4>
//           <p>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab illum
//             aliquam veritatis consequuntur. Quia laborum ducimus voluptatum a
//             nemo fugiat sapiente, adipisci veritatis, fuga rem sunt. Culpa
//             aliquid, illo fugit dolores nulla inventore expedita ab tenetur
//             deserunt aspernatur obcaecati nisi sapiente tempore! Est facilis
//             similique sequi maxime adipisci! Excepturi, beatae.
//           </p>
//           {/* <div class="buttonwww">
//             <a href="#">
//               <i>
//                 <FontAwesomeIcon icon={faPlay} />
//               </i>{" "}
//               Watch
//             </a>
//             <a href="">
//               <i>
//                 <FontAwesomeIcon icon={faPlus} />
//               </i>
//               My List{" "}
//             </a>
//           </div> */}
//         </div>
//         <div class="content bg-65">
//           {/* <img src={bg65png} alt="Movie Name" class="movie-title" /> */}
//           <h1>THE GIO OF VANNI</h1>
//           <h4>
//             <span>2023</span>
//             <span>
//               <i>Modern</i>
//             </span>
//             <span>Painting</span>
//             <span>Akrilic</span>
//           </h4>
//           <p>
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
//             qui quo quas iste culpa praesentium dolorem eligendi velit pariatur
//             unde labore reiciendis obcaecati aliquid illum quibusdam maiores
//             quasi dignissimos, fugiat dolores aut deleniti? Harum quia, qui
//             recusandae explicabo numquam eos nam, animi dolor iste temporibus
//             minus incidunt aspernatur pariatur natus.
//           </p>
//           {/* <div class="buttonwww">
//             <a href="#">
//               <i>
//                 <FontAwesomeIcon icon={faPlay} />
//               </i>
//               Watch
//             </a>
//             <a href="#">
//               <i>
//                 <FontAwesomeIcon icon={faPlay} />
//               </i>
//               My List
//             </a>
//           </div> */}
//         </div>
//         <div class=" content the-covenant">
//           {/* <img src={bgTheCovenantpng} alt="Movie Name" class="movie-title" /> */}
//           <h1>THE GIO OF VANNI</h1>
//           <h4>
//             <span>2023</span>
//             <span>
//               <i>Modern</i>
//             </span>
//             <span>Painting</span>
//             <span>War/Akrilic</span>
//           </h4>
//           <p>
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
//             qui quo quas iste culpa praesentium dolorem eligendi velit pariatur
//             unde labore reiciendis obcaecati aliquid illum quibusdam maiores
//             quasi dignissimos, fugiat dolores aut deleniti? Harum quia, qui
//             recusandae explicabo numquam eos nam, animi dolor iste temporibus
//             minus incidunt aspernatur pariatur natus.
//           </p>
//           {/* <div class="buttonwww">
//             <a href="#">
//               <i>
//                 <FontAwesomeIcon icon={faPlay} />
//               </i>
//               Watch
//             </a>
//             <a href="#">
//               <i>
//                 <FontAwesomeIcon icon={faPlay} />
//               </i>
//               My List
//             </a>
//           </div> */}
//         </div>
//         <div class="content the-black-demon">
//           {/* <img src={bgTheBlackDemonpng} alt="Movie Name" class="movie-title" /> */}
//           <h1>THE GIO OF VANNI</h1>
//           <h4>
//             <span>2023</span>
//             <span>
//               <i>Modern</i>
//             </span>
//             <span>Painting</span>
//             <span>Akrilic</span>
//           </h4>
//           <p>
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
//             qui quo quas iste culpa praesentium dolorem eligendi velit pariatur
//             unde labore reiciendis obcaecati aliquid illum quibusdam maiores
//             quasi dignissimos, fugiat dolores aut deleniti? Harum quia, qui
//             recusandae explicabo numquam eos nam, animi dolor iste temporibus
//             minus incidunt aspernatur pariatur natus.
//           </p>
//           {/* <div class="buttonwww">
//             <a href="#">
//               <i>
//                 <FontAwesomeIcon icon={faPlay} />
//               </i>
//               Watch
//             </a>
//             <a href="#">
//               <i>
//                 <FontAwesomeIcon icon={faPlay} />
//               </i>
//               My List
//             </a>
//           </div> */}
//         </div>
//         <div class=" content the-tank">
//           {/* <img src={bgTheTankpng} alt="Movie Name" class="movie-title" /> */}
//           <h1>THE GIO OF VANNI</h1>
//           <h4>
//             <span>2023</span>
//             <span>
//               <i>Modern</i>
//             </span>
//             <span>Painting</span>
//             <span>Akrilic</span>
//           </h4>
//           <p>
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
//             qui quo quas iste culpa praesentium dolorem eligendi velit pariatur
//             unde labore reiciendis obcaecati aliquid illum quibusdam maiores
//             quasi dignissimos, fugiat dolores aut deleniti? Harum quia, qui
//             recusandae explicabo numquam eos nam, animi dolor iste temporibus
//             minus incidunt aspernatur pariatur natus.
//           </p>
//           {/* <div class="buttonwww">
//             <a href="#">
//               <i>
//                 <FontAwesomeIcon icon={faPlay} />
//               </i>
//               Watch
//             </a>
//             <a href="#">
//               <i>
//                 <FontAwesomeIcon icon={faPlay} />
//               </i>
//               My List
//             </a>
//           </div> */}
//         </div>
//         <div class="carousel-box">
//           <div class="carousel">
//             <div
//               class="carousel-item"
//               onClick={() => changeBg(theLittleMermaid, "the-little-mermaid")}
//             >
//               <img src={theLittleMermaid} alt="" />
//             </div>
//             <div class="carousel-item" onClick={() => changeBg(bg65, "bg-65")}>
//               <img src={bg65} alt="" />
//             </div>
//             <div
//               class="carousel-item"
//               onClick={() => changeBg(bgTheCovenant, "the-covenant")}
//             >
//               <img src={bgTheCovenant} alt="" />
//             </div>
//             <div
//               class="carousel-item"
//               onClick={() => changeBg(bgTheBlackDemon, "the-black-demon")}
//             >
//               <img src={bgTheBlackDemon} alt="" />
//             </div>
//             <div
//               class="carousel-item"
//               onClick={() => changeBg(bgTheTank, "the-tank")}
//             >
//               <img src={bgTheTank} alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <a href="#" class="play" onclick="toggleVideo();">
//         <i>
//           <FontAwesomeIcon icon={faCircle} />
//         </i>
//         Watch Trailer
//       </a> */}
//       <ul class="sci">
//         <li>
//           <a href="#">
//             <i>
//               <FontAwesomeIcon icon={faFacebook} />
//             </i>{" "}
//           </a>
//         </li>
//         <li>
//           <a href="#">
//             <i>
//               <FontAwesomeIcon icon={faYoutube} />
//             </i>{" "}
//           </a>
//         </li>
//         <li>
//           <a href="#">
//             <i>
//               <FontAwesomeIcon icon={faTwitter} />
//             </i>{" "}
//           </a>
//         </li>
//       </ul>
//       <div class="trailer">
//         <video src="./file.mp4" muted controls="true" autoplay="true"></video>
//         <img src="./close.png" alt="" class="close" onclick="toggleVideo();" />
//       </div>
//     </div>
//   );
// };

// export default Hero3;
