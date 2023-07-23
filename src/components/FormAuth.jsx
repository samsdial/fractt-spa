import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
//import { useHistory } from "react-router-dom";
import { auth } from "../config/firebase";

const FormAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const history = useHistory();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signIn(); // Llama a la función signIn para autenticar al usuario con el correo y la contraseña
      //history.push("/dashboard"); // Redirige al usuario a la página de dashboard (cambia '/dashboard' por la ruta deseada)
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      // Aquí puedes mostrar un mensaje de error al usuario si la autenticación falla.
    }
  };

  const signIn = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <div className="w-full max-w-xs mx-auto mt-10">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
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
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
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
  );
};

export default FormAuth;
