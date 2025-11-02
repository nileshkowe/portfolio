/**
 * @file LineDeco.tsx
 * @description Renders a decorative horizontal line, often used with section titles.
 */
import React from 'react';

interface LineDecoProps {
  color?: string;
  width?: string | number;
  rawHeight?: number; // Renamed to avoid conflict, this is the numeric height for calcs
  svgHeight?: string | number; // This will be used for the SVG height attribute
  className?: string;
}

/**
 * LineDeco component - Renders a decorative horizontal SVG line.
 * Based on Figma elements like node I23:975;23:975 (part of H2 component for section titles).
 * Figma style: color #C778DD, height 1px (visually more like 2px in some contexts).
 * @param {LineDecoProps} props - The props for the component.
 * @returns {JSX.Element} The LineDeco component.
 */
const LineDeco: React.FC<LineDecoProps> = ({
  color = '#C778DD',
  width = '100%',
  rawHeight = 2, // Figma uses 1px, but 2px is often more visible
  svgHeight = '2px',
  className = ''
}) => {
  const numericHeight = typeof rawHeight === 'string' ? parseInt(rawHeight, 10) : rawHeight;
  if (isNaN(numericHeight)) {
    console.warn("LineDeco: Invalid numericHeight after parsing, defaulting to 2.");
    // Fallback to a default if parsing fails, though rawHeight is now number
  }
  const finalNumericHeight = isNaN(numericHeight) ? 2 : numericHeight;

  return (
    <svg 
      width={width}
      height={svgHeight} // Use svgHeight for the SVG element itself
      viewBox={`0 0 ${typeof width === 'number' ? width : 100} ${finalNumericHeight}`} 
      preserveAspectRatio="none"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-hidden="true"
    >
      <line 
        x1="0" 
        y1={finalNumericHeight / 2} 
        x2={typeof width === 'number' ? width : "100%"} 
        y2={finalNumericHeight / 2} 
        stroke={color} 
        strokeWidth={finalNumericHeight} // Use numeric height for strokeWidth
      />
    </svg>
  );
};

export default LineDeco; 