import Button from "../Components/Button";
import { PiChurchThin } from "react-icons/pi";
import { LiaGlassCheersSolid } from "react-icons/lia";
import { TbDeviceMobileCheck } from "react-icons/tb";

function Info(props) {
  let icono;
  if (props.icon == 1) {
    icono = <PiChurchThin />;
  } else if (props.icon == 2) {
    icono = <LiaGlassCheersSolid />;
  } else if (props.icon == 3) {
    icono = <TbDeviceMobileCheck />;
  }
  return (
    <>
      <p>{props.tittle}</p>
      <div className="icon">{icono}</div>
      <p className="name">{props.name}</p>
      <p className="direction">{props.direction}</p>
      <div className="hour">
        <p>{props.hora}</p>
      </div>
      {/* Boton para redireccionar a la direccion del evento */}
      <Button direc={props.direc} icon={props.icon} />
    </>
  );
}

export default Info;
