import { useState } from "react";

/**
 * Hook para gestionar el estado de la galería romántica.
 * [CODE-02] Extrae la lógica de RomanticGallery siguiendo SRP.
 */
export const useGalleryState = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openGallery = () => setIsGalleryOpen(true);
  const closeGallery = () => setIsGalleryOpen(false);

  const selectImage = (image, index) => {
    setSelectedImage({ ...image, index });
  };

  const clearSelection = () => setSelectedImage(null);

  return {
    isGalleryOpen,
    selectedImage,
    openGallery,
    closeGallery,
    selectImage,
    clearSelection,
  };
};
