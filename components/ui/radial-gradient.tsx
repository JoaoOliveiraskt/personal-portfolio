import React from 'react';

interface MousePosition {
  x: number;
  y: number;
}

interface RadialGradientProps {
  mousePosition: MousePosition;
}

const RadialGradient: React.FC<RadialGradientProps> = ({ mousePosition }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: isHovered
          ? `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 122, 255, 0.1), transparent)`
          : 'transparent',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    ></div>
  );
};

export default RadialGradient;
