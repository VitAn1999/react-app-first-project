import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Profile />
      <Navbar />
    </div>
  );
};

export default App;
