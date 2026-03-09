import { useState, useRef, useEffect } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import musicFile from "@shared/assets/audio/audio.opus";

export const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      if (isMuted) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
      if (!isMuted) {
        audioRef.current.play().catch((error) => {
          console.log("Autoplay bloqueado:", error);
        });
      }
    }
  }, [isMuted]);

  return (
    <div className="fixed top-4 right-4 z-[9999]">
      <audio ref={audioRef} src={musicFile} loop />
      <button
        id="muteButton"
        onClick={toggleMute}
        aria-label="Control de música"
        className="bg-romantic-purple hover:bg-romantic-hover-purple animate-heartbeat flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-xl text-white shadow-[0_4px_15px_rgba(139,92,246,0.3)] transition-all duration-500 hover:scale-110 hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] active:scale-95"
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
    </div>
  );
};
