// eslint-disable-next-line react/prop-types
const CircleWithShadow = ({ initials }) => {
  return (
    <div className="w-16 mx-auto my-3 h-16 rounded-full bg-blue-200 shadow-md flex items-center justify-center text-2xl font-bold">
      {initials}
    </div>
  );
};

export default CircleWithShadow;
