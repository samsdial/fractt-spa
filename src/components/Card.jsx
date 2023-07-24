import { HiFlag } from "@react-icons/all-files/hi/HiFlag";
import PropTypes from "prop-types";
import CircleWithShadow from "./CircleWithShadow";
import Collapse from "./Collapse";

const Card = ({ employee, logData }) => {
  const { idDate, name, job, description } = employee;

  function formatDate(dateTimeString) {
    const date = new Date(dateTimeString);
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return `Fecha: ${formattedDate} Hora: ${formattedTime}`;
  }

  function getInitials(name) {
    const names = name.split(" ");
    const initials = names.map((n) => n[0].toUpperCase());
    return initials.join("");
  }

  return (
    <div className="w-full max-w-md lg:max-w-5xl mx-auto mt-10">
      <div className="c-card lg:flex bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div className="p-4 lg:p-9 lg:w-full border-t border-b text-center">
          <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
            Información del usuario
          </span>
          <CircleWithShadow initials={getInitials(name)} />
          <h2 className="mt-2 mb-0 font-bold text-3xl">{name}</h2>
          <div className="mt-2 mb-4">
            <div className="text-xs text-slate-500">Cargo:</div>
            <div className="text-xs font-bold text-slate-500"> {job}</div>
          </div>
        </div>
        <div className="p-4 lg:p-9 lg:max-w-xl bg-gray-100">
          <span className="inline-block mb-3 px-2 py-1 leading-none bg-green-200 text-green-800 rounded-full font-semibold uppercase tracking-wide text-xs">
            Descripción:
          </span>
          <p className="text-sm">{description}</p>
          <div className="mt-3 flex items-center">
            <span className="text-sm font-semibold mr-2">Id:</span>
            <span className="font-bold text-xl">{idDate}</span>
          </div>
        </div>
        <div className="p-4 lg:p-9  w-full border-t border-b text-xs text-gray-700">
          <span className="flex items-center mb-4">
            <span className="text-xs font-bold text-slate-500 mr-2">
              Registro de accesos:{" "}
            </span>
            <span className="text-xs font-bold text-slate-500">
              {logData.length}
            </span>
            <HiFlag />
          </span>
          <Collapse title="Lista de accesos">
            {logData.length > 0 ? (
              logData.map((logItem, index) => (
                <div key={index}>
                  <ul className="list-right-gray">
                    <li className="list-disc">{formatDate(logItem.hora)}</li>
                    <li className="list-disc">Acción: {logItem.accion}</li>
                    <li className="list-disc">IP: {logItem.ip}</li>
                  </ul>
                  <br />
                </div>
              ))
            ) : (
              <li className="list-disc ml-6">No hay acciones</li>
            )}
          </Collapse>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  employee: PropTypes.shape({
    description: PropTypes.string.isRequired,
    idDate: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
  }).isRequired,

  logData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      hora: PropTypes.string.isRequired,
      accion: PropTypes.string.isRequired,
      ip: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Card;
