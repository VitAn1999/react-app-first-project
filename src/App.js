import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Navbar from './components/Navbar';

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
