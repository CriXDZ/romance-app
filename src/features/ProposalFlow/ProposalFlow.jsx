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
    <div className="buttons">
      <button id="yesButton" onClick={handleYesClick}>
        Sí
      </button>
      <button id="noButton" onClick={handleNoClick}>
        No
      </button>
    </div>
  );
};
