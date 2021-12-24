import './App.css';
import Row from './row';
import requests from './request';
function App() {
  return (
    <div >
     <Row title="Netflix Orignals" fetchUrl={requests.fetchNetflixOrignals}/>
     <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
