import { TiLocation } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import { SiGoogle } from "react-icons/si";

function Button(props) {
  const handleClick = () => {
    window.open(props.direc, "_blank", "noopener,noreferrer");
  };
  if (props.icon < 3) {
    return (
      <button className="dir" onClick={handleClick}>
        <TiLocation />
        Ver Ubicación
      </button>
    );
  } else {
    return (
      <button className="dir" onClick={handleClick}>
        
        Confirmar
      </button>
    );
  }
}

export default Button;
