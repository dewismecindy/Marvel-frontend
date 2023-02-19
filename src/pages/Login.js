import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-marvel-api.netlify.app/user/login",
        { email: email },
        { password: password }
      );
      console.log(
        response.data
      ); /* vérifier que le console.log fonctionne lorsque la requête axios sera OK */
      handleToken(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="signup-container" onSubmit={handleSubmit}>
      <h1>Se connecter</h1>
      <input
        className="input-field"
        type="email"
        placeholder="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        className="input-field"
        type="password"
        placeholder="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <input className="submit-button" type="submit" value="Se connecter" />
    </form>
  );
};
export default Login;
