import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignUp = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newsLetter, setNewsLetter] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://site--marvel-backend2--by69g8q6y9vr.code.run/user/signup" /* vérifier la route car mauvaise, tester le console.log(response.data) */,
        { email: email },
        { username: username },
        { password: password },
        { newsLetter: newsLetter }
      );
      /*  console.log(response.data); */
      handleToken(response.data.token);
      navigate(
        "/"
      ); /* Vérifier que je suis bien redirigé vers la page "/" lorsque je me serais inscrite */
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="signup-container" onSubmit={handleSubmit}>
      <h1>S'incrire</h1>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <input
        type="checkbox"
        checked={newsLetter}
        onChange={() => {
          setNewsLetter(!newsLetter);
        }}
      />
      <input type="submit" value="S'incrire" />
    </form>
  );
};
export default SignUp;
