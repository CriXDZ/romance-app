import noResponseImg from "@shared/assets/img/NoResponsePage.webp";

export const NoResponsePage = ({ responseMessage }) => {
  return (
    <div className="bg-romantic-bg animate-fade-in mx-auto mt-20 w-[92%] max-w-[500px] rounded-3xl p-10 text-center shadow-2xl">
      <h1
        id="responseMessage"
        className="text-romantic-pink mb-8 text-2xl font-bold"
      >
        {responseMessage}
      </h1>
      <img
        src={noResponseImg}
        alt="Respuesta No"
        className="mx-auto w-full max-w-[320px] rounded-2xl border-4 border-white shadow-lg"
      />
    </div>
  );
};
