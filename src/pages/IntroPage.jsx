import { EnvelopeScene } from "@features/LetterIntro/EnvelopeScene";
import { motion } from "framer-motion";

export const IntroPage = ({ onContinue }) => {
  return (
    <motion.div
      className="pointer-events-auto fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-transparent px-4 sm:px-8"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <EnvelopeScene onOpenComplete={onContinue} />
    </motion.div>
  );
};
