import responseImg from "@shared/assets/img/YesResponsePage.webp";

export const ResponsePage = ({ responseMessage }) => {
  return (
    <div className="response-container">
      <h1 id="responseMessage">{responseMessage}</h1>
      <img src={responseImg} alt="Respuesta Sí" className="response-img" />
    </div>
  );
};
