import logo from './logo.svg';
import './App.css';
import Searchbar from './components/searchbar/Searchbar';
import Displayinfo from './components/displayinfo/Displayinfo';

function App() {
  return (
    <div className="App">
      <Searchbar /> 
      <Displayinfo />
    </div>
  );
}

export default App;