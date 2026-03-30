import React, { useEffect } from "react";
import "../Styles/contactus2.css";

const Newsletter = () => {
  useEffect(() => {
    // Create and append the Tally widget script to the document head
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;

    script.onload = () => {
      if (window.Tally) {
        window.Tally.loadEmbeds();
      }
    };

    script.onerror = () => {
      console.error("Failed to load the Tally script.");
    };

    document.head.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      className="bbm"
      style={{
        margin: 0,
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <iframe
        data-tally-src="https://tally.so/r/nWP9je"
        width="100%"
        height="100%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="Newsletter sign-up"
      ></iframe>
    </div>
  );
};

export default Newsletter;
