import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaLightbulb } from "react-icons/fa";
import noResponseImg from "@shared/assets/img/NoResponsePage.webp";

export const NoResponsePage = ({ responseMessage }) => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-romantic relative w-full max-w-[500px] rounded-3xl bg-white/95 p-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.15)] backdrop-blur-md"
      >
        <div className="bg-romantic-purple/30 absolute top-0 left-0 h-2 w-full opacity-60"></div>

        <h1
          id="responseMessage"
          className="text-romantic-purple mb-8 text-3xl font-bold tracking-tight md:text-4xl"
        >
          {responseMessage || "¡Un momento!"}
        </h1>

        {/* Polaroid con la ecuación lúdica */}
        <div className="relative mx-auto mb-10 w-full max-w-[320px]">
          <div className="-rotate-1 rounded-xl border border-purple-100 bg-gradient-to-br from-white to-[#f8f9fa] p-3 pb-12 shadow-xl transition-all md:hover:rotate-0">
            <div className="aspect-square w-full overflow-hidden rounded-lg border border-purple-50 bg-white shadow-inner">
              <img
                src={noResponseImg}
                alt="Reto matemático lúdico"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="absolute right-0 bottom-4 left-0 flex items-center justify-center opacity-50">
              <FaLightbulb className="text-romantic-purple text-lg" />
            </div>
          </div>
        </div>

        <p className="mb-8 text-lg leading-relaxed font-medium text-gray-800 italic">
          Buen intento... pero antes de irte, tienes una pequeña misión
          matemática que resolver antes de que aceptemos ese &apos;No&apos;
        </p>

        <Link
          to="/"
          className="bg-romantic-purple hover:bg-romantic-hover-purple group inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg transition-all active:scale-95"
        >
          <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
          <span>Regresar</span>
        </Link>
      </motion.div>
    </div>
  );
};
