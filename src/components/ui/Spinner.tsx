import React from "react";

interface ProfessionalSpinnerProps {
  size?: string | number;
  /** Primary gradient color. Defaults to the brand Mint (#3AE39E). */
  primaryColor?: string;
  /** Secondary gradient color. Defaults to the brand Teal (#47C6B6). */
  secondaryColor?: string;
  /** Color of the background track. Defaults to the brand Navy (#081E67). */
  trackColor?: string;
  /** Animation duration for the full rotation. Defaults to '2s'. */
  speed?: string;
}

/**
 * A self-contained, high-performance loading spinner.
 * Features a smooth dual-animation system (spin + dash) and SVG gradients.
 */
const Spinner: React.FC<ProfessionalSpinnerProps> = ({
  size = "8rem",
  primaryColor = "#3AE39E",
  secondaryColor = "#47C6B6",
  trackColor = "#081E67",
  speed = "2s",
}) => {
  // Unique ID for the gradient to prevent collisions if multiple instances exist
  const gradientId = React.useId().replace(/:/g, "");

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 50 50"
        style={{ animation: `smooth-spin ${speed} linear infinite` }}
      >
        <defs>
          <linearGradient
            id={`gradient-${gradientId}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
        </defs>
        <circle
          className="opacity-10"
          cx="25"
          cy="25"
          r="20"
          stroke={trackColor}
          strokeWidth="3.5"
          fill="none"
        />
        <circle
          cx="25"
          cy="25"
          r="20"
          stroke={`url(#gradient-${gradientId})`}
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          style={{
            transformOrigin: "center",
            animation: "smooth-dash 1.5s ease-in-out infinite",
          }}
        />
      </svg>
      <style>{`
        @keyframes smooth-spin {
          100% { transform: rotate(360deg); }
        }
        @keyframes smooth-dash {
          0% {
            stroke-dasharray: 1, 150;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -35;
          }
          100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -124;
          }
        }
      `}</style>
    </div>
  );
};

export default Spinner;
