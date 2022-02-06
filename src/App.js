import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ProfileContainer from './components/Profile/ProfileContainer';
import Navbar from './components/Navbar/Navbar';
import Messages from './components/Messages/Messages';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Footer from './components/Footer/Footer';
import FriendsContainer from './components/Friends/FriendsContainer';
import FindPeopleContainer from './components/FindPeople/FindPeopleContainer';

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Navbar />
        <Route path="/profile">
          <ProfileContainer />
        </Route>
        <Route path="/messages">
          <Messages />
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
        <Route path="/find_people">
          <FindPeopleContainer />
        </Route>
        <Route path="/friends">
          <FriendsContainer />
        </Route>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
