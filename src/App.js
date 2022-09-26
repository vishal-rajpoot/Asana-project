import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './Components/Home';
import RedirectedPage from './Components/RedirectedPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Asana-project' element={ <Home/> }/>
        <Route path='/Asana-project/redirectedpage' element={ <RedirectedPage/> }/>
      {/* <Header */}
      </Routes>
    </div>
  );
}

export default App;
