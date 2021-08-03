import './App.css';
import Footer from './components/footer';
import Home from './components/home';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="bg-gray-70 h-full">
      <Navbar/>
      <div className="p-20 h-screen">
        <Home/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
