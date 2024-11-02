import React, { useEffect, useRef } from "react";

function ScreenFitText(props) {
  // Refs to access the container and text elements
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Function to resize the text to fit the container
    const resizeText = () => {
      const container = containerRef.current; // Get the container element
      const text = textRef.current; // Get the text element

      // Return early if elements are not available
      if (!container || !text) {
        return;
      }

      const containerWidth = container.offsetWidth; // Get the container's width
      let min = 1; // Minimum font size
      let max = 2500; // Maximum font size

      // Binary search to find the maximum font size that fits
      while (min <= max) {
        const mid = Math.floor((min + max) / 2); // Calculate the mid-point
        text.style.fontSize = mid + "px"; // Set the font size

        // Check if the text fits within the container
        if (text.offsetWidth <= containerWidth) {
          min = mid + 1; // Increase font size
        } else {
          max = mid - 1; // Decrease font size
        }
      }

      // Set the font size to the largest size that fits
      text.style.fontSize = max + "px";
    };

    // Call resizeText immediately with a delay to ensure layout is stable
    const timeoutId = setTimeout(resizeText, 100); // Delay by 100ms

    // Add resize event listener
    window.addEventListener("resize", resizeText);

    return () => {
      // Clean up event listener and timeout on unmount
      clearTimeout(timeoutId);
      window.removeEventListener("resize", resizeText);
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="flex items-center justify-center h-full" ref={containerRef}>
      <span
        ref={textRef}
        className="whitespace-nowrap text-center font-bold uppercase text-white"
        style={{
          fontFamily: "porlane",
          fontSize: "305px", // Initial size (can be adjusted)
          lineHeight: "250px", // Line height to match the font size
          textAlign: "center", // Center text
          fontKerning: "auto", // Enable kerning
          fontOpticalSizing: "auto", // Enable optical sizing for better appearance
          fontWeight: 400, // Font weight (not covered by Tailwind)
        }}
      >
        {props.name} {/* Display the name prop */}
      </span>
    </div>
  );
}

export default ScreenFitText;
