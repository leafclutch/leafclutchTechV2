import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, FileText, Code, CheckCircle2 } from "lucide-react";

interface CardData {
  id: number;
  label: string;
  value: string;
  description: string;
  rotation: number;
  desktopY: number;
  desktopX: number;
  icon: React.ElementType;
}

// Fixed coordinate system for desktop
const VIEW_W = 1500;
const VIEW_H = 580; // Slightly increased to accommodate larger cards
const CARD_W_DESKTOP = 265; // Increased from 250
const CARD_H_DESKTOP = 345; // Increased from 320
const DESKTOP_NOTCH_OFFSET = 23; // Adjusted for slightly larger cards

// Mobile coordinates
const CARD_W_MOBILE = 295; // Increased from 280
const CARD_H_MOBILE = 345; // Increased from 320
const GAP_MOBILE = 160;
const MOBILE_NOTCH_OFFSET = 18;

const cards: CardData[] = [
  {
    id: 1,
    label: "Discovery Phase",
    value: "01",
    description: "understanding your needs and goals",
    rotation: -5,
    desktopY: 290,
    desktopX: 190,
    icon: Search,
  },
  {
    id: 2,
    label: "Project Planning",
    value: "02",
    description: "creating a detailed roadmap and timeline",
    rotation: 5,
    desktopY: 290,
    desktopX: 565,
    icon: FileText,
  },
  {
    id: 3,
    label: "Development",
    value: "03",
    description: "building with agile methodology",
    rotation: -4,
    desktopY: 290,
    desktopX: 940,
    icon: Code,
  },
  {
    id: 4,
    label: "Final Delivery",
    value: "04",
    description: "Testing, deployment, and ongoing support",
    rotation: 6,
    desktopY: 290,
    desktopX: 1315,
    icon: CheckCircle2,
  },
];

