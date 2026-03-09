import loveImg from "@shared/assets/img/amor-mobile.webp";

export const RomanticContent = () => {
  return (
    <div className="flex flex-col items-center gap-6 px-1 text-center md:px-6">
      <h1 className="font-romantic text-romantic-purple px-2 text-3xl tracking-wide drop-shadow-sm md:text-4xl">
        En mi corazón, tú eres la respuesta
      </h1>
      {/* Contenedor estilo Nota de Papel */}
      <div className="relative mx-auto w-full max-w-[700px] rounded-xl bg-[#fffbf5] p-4 shadow-md shadow-pink-100/50 sm:w-[95%] md:rounded-2xl md:p-10">
        {/* Costura perimetral */}
        <div className="pointer-events-none absolute inset-1.5 rounded-lg border-2 border-dashed border-[#b388ff] opacity-70 md:inset-3" />

        <p className="relative z-10 px-1 font-sans text-[15px] leading-[1.65] tracking-wide text-gray-800/90 md:px-6 md:text-lg md:leading-loose">
          Sabía que había algo especial entre nosotros desde el momento en que
          nos encontramos. Cada momento contigo es como una melodía suave que
          llena mi corazón de felicidad y tu sonrisa ilumina mi día. Me gustaría
          seguir aprendiendo más sobre ti, compartir risas y construir un futuro
          juntos lleno de amor y felicidad. ¿Te gustaría comenzar esta hermosa
          travesía a mi lado y explorar cada rincón del amor juntos?
        </p>
      </div>
      <h1 className="font-romantic text-romantic-purple animate-heartbeat mt-6 text-4xl tracking-wide drop-shadow-md md:text-5xl">
        ¿Quieres ser mi novia?
      </h1>
      <img
        src={loveImg}
        alt="Imagen romántica"
        className="mt-4 w-full max-w-[380px] rounded-2xl border-4 border-white shadow-xl"
      />
    </div>
  );
};
