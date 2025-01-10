import React from "react";

const GridBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 grid-pattern-large" />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/80" />
    </div>
  );
};

export default GridBackground;
