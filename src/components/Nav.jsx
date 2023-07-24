import { useContext } from "react";
import { HiXCircle } from "react-icons/hi";
import { AuthContext } from "../context/auth";

const Nav = () => {
  // const location = useLocation();
  const { currentUser, signOut } = useContext(AuthContext);
  console.log("🚀 ~ file: Nav.jsx:8 ~ Nav ~ currentUser:", currentUser);
  return (
    <div className="text-center mt-5">
      <button onClick={signOut}>
        <HiXCircle color="white" size="40" />
      </button>
    </div>
  );
};

export default Nav;
