import { motion } from "framer-motion";
import {
  GALLERY_IMAGES,
  COLLAGE_ROTATIONS,
} from "@shared/constants/galleryConfig";

/**
 * Componente que muestra las fotos en un grid 2x2.
 * [CODE-02 / MOB-02] Refactorizado para SRP y responsividad.
 */
export const PhotoCollage = ({ onOpenGallery, isHidden }) => {
  return (
    <div
      className={`w-full transition-opacity duration-300 ${
        isHidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="mx-auto grid max-w-[340px] grid-cols-2 gap-3 md:max-w-[460px] md:gap-4">
        {GALLERY_IMAGES.map((img, index) => (
          <motion.div
            key={`static-${img.id}`}
            layoutId={`gallery-image-${index}`}
            className="cursor-pointer rounded-xl bg-white p-2 pb-6 shadow-md shadow-pink-100/30 transition-shadow hover:shadow-xl md:p-3 md:pb-10"
            style={{ rotate: COLLAGE_ROTATIONS[index] }}
            onClick={onOpenGallery}
            whileHover={{ scale: 1.04, zIndex: 10 }}
            transition={{ duration: 0.25 }}
          >
            <div className="h-[130px] w-full overflow-hidden rounded-lg border border-gray-100 md:h-[170px]">
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-1 text-center text-xs text-pink-400 opacity-80">
              ❤️
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
