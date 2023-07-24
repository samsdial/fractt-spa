import { collection, getDocs } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Card from "./components/Card";
import Nav from "./components/Nav";
import RequireAuth from "./components/RequireAuth";
import { db } from "./config/auth";
import { AuthContext } from "./context/auth";

import Login from "./routes/Login";

const App = () => {
  const [employeeDetail, setEmployeeDetail] = useState([]);
  const [logData, setLogData] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard");
    }
  }, [currentUser, navigate]);

  useEffect(() => {
    const employeeCollectionRef = collection(db, "employee");
    const getEmployeeDetail = async () => {
      try {
        const data = await getDocs(employeeCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setEmployeeDetail(filteredData);
      } catch (error) {
        console.error(error);
      }
    };

    const getLogData = async () => {
      try {
        const logCollectionRef = collection(db, "log");
        const data = await getDocs(logCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setLogData(filteredData);
      } catch (error) {
        console.error(error);
      }
    };

    getEmployeeDetail();
    getLogData();
  }, []);

  return (
    <div>
      <Routes>
        <Route index element={<Login />} />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Nav />
              {employeeDetail.map((employee, index) => (
                <Card
                  key={employee.id + index}
                  employee={employee}
                  logData={logData}
                />
              ))}
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
