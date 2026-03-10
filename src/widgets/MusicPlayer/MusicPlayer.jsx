import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      <motion.button
        id="muteButton"
        onClick={toggleMute}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: isMuted
            ? "0 4px 15px rgba(139,92,246,0.2)"
            : [
                "0 0 0px rgba(139,92,246,0)",
                "0 0 20px rgba(139,92,246,0.6)",
                "0 0 0px rgba(139,92,246,0)",
              ],
        }}
        transition={{
          boxShadow: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
        aria-label="Control de música"
        className="bg-romantic-purple flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-xl text-white shadow-lg transition-colors duration-300"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isMuted ? "muted" : "playing"}
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 45 }}
            transition={{ duration: 0.2 }}
          >
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </div>
  );
};
