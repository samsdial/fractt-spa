import { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Nav from "./components/Nav";
import RequireAuth from "./components/RequireAuth";
import { AuthContext } from "./context/auth";
import Login from "./routes/Login";

const App = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // console.log("User:", !!currentUser);

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
          element={
            <RequireAuth>
              <Nav />
              <h2>Hello</h2>
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
