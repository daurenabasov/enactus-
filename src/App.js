import './App.css';
import CardTitle from './components/ main/section-second/CardTitle';
import Swiper from './components/ main/Swiper';
import Header from './components/header/Header';
import Home from './components/pages/home/Home';

function App() {
  return (
    <div className="App">

      <Header/>

      <Home />

      <Swiper/>

    <CardTitle/>      
    </div>
  );
}

export default App;
