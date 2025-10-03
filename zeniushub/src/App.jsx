import React, { useRef, useEffect } from "react";
import Button from "@mui/material/Button";
import { gsap } from "gsap";

const App = () => {
  const btnRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Button simple fade + slide
    gsap.from(btnRef.current, {
      opacity: 0,
      y: -30, // thoda upar se
      duration: 1,
      ease: "power2.out",
    });

    // Text simple fade + slide
    gsap.from(textRef.current, {
      opacity: 0,
      x: -30, // left se
      duration: 1,
      delay: 0.5, // thoda baad me aaye
      ease: "power2.out",
    });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <Button
        ref={btnRef}
        style={{ color: "black", backgroundColor: "pink", margin: 10 }}
        variant="contained"
      >
        Hello world
      </Button>

      <div ref={textRef} className="text-red-500 m-6">
        Tailwind downloaded successfully
      </div>
    </div>
  );
};

export default App;
