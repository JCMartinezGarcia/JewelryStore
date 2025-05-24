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
          <Route path='/usuarios/detalles/:id' element={<MasterLayOut view={'Users Details'} />} />
          <Route path='/clientes' element={<MasterLayOut view={'Clients'} />} />
          <Route path='/metales' element={<MasterLayOut view={'Metals'} />} />
          <Route path='/metales/registrar' element={<MasterLayOut view={'Metals Register'} />} />
          <Route path='/metales/editar/:id' element={<MasterLayOut view={'Metals Update'} />} />
          <Route path='/Lineas' element={<MasterLayOut view={'Product Lines'} />} />
          <Route path='/Lineas/registrar' element={<MasterLayOut view={'Product Lines Register'} />} />
          <Route path='/lineas/editar/:id' element={<MasterLayOut view={'Product Lines Update'} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
