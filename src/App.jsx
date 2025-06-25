import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Simulation from './pages/Simulation';
import Details from './pages/Details';
import AppNavbar from './components/AppNavbar';
import TheFooter from './components/Foot';
import './App.css';

export default function App() {
  return (
    <>
      {/* 헤더 */}
      <AppNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/simulation" element={<Simulation />} />
      </Routes>
      
      {/* 푸터 */}
      <TheFooter />
    </>
  );
}
