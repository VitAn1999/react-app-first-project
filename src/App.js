import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Messages from './components/Messages/Messages';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <Messages />
    </div>
  );
};

export default App;
