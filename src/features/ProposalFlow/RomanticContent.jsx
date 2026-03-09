import loveImg from "@shared/assets/img/amor-mobile.webp";

export const RomanticContent = () => {
  return (
    <div className="flex flex-col items-center gap-6 px-2 text-center md:gap-8 md:px-6">
      <h2 className="font-romantic text-romantic-purple text-3xl tracking-wide drop-shadow-sm md:text-4xl">
        En mi corazón, tú eres la respuesta
      </h2>
      {/* Contenedor estilo Nota de Papel */}
      <div className="relative mx-auto max-w-[95%] rounded-2xl bg-[#fffbf5] p-5 shadow-md shadow-pink-100/50 md:max-w-[700px] md:p-10">
        {/* Costura perimetral */}
        <div className="pointer-events-none absolute inset-2 rounded-xl border-2 border-dashed border-[#b388ff] opacity-70 md:inset-3" />

        <p className="relative z-10 px-2 font-sans text-base leading-[1.8] tracking-wide text-gray-800/90 md:px-6 md:text-lg md:leading-loose">
          Sabía que había algo especial entre nosotros desde el momento en que
          nos encontramos. Cada momento contigo es como una melodía suave que
          llena mi corazón de felicidad y tu sonrisa ilumina mi día. Me gustaría
          seguir aprendiendo más sobre ti, compartir risas y construir un futuro
          juntos lleno de amor. ¿Te gustaría comenzar esta hermosa travesía a mi
          lado y explorar cada rincón del amor juntos?
        </p>
      </div>
      <h1 className="font-romantic text-romantic-purple mt-2 text-3xl tracking-wide drop-shadow-md md:text-5xl">
        ¿Quieres ser mi novia?
      </h1>
      <img
        src={loveImg}
        alt="Imagen romántica"
        className="mt-2 w-full max-w-[280px] rounded-2xl border-4 border-white shadow-xl md:max-w-[380px]"
      />
    </div>
  );
};
