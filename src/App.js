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
        <Navbar />
        <Route path="/profile">
          <Profile posts={props.posts} />
        </Route>
        <Route path="/messages">
          <Messages users={props.users} />
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
