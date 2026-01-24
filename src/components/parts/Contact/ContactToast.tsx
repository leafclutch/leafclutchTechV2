import React, { useEffect } from "react";
import { Loader2, ExternalLink } from "lucide-react";

interface ContactToastProps {
  show: boolean;
  onClose: () => void;
}

const ContactToast: React.FC<ContactToastProps> = ({ show, onClose }) => {
  useEffect(() => {
    if (!show) return;

    const handleVisibilityChange = () => {
      // When user comes back to this tab
      if (document.visibilityState === "visible") {
        onClose();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [show, onClose]);

  return (
    <div
      className={`fixed bottom-8 right-8 z-[100] transition-all duration-500 transform ${
        show
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl flex items-start space-x-4 max-w-sm">
        <div className="w-10 h-10 bg-accent/10 flex items-center justify-center rounded-xl flex-shrink-0">
          <Loader2 className="w-6 h-6 text-accent animate-spin" />
        </div>

        <div className="space-y-1 text-left">
          <h4 className="text-lg font-bold text-foreground flex items-center">
            Redirecting to Mail Client...
            <ExternalLink className="w-4 h-4 ml-2 opacity-50" />
          </h4>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Please check your mail application (like Gmail) to finalize and send
            your message.
          </p>
        </div>

        <button
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground transition-colors font-bold text-lg leading-none"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default ContactToast;
