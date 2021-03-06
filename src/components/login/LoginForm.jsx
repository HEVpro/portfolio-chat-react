import { useState } from "react";
import axios from "axios";
import "./login.css";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPasword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": "8764ed36-aa7f-4137-a5d9-690e19aa9fe2",
      "User-Name": userName,
      "User-Secret": password,
    };
    try {
      await axios.get("https://api.chatengine.io/chats", { headers: authObject });

      localStorage.setItem("username", userName);
      localStorage.setItem("password", password);

      window.location.reload();
      setError("");
    } catch (error) {
      setError("Sorry, incorrect credentials! Please try again!");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">
          {" "}
          Hache EV React <br />
          Chat App
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPasword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Let's chat!</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
