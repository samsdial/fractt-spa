import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Collapse = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border rounded-lg">
      <button
        className="w-full flex justify-between items-center bg-gray-200 p-3"
        onClick={handleToggle}
      >
        <span className="font-semibold">{title}</span>
        <svg
          className={`transition-transform transform ${
            isExpanded ? "rotate-180" : ""
          }`}
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L6 6L11 1"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
      {isExpanded && <div className="p-4 border-t">{children}</div>}
    </div>
  );
};

export default Collapse;
