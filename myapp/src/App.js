import './App.css';
import Home from './Home';
import LoginScreen from './LoginScreen';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
function App() {
  const isLargeRow=1;
  const user=0;
  return (
    <div className='app'>
      <Router>
      <Routes>
        {(user)?<Route path="/" element={<Home />} />:<Route path="/" element={<LoginScreen/>}/>}
      </Routes>
      </Router>      
    </div>
  );
}

export default App;
