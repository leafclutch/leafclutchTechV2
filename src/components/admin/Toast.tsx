import { useEffect } from "react";
import { CheckCircle, XCircle, X } from "lucide-react";

interface Props {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

export default function Toast({ message, type, onClose }: Props) {
  useEffect(() => {
    const t = setTimeout(onClose, 3500);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-white border border-slate-200 shadow-lg rounded-xl px-4 py-3 max-w-sm animate-fade-in">
      {type === "success"
        ? <CheckCircle size={18} className="text-green-500 shrink-0" />
        : <XCircle size={18} className="text-red-500 shrink-0" />
      }
      <p className="text-sm text-slate-700 flex-1">{message}</p>
      <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
        <X size={14} />
      </button>
    </div>
  );
}