const TimelineComponent: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => window.innerWidth < 1024;
    const handleResize = () => setIsMobile(checkMobile());
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pathSegments = useMemo(() => {
    const segments: string[] = [];
    if (isMobile) {
      for (let i = 0; i < cards.length - 1; i++) {
        const startX = CARD_W_MOBILE / 2;
        const startY =
          i * (CARD_H_MOBILE + GAP_MOBILE) +
          CARD_H_MOBILE +
          MOBILE_NOTCH_OFFSET;
        const endX = CARD_W_MOBILE / 2;
        const endY =
          (i + 1) * (CARD_H_MOBILE + GAP_MOBILE) - MOBILE_NOTCH_OFFSET;

        const cp1Y = startY + (endY - startY) * 0.4;
        const cp2Y = startY + (endY - startY) * 0.6;
        const cp1X = startX - 75;
        const cp2X = startX + 75;

        segments.push(
          `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`
        );
      }
    } else {
      for (let i = 0; i < cards.length - 1; i++) {
        const current = cards[i];
        const next = cards[i + 1];

        // Connection logic using the VIEW_W/VIEW_H coordinate system
        const startX =
          current.desktopX + CARD_W_DESKTOP / 2 + DESKTOP_NOTCH_OFFSET;
        const startY = current.desktopY;

        const endX = next.desktopX - CARD_W_DESKTOP / 2 - DESKTOP_NOTCH_OFFSET;
        const endY = next.desktopY;

        const cp1X = startX + (endX - startX) * 0.45;
        const cp2X = startX + (endX - startX) * 0.55;

        const curveOffset = i % 2 === 0 ? 85 : -85;
        const cp1Y = startY + curveOffset;
        const cp2Y = endY + curveOffset;

        segments.push(
          `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`
        );
      }
    }
    return segments;
  }, [isMobile]);

  const mobileTotalHeight =
    cards.length * CARD_H_MOBILE + (cards.length - 1) * GAP_MOBILE;

  return (
    <div
      className={`relative w-full mx-auto overflow-visible transition-all duration-700 ${
        isMobile
          ? "flex flex-col items-center px-4 pt-4"
          : "aspect-[15/5.8] max-w-[1500px]"
      }`}
      style={isMobile ? { gap: `${GAP_MOBILE}px` } : {}}
    >
      {/* Responsive SVG Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-visible">
        <svg
          viewBox={
            isMobile
              ? `0 0 ${CARD_W_MOBILE} ${mobileTotalHeight}`
              : `0 0 ${VIEW_W} ${VIEW_H}`
          }
          className="w-full h-full overflow-visible"
          preserveAspectRatio={isMobile ? "xMidYMin meet" : "xMidYMid meet"}
        >
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="8"
              refX="9"
              refY="4"
              orient="auto"
            >
              <polygon points="0 0, 10 4, 0 8" fill="#00D1C1" />
            </marker>
          </defs>

          {pathSegments.map((d, i) => (
            <motion.path
              key={`${isMobile ? "mobile" : "desktop"}-${i}`}
              d={d}
              fill="none"
              stroke="#00D1C1"
              strokeWidth={isMobile ? "4" : "3.5"}
              strokeLinecap="round"
              markerEnd="url(#arrowhead)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: {
                  duration: 1.2,
                  delay: i * 0.25,
                  ease: "easeInOut",
                },
                opacity: { duration: 0.4, delay: i * 0.25 },
              }}
            />
          ))}
        </svg>
      </div>

      {/* Responsive Cards */}
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: card.rotation,
          }}
          viewport={{ once: true, margin: "-50px" }}
          style={
            !isMobile
              ? {
                  position: "absolute",
                  left: `${
                    ((card.desktopX - CARD_W_DESKTOP / 2) / VIEW_W) * 100
                  }%`,
                  top: `${
                    ((card.desktopY - CARD_H_DESKTOP / 2) / VIEW_H) * 100
                  }%`,
                  width: `${(CARD_W_DESKTOP / VIEW_W) * 100}%`,
                  height: `${(CARD_H_DESKTOP / VIEW_H) * 100}%`,
                }
              : {
                  width: `${CARD_W_MOBILE}px`,
                  height: `${CARD_H_MOBILE}px`,
                  position: "relative",
                }
          }
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 18,
            delay: index * 0.12,
          }}
          whileHover={{
            scale: 1.06,
            rotate: card.rotation * 0.15,
            zIndex: 50,
            transition: { duration: 0.3 },
          }}
          className="group relative flex flex-col items-center px-7 py-9 bg-primary dark:bg-slate-900 rounded-[2.8rem] shadow-[0_22px_55px_-15px_rgba(0,0,0,0.09)] dark:shadow-[0_22px_55px_-15px_rgba(0,0,0,0.65)] justify-center cursor-default transition-all duration-300 hover:bg-[#00D1C1] dark:hover:bg-[#00D1C1] hover:shadow-[0_42px_85px_-20px_rgba(0,209,193,0.42)]"
        >
          {/* Connector Notches (Diamond shapes) */}
          {!isMobile && index !== 0 && (
            <div
              className="absolute top-1/2 -left-[15px] -translate-y-1/2 w-9 h-9 bg-primary dark:bg-slate-900 rotate-45 z-[-1] rounded-sm group-hover:bg-[#00D1C1] transition-colors duration-300"
              style={{ clipPath: "polygon(0% 0%, 100% 0%, 0% 100%)" }}
            />
          )}
          {!isMobile && index !== cards.length - 1 && (
            <div
              className="absolute top-1/2 -right-[15px] -translate-y-1/2 w-9 h-9 bg-primary dark:bg-slate-900 rotate-45 z-[-1] rounded-sm group-hover:bg-[#00D1C1] transition-colors duration-300"
              style={{ clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)" }}
            />
          )}

          {isMobile && index !== 0 && (
            <div
              className="absolute left-1/2 -translate-x-1/2 w-9 h-9 bg-primary dark:bg-slate-900 rotate-45 z-[-1] rounded-sm group-hover:bg-[#00D1C1] transition-colors duration-300"
              style={{
                top: `-${MOBILE_NOTCH_OFFSET + 1}px`,
                clipPath: "polygon(0% 0%, 100% 0%, 0% 100%)",
              }}
            />
          )}
          {isMobile && index !== cards.length - 1 && (
            <div
              className="absolute left-1/2 -translate-x-1/2 w-9 h-9 bg-primary dark:bg-slate-900 rotate-45 z-[-1] rounded-sm group-hover:bg-[#00D1C1] transition-colors duration-300"
              style={{
                bottom: `-${MOBILE_NOTCH_OFFSET + 1}px`,
                clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)",
              }}
            />
          )}

          <div className="mb-5 w-15 h-15 rounded-full  shadow-sm flex items-center justify-center  dark:border-slate-800 transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/30 shrink-0">
            <card.icon
              className="w-10 h-10 text-white group-hover:text-white transition-colors duration-300"
              strokeWidth={2.2}
            />
          </div>

          <div className="text-center flex flex-col select-none">
            <h3 className="text-[0.78rem] font-bold text-white dark:text-slate-400 leading-snug mb-2 tracking-widest transition-colors duration-300 group-hover:text-white uppercase">
              {card.label}
            </h3>

            <div className="text-5xl font-black text-white dark:text-blue-400 tracking-tighter transition-colors duration-300 group-hover:text-white mb-3">
              {card.value}
            </div>

            <p className="text-[0.82rem] font-medium text-white dark:text-slate-500 leading-relaxed transition-colors duration-300 group-hover:text-white/90 px-2 italic">
              "{card.description}"
            </p>
          </div>

          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.8rem] pointer-events-none" />
        </motion.div>
      ))}
    </div>
  );
};

export default TimelineComponent;
