import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MasterLayOut from './components/MasterLayOut';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<MasterLayOut view={'Main'} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
