import loveImg from "@shared/assets/img/amor-mobile.webp";

export const RomanticContent = () => {
  return (
    <div className="content-container">
      <h1>En mi corazón, tú eres la respuesta</h1>
      <p>
        Sabía que había algo especial entre nosotros desde el momento en que nos
        encontramos. Cada momento contigo es como una melodía suave que llena mi
        corazón de felicidad y tu sonrisa ilumina mi día. Me gustaría seguir
        aprendiendo más sobre ti, compartir risas y construir un futuro juntos
        lleno de amor y felicidad. ¿Te gustaría comenzar esta hermosa travesía a
        mi lado y explorar cada rincón del amor juntos?
      </p>
      <h1>¿Quieres ser mi novia?</h1>
      <br />
      <img src={loveImg} alt="Imagen romántica" className="rounded-image" />
    </div>
  );
};
