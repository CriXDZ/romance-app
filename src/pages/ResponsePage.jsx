import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHeart, FaArrowLeft } from "react-icons/fa";
import responseImg from "@shared/assets/img/YesResponsePage.webp";

export const ResponsePage = ({ responseMessage }) => {
  const title =
    responseMessage?.title ||
    "¡Has hecho mi mundo infinitamente más brillante!";
  const date = responseMessage?.date;

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="font-romantic relative w-full max-w-[500px] overflow-hidden rounded-3xl bg-white/95 p-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.15)] backdrop-blur-md"
      >
        <div className="from-romantic-purple to-romantic-pink absolute top-0 left-0 h-2 w-full bg-gradient-to-r opacity-80"></div>

        <h1
          id="responseMessage"
          className="text-romantic-purple mb-2 text-3xl font-bold tracking-tight drop-shadow-sm md:text-4xl"
        >
          {title}
        </h1>

        {date && (
          <div className="mb-8">
            <p className="text-romantic-purple/60 text-sm tracking-widest uppercase">
              Nuestra historia comienza hoy
            </p>
            <p className="text-romantic-purple text-2xl font-bold md:text-3xl">
              {date}
            </p>
          </div>
        )}

        {/* Estilo Polaroid para la Imagen */}
        <div className="relative mx-auto mb-10 w-full max-w-[300px]">
          <div className="rotate-2 rounded-xl border border-purple-100 bg-gradient-to-br from-white to-[#f9f7ff] p-3 pb-12 shadow-2xl transition-transform md:hover:rotate-0">
            <img
              src={responseImg}
              alt="Nuestro futuro"
              className="aspect-square w-full rounded-lg object-cover shadow-inner"
            />
            {/* Detalles decorativos */}
            <div className="absolute right-0 bottom-4 left-0 flex items-center justify-center gap-2 opacity-60">
              <FaHeart className="text-romantic-purple text-sm" />
              <div className="h-0.5 w-12 rounded-full bg-purple-200" />
              <FaHeart className="text-romantic-purple text-sm" />
            </div>
          </div>
        </div>

        <p className="mb-8 text-lg leading-relaxed font-medium text-gray-800 italic">
          &quot;A partir de hoy, cada paso que demos lo daremos juntos. Prometo
          cuidarte, respetarte y amarte con cada fibra de mi ser Grisbelys Nicol
          Contreras Cañizalez&quot;
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
