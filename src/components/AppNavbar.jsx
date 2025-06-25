import { Link } from 'react-router-dom';

export default function AppNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">
        Ship Simulation
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/details" className="nav-link">
              프로젝트 소개
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/simulation" className="nav-link">
              시뮬레이션 체험
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
