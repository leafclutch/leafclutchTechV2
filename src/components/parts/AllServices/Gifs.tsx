import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface GifsProps {
  src: string;
  alt?: string;
  className?: string;
}

export default function Gifs({ src, className }: GifsProps) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover object-center"
      /> */}
      <DotLottieReact src={src} loop autoplay />
    </div>
  );
}
