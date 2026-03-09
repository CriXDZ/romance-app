import { useNavigate } from "react-router-dom";
import { formatDateLong } from "@shared/lib/formatDate";

export const ProposalFlow = ({ setResponseMessage }) => {
  const navigate = useNavigate();

  const handleYesClick = () => {
    const date = formatDateLong(new Date());
    setResponseMessage(
      <span>
        Nuestra relación comienza el:
        <br />
        <span style={{ color: "#FF5733" }}>{date}</span>
      </span>
    );
    navigate("/respuesta");
  };

  const handleNoClick = () => {
    setResponseMessage("Vale, pero primero me tienes que resolver esto:");
    navigate("/norespuesta");
  };

  return (
    <div className="mt-8 flex flex-row items-center justify-center gap-6 px-4">
      <button
        id="yesButton"
        onClick={handleYesClick}
        className="bg-romantic-purple hover:bg-romantic-hover-purple flex-1 cursor-pointer rounded-2xl px-8 py-5 text-2xl font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(124,58,237,0.5)] active:scale-95 sm:max-w-[160px]"
      >
        ¡Sí!
      </button>
      <button
        id="noButton"
        onClick={handleNoClick}
        className="text-romantic-purple border-romantic-purple/30 flex-1 cursor-pointer rounded-2xl border-2 bg-[#eee6ff] px-6 py-4 text-lg font-medium transition-all duration-300 hover:bg-[#e0d4ff] active:scale-95 sm:max-w-[120px]"
      >
        No
      </button>
    </div>
  );
};
