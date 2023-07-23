import { useContext } from "react";
// import { useLocation } from "react-router-dom";
import { AuthContext } from "../context/auth";

const Nav = () => {
  // const location = useLocation();
  const { currentUser, signOut } = useContext(AuthContext);
  console.log("🚀 ~ file: Nav.jsx:8 ~ Nav ~ currentUser:", currentUser);
  return (
    <div>
      <button onClick={signOut}>Salir</button>
    </div>
  );
};

export default Nav;
