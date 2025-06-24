import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container py-5">
      <h1 className="fw-bold text-center mb-4">
        Unity 기반 3D 선박 시뮬레이션
      </h1>

      <p className="text-center text-muted mb-4">
        2025.06.18 ~ 06.23 | 1인 개발
      </p>

      <p className="lead text-center mb-5">
        사용자가 직접 선박을 조작하여<br />
        장애물을 회피하고 아이템을 획득하는<br />
        WebGL 기반 인터랙티브 시뮬레이션입니다.
      </p>

      <div className="row text-center mb-5">
        <div className="col-md-4 mb-3">
          <h5>🚢 선박 조작</h5>
          <p className="text-muted">가속, 회전, 감속 등 실감나는 물리 구현</p>
        </div>
        <div className="col-md-4 mb-3">
          <h5>📡 레이더 UI</h5>
          <p className="text-muted">Raycast 기반 장애물 탐지 시각화</p>
        </div>
        <div className="col-md-4 mb-3">
          <h5>🧰 아이템 획득</h5>
          <p className="text-muted">아이템 수집 → 점수 증가</p>
        </div>
      </div>

      <div className="text-center">
        <Link to="/simulation" className="btn btn-primary btn-lg me-3">
          시뮬레이션 체험하기
        </Link>
        <a
          href="https://github.com/your-username/unity-webapp"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-secondary btn-lg"
        >
          GitHub 보기
        </a>
      </div>
    </div>
  );
}
