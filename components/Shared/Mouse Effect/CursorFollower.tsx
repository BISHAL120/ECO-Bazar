"use client";

import React, { useState, useEffect } from "react";

const CursorFollower = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCoords({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove); // Cleanup
  }, []);

  return (
    <>
      <div
        className="cursor-follower"
        style={{ left: coords.x + "px", top: coords.y + "px" }}
      >
        <div className="cursor-dot"></div>
      </div>
    </>
  );
};

export default CursorFollower;
