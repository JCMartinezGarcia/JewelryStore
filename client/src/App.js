import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MasterLayOut from './components/MasterLayOut';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<MasterLayOut view={'Main'} />} />
          <Route path='/usuarios' element={<MasterLayOut view={'Users'} />} />
          <Route path='/usuarios/registrar' element={<MasterLayOut view={'Users Register'} />} />
          <Route path='/usuarios/editar/:id' element={<MasterLayOut view={'Users Edit'} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
