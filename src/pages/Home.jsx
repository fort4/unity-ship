import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container py-5">
      <h1 className="fw-bold text-center mb-4">
        Unity 기반 3D 선박 시뮬레이션
      </h1>

      <p className="text-center text-muted mb-4">
        개발 기간: 2025.06.18 ~ 06.23 | 1인 개발
      </p>

      <div className="row g-4 mb-5">
        {[
          {
            icon: '🚢',
            title: '선박 조작 시스템',
            desc: 'Rigidbody를 활용한 선박 이동 및 가속 기능을 구현했습니다.',
          },
          {
            icon: '📡',
            title: '레이더 및 탐지',
            desc: 'Raycast 기반으로 장애물과 목표물을 탐지하고 UI에 표시합니다.',
          },
          {
            icon: '🎯',
            title: '아이템/점수 관리',
            desc: '부표 수집 시 점수 증가 및 UI 반영, 장애물 충돌 시 감점 처리를 구현했습니다.',
          },
        ].map((feature, idx) => (
          <div className="col-md-4" key={idx}>
            <div className="card h-100 border border-secondary-subtle shadow-sm feature-card">
              <div className="card-body text-center">
                <div className="display-5 mb-3">{feature.icon}</div>
                <h5 className="card-title">{feature.title}</h5>
                <p className="card-text text-muted">{feature.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link to="/simulation" className="btn btn-primary btn-lg">
          시뮬레이션 체험하기
        </Link>
      </div>
    </div>
  );
}
