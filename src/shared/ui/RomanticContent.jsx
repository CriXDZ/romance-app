import loveImg from "@shared/assets/img/amor-mobile.webp";

export const RomanticContent = () => {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <h1 className="text-romantic-pink text-2xl font-bold drop-shadow-sm">
        En mi corazón, tú eres la respuesta
      </h1>
      <p className="max-w-[450px] text-lg leading-relaxed text-pink-600 drop-shadow-sm">
        Sabía que había algo especial entre nosotros desde el momento en que nos
        encontramos. Cada momento contigo es como una melodía suave que llena mi
        corazón de felicidad y tu sonrisa ilumina mi día. Me gustaría seguir
        aprendiendo más sobre ti, compartir risas y construir un futuro juntos
        lleno de amor y felicidad. ¿Te gustaría comenzar esta hermosa travesía a
        mi lado y explorar cada rincón del amor juntos?
      </p>
      <h1 className="text-romantic-pink mt-4 animate-bounce text-3xl font-bold">
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
