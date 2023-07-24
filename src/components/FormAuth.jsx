import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, signInUser } from "../config/auth";

const FormAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const resetFormEmail = () => {
    return setEmail("");
  };
  const resetFormPassword = () => {
    return setPassword("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      //const hashedPassword = sha256(password);
      // console.log(
      //   "🚀 ~ file: FormAuth.jsx:23 ~ handleSubmit ~ hashedPassword:",
      //   hashedPassword
      // );

      const userCredential = await signInUser(email, password);
      if (userCredential) {
        resetFormEmail();
        resetFormPassword();

        const timestamp = new Date().toISOString();
        const userIP = "111.111.01.01";
        const logData = {
          hora: timestamp,
          accion: "inicio sesion",
          ip: userIP,
        };
        const logCollectionRef = collection(db, "log");
        await addDoc(logCollectionRef, logData);

        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
    }
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="w-full max-w-xs mx-auto mt-10">
      <div className="flex text-center items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img
          className="w-8 h-8 mr-2"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
          alt="logo"
        />
        Flow Employment
      </div>

      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormAuth;
