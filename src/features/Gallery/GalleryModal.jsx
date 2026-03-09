import { motion } from "framer-motion";
import {
  GALLERY_IMAGES,
  MODAL_POSITIONS,
  COLLAGE_ROTATIONS,
} from "@shared/constants/galleryConfig";

/**
 * Modal inmersivo de la galería con fotos arrastrables.
 * [CODE-02 / MOB-04 / MOB-05] Implementa 100dvh y drag elástico.
 */
export const GalleryModal = ({ onClose, onSelectImage, containerRef }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-white/30 backdrop-blur-xl"
      style={{ height: "100dvh" }}
    >
      {/* Header / Botón Volver */}
      <div className="absolute top-0 right-0 left-0 z-[110] flex items-center justify-between p-4 md:p-8">
        <button
          onClick={onClose}
          className="font-romantic text-romantic-purple flex cursor-pointer items-center justify-center gap-2 rounded-[var(--radius-btn)] border border-purple-200 bg-white/90 px-5 py-2 pt-3 text-lg shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:bg-white md:text-2xl"
        >
          ← Volver
        </button>
      </div>

      {/* Zona de Arrastre de Fotos */}
      <div
        ref={containerRef}
        className="relative mt-20 w-full max-w-[800px]"
        style={{ height: "calc(100dvh - 140px)" }}
      >
        {GALLERY_IMAGES.map((img, index) => (
          <motion.div
            key={`dynamic-${img.id}`}
            layoutId={`gallery-image-${index}`}
            drag
            dragConstraints={containerRef}
            dragElastic={0.1}
            whileDrag={{ scale: 1.1, zIndex: 100, cursor: "grabbing" }}
            initial={{
              top: MODAL_POSITIONS[index].top,
              left: MODAL_POSITIONS[index].left,
              rotate: COLLAGE_ROTATIONS[index],
              zIndex: (index + 1) * 10,
            }}
            className="absolute w-[160px] cursor-grab rounded-xl bg-white p-2 pb-8 shadow-2xl transition-shadow hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] md:w-[270px] md:p-4 md:pb-12"
            style={{ touchAction: "none" }}
            onClick={() => onSelectImage(img, index)}
            whileHover={{ zIndex: 90 }}
          >
            <div className="pointer-events-none h-[140px] w-full overflow-hidden rounded-lg border border-gray-100 md:h-[240px]">
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover"
                draggable="false"
              />
            </div>
            <div className="pointer-events-none absolute right-0 bottom-2 left-0 flex justify-center md:bottom-3">
              <span className="text-xl text-pink-500 opacity-80 md:text-2xl">
                ❤️
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="absolute bottom-4 font-sans text-sm tracking-wide text-gray-500 opacity-80 md:text-base">
        Arrastra las fotos o tócalas para acercar
      </p>
    </motion.div>
  );
};
