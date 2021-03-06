import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/chat-feed/ChatFeed";
import "./App.css";
import LoginForm from "./components/login/LoginForm";
import Header from "./components/navbar/Header";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <div>
      <Header />
      <ChatEngine
        height="100vh"
        projectID="8764ed36-aa7f-4137-a5d9-690e19aa9fe2"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio("https://chat-engine-assets.s3.amazonaws.com/click.mp3").play()
        }
      />
    </div>
  );
};
export default App;
