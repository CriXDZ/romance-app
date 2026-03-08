import noResponseImg from "@shared/assets/img/NoResponsePage.webp";

export const NoResponsePage = ({ responseMessage }) => {
  return (
    <div className="response-container">
      <h1 id="responseMessage">{responseMessage}</h1>
      <img src={noResponseImg} alt="Respuesta No" className="response-img" />
    </div>
  );
};
