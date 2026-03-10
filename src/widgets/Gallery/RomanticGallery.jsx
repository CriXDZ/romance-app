import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart } from "react-icons/fa";

import picture1 from "@shared/assets/img/Picture01.webp";
import picture2 from "@shared/assets/img/Picture02.webp";
import picture3 from "@shared/assets/img/Picture03.webp";
import picture4 from "@shared/assets/img/Picture04.webp";

const images = [picture1, picture2, picture3, picture4];

export const RomanticGallery = () => {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  return (
    <div className="flex w-full flex-col items-center py-2">
      <h1 className="font-romantic text-romantic-purple animate-sway mb-8 text-center text-3xl tracking-wide drop-shadow-sm md:text-4xl">
        Grisbelys Nicol Contreras Cañizalez mi dulce amor
      </h1>

      {/* Galería Colgante */}
      <div className="relative mx-auto w-full max-w-[420px] px-8 py-6 md:px-0">
        {/* Cuerda central */}
        <div className="absolute top-4 bottom-4 left-1/2 z-0 w-1 -translate-x-1/2 rounded-full bg-[#d8b4fe]/80 shadow-[0_0_8px_rgba(216,180,254,0.6)]"></div>

        <div className="relative z-10 flex w-full flex-col gap-10 sm:gap-14">
          {images.map((src, i) => {
            const isRight = i % 2 === 0;
            return (
              <div
                key={i}
                className={`flex w-full ${isRight ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`relative w-full max-w-[230px] cursor-zoom-in rounded-xl border border-white/60 bg-gradient-to-br from-white to-[#f9f7ff] p-2 pb-10 shadow-lg transition-all duration-300 sm:max-w-[250px] ${
                    isRight ? "rotate-3" : "-rotate-3"
                  }`}
                  style={{ transformOrigin: "top center" }}
                  onClick={() => setLightboxSrc(src)}
                >
                  {/* Pin conectando a la cuerda - Gancho con sombra proyectada */}
                  <div
                    className="absolute top-[-14px] z-30 flex h-8 w-8 items-center justify-center"
                    style={{
                      [isRight ? "left" : "right"]: "18%",
                      transform: isRight
                        ? "translateX(-50%)"
                        : "translateX(50%)",
                    }}
                  >
                    {/* El "gancho" que envuelve la cuerda */}
                    <div className="bg-romantic-purple/80 absolute inset-x-0 top-1/2 h-1 w-full -translate-y-1/2 rounded-full blur-[0.5px]"></div>
                    {/* La bolita morada (Pin Principal) */}
                    <div className="bg-romantic-purple relative flex h-7 w-7 items-center justify-center rounded-full border-[3px] border-white shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
                      <div className="h-2 w-2 rounded-full bg-white/40 blur-[1px]"></div>
                    </div>
                  </div>

                  <img
                    src={src}
                    alt={`Foto ${i + 1}`}
                    loading="lazy"
                    className="pointer-events-none aspect-[4/5] w-full rounded-lg object-cover shadow-inner sm:aspect-square"
                  />

                  {/* Pie de foto con decoración de corazón */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-3 flex items-center justify-center gap-1.5 opacity-60">
                    <FaHeart className="text-romantic-purple text-[10px]" />
                    <div className="h-0.5 w-6 rounded-full bg-purple-200" />
                    <FaHeart className="text-romantic-purple text-[10px]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox de ampliación */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxSrc(null)}
            className="fixed inset-0 z-[200] flex cursor-zoom-out items-center justify-center bg-black/92 p-4"
          >
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              src={lightboxSrc}
              alt="Vista ampliada"
              className="max-h-[90vh] max-w-[95vw] rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setLightboxSrc(null)}
              className="absolute top-5 right-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/20 text-xl font-bold text-white shadow-md backdrop-blur-sm transition-all hover:bg-white/40"
              aria-label="Cerrar imagen"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
