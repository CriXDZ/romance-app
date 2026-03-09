import { useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { useGalleryState } from "./useGalleryState";
import { PhotoCollage } from "./PhotoCollage";
import { GalleryModal } from "./GalleryModal";
import { ImageLightbox } from "./ImageLightbox";

/**
 * Componente principal de la galería romántica.
 * [CODE-02] Refactorizado para usar composición y seguir SRP.
 */
export const RomanticGallery = () => {
  const {
    isGalleryOpen,
    selectedImage,
    openGallery,
    closeGallery,
    selectImage,
    clearSelection,
  } = useGalleryState();

  const containerRef = useRef(null);

  return (
    <div className="flex flex-col items-center py-2">
      <h1 className="font-romantic text-romantic-purple mb-4 text-center text-3xl tracking-wide drop-shadow-sm md:mb-6 md:text-4xl">
        Para ti mi chica hermosa
      </h1>

      {/* Collage de fotos (Vista previa) */}
      <PhotoCollage onOpenGallery={openGallery} isHidden={isGalleryOpen} />

      {/* Modal de galería inmersiva */}
      <AnimatePresence>
        {isGalleryOpen && (
          <GalleryModal
            onClose={closeGallery}
            onSelectImage={selectImage}
            containerRef={containerRef}
          />
        )}
      </AnimatePresence>

      {/* Visor de imagen individual (Lightbox) */}
      <AnimatePresence>
        {selectedImage !== null && (
          <ImageLightbox image={selectedImage} onClose={clearSelection} />
        )}
      </AnimatePresence>
    </div>
  );
};
