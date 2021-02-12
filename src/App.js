import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Messages from './components/Messages/Messages';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
};

export default App;
