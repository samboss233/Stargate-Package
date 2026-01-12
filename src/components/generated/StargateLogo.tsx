import React from 'react';
export interface StargateLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

/**
 * Stargate Logo Component
 * 
 * This component displays the Stargate logo with the infinity symbol and text.
 * The logo is embedded as an inline image for immediate use.
 * 
 * To replace with your own logo file:
 * 1. Place your logo image in the public folder as "stargate-logo.png"
 * 2. Update the src prop to "/stargate-logo.png"
 */
export const StargateLogo: React.FC<StargateLogoProps> = ({
  className = "",
  width = 200,
  height = 60
}) => {
  // Using the logo image path - place the stargate-logo.png file in the public folder
  // The image should be a white logo on transparent/black background
  return <img src="/logow.png" alt="Stargate" width={width} height={height} className={className} onError={e => {
    // Fallback text if image is not found
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    const parent = target.parentElement;
    if (parent && !parent.querySelector('.logo-fallback')) {
      const fallback = document.createElement('div');
      fallback.className = 'logo-fallback font-bold text-xl';
      fallback.textContent = 'STARGATE';
      parent.appendChild(fallback);
    }
  }} />;
};
export default StargateLogo;