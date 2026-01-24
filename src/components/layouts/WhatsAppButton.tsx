import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = "9766715768",
  message = "Hi! I'm interested in your services.",
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-show tooltip after 3 seconds for extra engagement
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const encodedMessage = message ? encodeURIComponent(message) : "";
    const whatsappUrl = `https://wa.me/${phoneNumber
      .replace(/\+/g, "")
      .replace(/\s/g, "")}${encodedMessage ? `?text=${encodedMessage}` : ""}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Floating Tooltip/Bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="pointer-events-auto bg-white shadow-2xl rounded-2xl p-4 border border-gray-100 max-w-[240px] relative mb-2"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="absolute -top-2 -right-2 bg-gray-100 rounded-full p-1 text-gray-500 hover:text-gray-800 transition-colors focus:outline-none"
              aria-label="Close tooltip"
            >
              <X size={14} />
            </button>
            <p className="text-sm font-medium text-gray-800">
              Need help? Chat with us instantly on WhatsApp! 👋
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative pointer-events-auto">
        {/* Pulsing Ripple Effect */}
        <motion.div
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.4, 0, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-green-500 rounded-full"
        />

        {/* The Main Button */}
        <motion.button
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: [0, -8, 0], // Subtle continuous bounce
            rotate: isHovered ? [0, -5, 5, -5, 0] : 0, // Wiggle on hover
          }}
          transition={{
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 0.5,
              repeat: Infinity,
            },
          }}
          className="relative bg-[#25D366] p-4 rounded-full shadow-2xl flex items-center justify-center text-white ring-4 ring-white ring-opacity-50 focus:outline-none transition-shadow hover:shadow-green-200/50"
          aria-label="Contact on WhatsApp"
        >
          <FaWhatsapp className="w-8 h-8" />
        </motion.button>
      </div>
    </div>
  );
};

export default WhatsAppButton;
