import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToBridgingBrushes = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const target = document.getElementById("bridging-brushes123");
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({
            behavior: "smooth",
            block: "center", // Center vertically in the viewport
          });
        }, 500); // delay to ensure rendering
      }
    }
  }, [location]);

  return null;
};

export default ScrollToBridgingBrushes;
