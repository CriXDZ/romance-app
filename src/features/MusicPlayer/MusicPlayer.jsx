import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
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
    }
  }, []);

  return (
    <div className="fixed right-5 bottom-5 z-[200]">
      <audio ref={audioRef} src={musicFile} loop />
      <motion.button
        id="muteButton"
        onClick={toggleMute}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: isMuted
            ? "0 0 0px rgba(147, 51, 234, 0)"
            : [
                "0 0 0px rgba(147, 51, 234, 0)",
                "0 0 15px rgba(147, 51, 234, 0.4)",
                "0 0 0px rgba(147, 51, 234, 0)",
              ],
        }}
        transition={{
          boxShadow: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
        className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/80 text-2xl shadow-lg backdrop-blur-sm transition-colors md:h-14 md:w-14 ${
          isMuted ? "text-gray-400" : "text-romantic-purple"
        }`}
        aria-label={isMuted ? "Activar música" : "Silenciar música"}
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </motion.button>
    </div>
  );
};
