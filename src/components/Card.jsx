// eslint-disable-next-line react/prop-types
const Card = ({ employee }) => {
  // eslint-disable-next-line react/prop-types
  const { idDate, name, job } = employee;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-64">
      <div className="font-bold text-lg mb-2">{name}</div>
      <div className="text-gray-700 mb-2">Cargo: {job}</div>
      <div className="text-gray-700 mb-4">ID: {idDate}</div>
      <div className="font-semibold mb-2">Accesos:</div>
      {/* <ul>
        {accesos.map((acceso, index) => (
          <li key={index} className="list-disc ml-6">
            {acceso}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Card;
