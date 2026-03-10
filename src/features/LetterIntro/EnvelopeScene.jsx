import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export const EnvelopeScene = ({ onOpenComplete }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isLetterVisible, setIsLetterVisible] = useState(false);
  const [hearts] = useState(() =>
    Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 3 + 2}s`,
      delay: `${Math.random()}s`,
      rotateEnd: Math.random() > 0.5 ? 45 : -45,
    }))
  );

  const handleOpen = () => {
    if (isOpened) return;
    setIsOpened(true);
    setTimeout(() => {
      setIsLetterVisible(true);
    }, 800);
  };

  const handleContinue = (e) => {
    e.stopPropagation();
    onOpenComplete();
  };

  return (
    <div className="perspective-1000 relative flex h-[500px] w-full max-w-md items-center justify-center">
      {/* Floating Background Hearts */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="text-romantic-pink/30 absolute z-0 text-2xl"
          initial={{ y: "100%", x: heart.left, opacity: 0 }}
          animate={{
            y: ["100%", "-200%"],
            opacity: [0, 0.6, 0],
            rotate: [0, heart.rotateEnd],
          }}
          transition={{
            duration: parseFloat(heart.animationDuration),
            repeat: Infinity,
            delay: parseFloat(heart.delay),
            ease: "easeInOut",
          }}
        >
          <FaHeart />
        </motion.div>
      ))}

      {/* Main Container */}
      <div
        className="relative z-10 h-[220px] w-[320px] cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
        onClick={handleOpen}
      >
        {/* Envelope Back */}
        <div className="border-romantic-purple/30 absolute inset-0 z-0 rounded-2xl border bg-[#fdfaff] shadow-xl"></div>

        {/* Letter Inside */}
        <motion.div
          className="absolute right-[10px] left-[10px] z-[40] flex flex-col items-center justify-center rounded-md bg-white p-4 text-center shadow-md"
          initial={{ top: "10px", height: "200px" }}
          animate={
            isLetterVisible
              ? {
                  top: ["10px", "-160px", "-160px", "-50px"], // REBOTE
                  height: "320px",
                  scale: 1.05,
                  zIndex: [10, 10, 50, 50],
                  boxShadow:
                    "0 25px 50px -12px rgba(124, 58, 237, 0.25), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }
              : { top: "10px", height: "200px", zIndex: 10 }
          }
          transition={{
            top: {
              delay: 0.1,
              duration: 1.8,
              ease: [0.34, 1.56, 0.64, 1], // Custom bounce-back cubic-bezier
              times: [0, 0.3, 0.45, 1],
            },
            height: { delay: 0.1, duration: 1.2 },
            zIndex: { duration: 1.5, times: [0, 0.3, 0.4, 1] },
            scale: { type: "spring", stiffness: 80, damping: 12, delay: 0.4 },
          }}
        >
          <div className="border-romantic-purple/30 flex h-full w-full flex-col items-center justify-center gap-2 rounded border-2 border-dashed p-4">
            <FaHeart className="text-romantic-purple mb-1 animate-pulse text-3xl" />
            <h2 className="font-romantic text-romantic-purple text-xl">
              Para ti...
            </h2>
            <p className="max-w-[200px] text-sm leading-relaxed font-medium text-gray-600">
              Tengo algo muy especial que decirte. ¿Podrías leerlo todo?
            </p>

            <AnimatePresence>
              {isLetterVisible && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  onClick={handleContinue}
                  className="bg-romantic-purple hover:bg-romantic-hover-purple mt-4 rounded-full px-10 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:animate-pulse hover:shadow-[0_10px_25px_rgba(124,58,237,0.4)] active:scale-95"
                >
                  ¡Vamos!
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Envelope Front Flaps (Left, Right, Bottom) */}
        <div className="pointer-events-none absolute inset-0 z-30">
          {/* Left Flap */}
          <div
            className="border-romantic-purple/10 absolute top-0 bottom-0 left-0 w-1/2 rounded-l-2xl border-t border-r bg-gradient-to-br from-[#fdfaff] to-[#f3f0ff] shadow-[4px_0_15px_rgba(0,0,0,0.02)]"
            style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
          ></div>
          {/* Right Flap */}
          <div
            className="border-romantic-purple/10 absolute top-0 right-0 bottom-0 w-1/2 rounded-r-2xl border-t border-l bg-gradient-to-bl from-[#fdfaff] to-[#f3f0ff] shadow-[-4px_0_15px_rgba(0,0,0,0.02)]"
            style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}
          ></div>
          {/* Bottom Flap */}
          <div
            className="border-romantic-purple/20 absolute bottom-0 left-0 h-1/2 w-full rounded-b-2xl border-t bg-gradient-to-t from-[#f0ebff] to-[#f7f4ff] shadow-[0_-8px_20px_rgba(0,0,0,0.03)]"
            style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}
          ></div>
        </div>

        {/* Envelope Top Flap Wrapper (No ClipPath aquí para no hundir/recortar el sello) */}
        <motion.div
          className="absolute top-0 left-0 flex h-[120px] w-full origin-top justify-center"
          style={{ backfaceVisibility: "hidden" }}
          initial={{ rotateX: 0 }}
          animate={{ rotateX: isOpened ? 180 : 0, zIndex: isOpened ? 20 : 40 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Forma triangular de la solapa con ClipPath */}
          <div
            className="border-romantic-purple/25 absolute inset-0 rounded-t-2xl border-b bg-[#fdfaff] shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
            style={{ clipPath: "polygon(0 0, 50% 100%, 100% 0)" }}
          />

          {/* Heart Seal Explosivo (Sin circulo) */}
          <motion.div
            className="text-romantic-purple absolute bottom-0 z-[60] flex translate-y-1/2 items-center justify-center text-5xl drop-shadow-[0_0_15px_rgba(124,58,237,0.8)]"
            animate={{
              opacity: isOpened ? 0 : 1,
              scale: isOpened ? 3 : 1, // Explosión al abrir
              rotate: isOpened ? 15 : 0,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <FaHeart />
          </motion.div>
        </motion.div>
      </div>

      {/* Helper text */}
      <AnimatePresence>
        {!isOpened && (
          <motion.div
            className="absolute right-0 bottom-10 left-0 animate-pulse text-center font-medium text-white/90 drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Toca la carta para abrir
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
