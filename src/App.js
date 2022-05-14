import './App.css';
import CardTitle from './components/ main/section-second/CardTitle';
import Swipper from './components/ main/swipper/Swipper';
import Header from './components/header/Header';
import Home from './components/pages/home/Home';

function App() {
  return (
    <div className="App">

      <Header/>

      <Home />

      <Swipper/>


    <CardTitle/>      
    </div>
  );
}

export default App;
