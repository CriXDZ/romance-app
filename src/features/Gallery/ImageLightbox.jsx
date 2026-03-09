import { motion } from "framer-motion";

/**
 * Visor de imagen individual (Lightbox).
 * [CODE-02] Extraído de RomanticGallery.
 */
export const ImageLightbox = ({ image, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[150] flex cursor-zoom-out items-center justify-center bg-black/80 p-4 backdrop-blur-md"
    >
      <motion.div
        layoutId={`gallery-image-${image.index}`}
        className="relative max-h-[90vh] max-w-[95vw] cursor-default overflow-hidden rounded-2xl bg-white p-2 shadow-2xl md:p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt="Ampliación"
          className="pointer-events-none max-h-[80vh] w-auto rounded-xl object-contain shadow-inner"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/70 text-xl font-bold text-gray-800 shadow-md backdrop-blur-sm transition-all hover:scale-110 hover:bg-white active:scale-95"
          aria-label="Cerrar imagen"
        >
          ✕
        </button>
      </motion.div>
    </motion.div>
  );
};
