import loveImg from "@shared/assets/img/amor-mobile.webp";

export const RomanticContent = () => {
  return (
    <div className="flex flex-col items-center gap-8 px-4 py-10 text-center">
      <h1 className="font-romantic text-romantic-purple animate-sway text-3xl tracking-wide text-balance drop-shadow-sm md:text-5xl">
        En mi corazón, tú eres la respuesta
      </h1>

      {/* Contenedor estilo Nota de Papel con Tailwind v4 utilities */}
      <div className="relative mx-auto w-full max-w-2xl rounded-2xl bg-[#fffbf5] p-6 shadow-2xl shadow-purple-900/10 md:p-12">
        {/* Costura perimetral decorativa */}
        <div className="pointer-events-none absolute inset-2 rounded-xl border-2 border-dashed border-purple-300 opacity-60 md:inset-4" />

        <div className="relative z-10 flex flex-col gap-6 text-justify font-sans text-base leading-relaxed text-gray-800 md:text-xl md:leading-loose">
          <p>
            Acepto que no puedo controlar el destino, pero hoy decido tomar las
            riendas de mi presente. No estoy aquí por un impulso, ni por el
            miedo a la soledad; estoy aquí porque después de recorrer cada
            pensamiento, siempre llego a la misma conclusión:{" "}
            <span className="font-bold text-purple-700">¡Eres tú!</span>
          </p>

          <p>
            Te elijo a ti por encima de cualquier duda, te elijo en tus días de
            luz y, sobre todo, te elijo para ser tu refugio en los de tormenta.
            Mi intención no es que pasemos el tiempo, es que el tiempo se nos
            quede corto para todo lo que quiero entregarte.
          </p>

          <p>
            He descubierto que mi hogar no es un lugar físico, sino ese espacio
            de paz que solo encuentro en ti. Prometo no solo estar a tu lado,
            sino ser el hombre que te dé la seguridad de que, pase lo que pase,
            nunca tendrás que caminar sola.
          </p>

          <p className="font-medium">
            Eres mi prioridad, mi certeza y el amor más real que mis manos han
            tenido la suerte de sostener. No quiero un futuro donde tú no seas
            la protagonista de cada uno de mis planes.
          </p>
        </div>
      </div>

      <h2 className="font-romantic text-romantic-purple animate-sway mt-8 max-w-lg text-2xl tracking-tight text-balance drop-shadow-md md:text-4xl">
        ¿Me harías el honor de dejar que te cuide y te ame oficialmente, para
        empezar a construir hoy mismo nuestro &quot;para siempre&quot;?
      </h2>

      <div className="relative mt-4">
        <img
          src={loveImg}
          alt="Imagen romántica de Lumi"
          className="w-full max-w-md rounded-3xl border-8 border-white object-cover shadow-2xl"
        />
        {/* Efecto de brillo sutil sobre la imagen, muy común en v4 */}
        <div className="absolute inset-0 rounded-3xl ring-1 ring-black/10 ring-inset" />
      </div>
    </div>
  );
};
