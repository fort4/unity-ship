import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Simulation from './pages/Simulation';

export default function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <Link to="/" className="navbar-brand">Unity Ship</Link>
        <div className="navbar-nav">
          <Link to="/" className="nav-link">소개</Link>
          <Link to="/simulation" className="nav-link">시뮬레이션 체험</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulation" element={<Simulation />} />
      </Routes>
    </>
  );
}
