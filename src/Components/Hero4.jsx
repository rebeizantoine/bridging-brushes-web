// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
// import {
//   faFacebook,
//   faYoutube,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons";
// import "materialize-css/dist/css/materialize.min.css";
// import M from "materialize-css";
// import gallery1 from "../Images/MagaliKatra/mini-imagem-magali.png";
// import gallery2 from "../Images/NevineMatar/nevine-matar-imagem.png";
// import gallery3 from "../Images/ZeinaNader/image-3-seascape.png";
// import gallery4 from "../Images/exhibition-cow.png";

// import "../Styles/hero3.css";

// const Hero4 = () => {
//   const [trailerActive, setTrailerActive] = useState(false);
//   const [paintings, setPaintings] = useState([]);
//   const [activePainting, setActivePainting] = useState(null);

//   useEffect(() => {
//     // Static paintings data
//     const staticPaintings = [
//       {
//         feature_image_of_painting: gallery2,
//         feature_artist_name: "Nevine",
//         feature_artist_last_name: "Mattar",
//         feature_genre: "Poetry",
//         feature_tag1: "Energy",
//         feature_tag2: "Vivacity",
//         feature_description_of_painting: "Beyond Looks",
//         feature_name_of_painting: "Painting Two",
//       },
//       {
//         feature_image_of_painting: gallery1,
//         feature_artist_name: "Magali",
//         feature_artist_last_name: "Katra",
//         feature_genre: "Poetry",
//         feature_tag1: "Energy",
//         feature_tag2: "Vivacity",
//         feature_description_of_painting: "The crowd - 2024",
//         feature_name_of_painting: "The crowd",
//       },

//       {
//         feature_image_of_painting: gallery3,
//         feature_artist_name: "Zeina",
//         feature_artist_last_name: "Nader",
//         feature_genre: "Poetry",
//         feature_tag1: "Energy",
//         feature_tag2: "Vivacity",
//         feature_description_of_painting: "Seascape",
//         feature_name_of_painting: "Painting Three",
//       },
//     ];

//     setPaintings(staticPaintings);
//     setActivePainting(staticPaintings[0]);
//   }, []);

//   useEffect(() => {
//     if (paintings.length > 0) {
//       const elems = document.querySelectorAll(".carousel");
//       if (elems.length > 0) {
//         const options = {
//           duration: 200,
//           dist: 100,
//           shift: 0,
//           padding: 20,
//           numVisible: 5,
//           fullWidth: false,
//           indicators: true,
//           noWrap: false,
//           onCycleTo: function (ele) {
//             const index = Array.from(ele.parentNode.children).indexOf(ele);
//             setActivePainting(paintings[index]);
//           },
//         };
//         M.Carousel.init(elems, options);
//       }
//     }
//   }, [paintings]);

//   const toggleVideo = () => {
//     const video = document.querySelector("video");
//     if (video) {
//       video.pause();
//     }
//     setTrailerActive(!trailerActive);
//   };

//   const changeBg = (painting) => {
//     if (painting) {
//       setActivePainting(painting);
//       const banner = document.querySelector(".banner");
//       if (banner) {
//         banner.style.backgroundImage = `url(${painting.feature_image_of_painting})`;
//       }
//     }
//   };

//   return (
//     <div className="hero3">
//       <div
//         className="banner"
//         style={{
//           backgroundImage: activePainting
//             ? `url(${activePainting.feature_image_of_painting})`
//             : "none",
//         }}
//       >
//         {paintings.map(
//           (painting, index) =>
//             activePainting === painting && (
//               <div
//                 className="content active"
//                 key={index}
//                 style={{ color: "white" }}
//               >
//                 <h4 style={{ color: "white" }}>
//                   {painting.feature_artist_name}{" "}
//                   {painting.feature_artist_last_name}
//                 </h4>
//                 <h4 style={{ color: "white" }}>
//                   <span style={{ color: "white" }}>2023</span>
//                   <span>
//                     <i>{painting.feature_genre}</i>
//                   </span>
//                   <span style={{ color: "white" }}>
//                     {painting.feature_tag1}
//                   </span>
//                   <span style={{ color: "white" }}>
//                     {painting.feature_tag2}
//                   </span>
//                 </h4>
//                 <p>{painting.feature_description_of_painting}</p>
//               </div>
//             )
//         )}
//         <div className="carousel-box">
//           <div className="carousel">
//             {paintings.map((painting, index) => (
//               <div
//                 className="carousel-item"
//                 onClick={() => changeBg(painting)}
//                 key={index}
//               >
//                 <img
//                   src={painting.feature_image_of_painting}
//                   alt={painting.feature_name_of_painting}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <ul className="sci">
//         <li>
//           <a href="#">
//             <FontAwesomeIcon icon={faFacebook} />
//           </a>
//         </li>
//         <li>
//           <a href="#">
//             <FontAwesomeIcon icon={faYoutube} />
//           </a>
//         </li>
//         <li>
//           <a href="#">
//             <FontAwesomeIcon icon={faTwitter} />
//           </a>
//         </li>
//       </ul>
//       <div className="trailer">
//         <video src="./file.mp4" muted controls autoPlay></video>
//         <img
//           src="./close.png"
//           alt="Close"
//           className="close"
//           onClick={toggleVideo}
//         />
//       </div>
//     </div>
//   );
// };

// export default Hero4;
