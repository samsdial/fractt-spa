import { Route, Routes } from "react-router-dom";
import Login from "./routes/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
