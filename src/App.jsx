import { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AuthContext } from "./context/auth";
import Login from "./routes/Login";

const App = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log("User:", !!currentUser);

  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard");
    }
  }, [currentUser, navigate]);

  return (
    <div>
      <Routes>
        <Route index element={<Login />} />
        <Route
          path="dashboard"
          element={<h1 className="text-3xl text-center">Hello</h1>}
        />
      </Routes>
    </div>
  );
};

export default App;
