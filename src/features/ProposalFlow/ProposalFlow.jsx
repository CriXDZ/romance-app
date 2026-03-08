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
    <div className="mt-6 flex flex-row justify-center gap-4">
      <button
        id="yesButton"
        onClick={handleYesClick}
        className="bg-romantic-pink hover:bg-romantic-hover cursor-pointer rounded-xl px-10 py-4 text-xl font-bold text-white shadow-lg transition-colors active:scale-95"
      >
        Sí
      </button>
      <button
        id="noButton"
        onClick={handleNoClick}
        className="bg-romantic-pink hover:bg-romantic-hover translate-y-0 cursor-pointer rounded-xl px-10 py-4 text-xl font-bold text-white shadow-lg transition-colors active:scale-95"
      >
        No
      </button>
    </div>
  );
};
