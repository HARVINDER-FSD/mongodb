import { Routes, Route, Link } from 'react-router-dom';
import AddPizza from './pages/AddPizza';
import Menu from './pages/Menu';
import './App.css';

function App() {
  return (
    <div>
      <nav>
       <Link to="/add">Add Pizza</Link>
      </nav>

      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/add" element={<AddPizza />} />
      </Routes>
    </div>
  );
}

export default App;