import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Messages from "./components/Messages/Messages";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Footer from "./components/Footer/Footer";

const App = (props) => {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Navbar friends={props.friends} />
        <Route path="/profile">
          <Profile
            posts={props.posts}
            postValue={props.postValue}
            addPost={props.addPost}
            changePost={props.changePost}
            context={props.context}
          />
        </Route>
        <Route path="/messages">
          <Messages
            users={props.users}
            messages={props.messages}
            messageValue={props.messageValue}
            addMessage={props.addMessage}
            changeMessage={props.changeMessage}
            context={props.context}
          />
        </Route>
        <Route path="/music">
          <Music />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
