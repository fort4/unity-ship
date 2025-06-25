import { Link } from "react-router-dom";

export default function Details() {
  return (
    <div className="container py-5 px-3" style={{ maxWidth: '100%', overflowX: 'hidden' }}>
      {/* 1. 프로젝트 개요 */}
      <h1 className="fw-bold text-center mb-4 display-5">
        Unity 기반 3D 선박 시뮬레이션: 설명 및 영상
      </h1>

      <section className="mb-5 text-center">
        <p className="text-muted mb-2">
          개발 기간: 2025.06.18 ~ 06.23 | 1인 개발 프로젝트
        </p>
        <p className="lead">
            사용자 입력에 따른 물리 반응, Raycast 감지, UI 표시 등 <br />
            시뮬레이션의 핵심 인터랙션 구조를 Unity 2022.3 LTS와 C# 스크립트로 직접 구현하여 <br />
            WebGL 환경에서 체험 가능하도록 구성했습니다.
        </p>
      </section>

      {/* 2. 핵심 기능별 상세 설명 섹션 */}
      <div className="row gy-5 text-center"> {/* 섹션 간 세로 간격 조절 */}

        {/* --- 선박 조작 시스템 --- */}
        <section className="col-12">
          <h2 className="fw-bold mb-3 text-primary">1. 선박 조작 시스템</h2>
          <p className="mb-4">
            Rigidbody 컴포넌트를 사용하여 선박의 추진력, 회전력, 감속 저항 등 물리 기반의 이동을 구현했습니다.<br />
            Shift 키를 통한 가속을 구현하여 속도감을 높였습니다.
          </p>

          <div className="ratio ratio-16x9 rounded shadow-sm mb-3 mx-auto" style={{ maxWidth: '720px' }}>
                <iframe
                  src="https://www.youtube.com/embed/tfh0aqKmfdc?si=EKq-T2zYEqULqbtu"
                  title="선박 시연"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
          </div>
          <p className="text-muted text-center mt-2 small">▲ 선박 기본조작 및 충돌 시연</p>
        </section>

        {/* --- 레이더 및 탐지 시스템 --- */}
        <section className="col-12">
          <h2 className="fw-bold mb-3 text-primary">2. 레이더 및 탐지 시스템</h2>
          <p className="mb-4">
            Raycast를 기반으로 선박 전방 일정 범위 내의 장애물과 목표물(부표)을 탐지합니다.<br />
            탐지된 오브젝트는 Canvas UI 기반의 미니맵에 점으로 표시되며, 선박의 방향과 관계없이 레이더 방위가 고정되어 표기됩니다.
          </p>
          <div className="ratio ratio-16x9 rounded shadow-sm mb-3 mx-auto" style={{ maxWidth: '720px' }}>
            <iframe
              src="https://www.youtube.com/embed/ZgSPOvuyy3U?si=1xmTY-dDu4xCmzwL"
              title="레이더 시연"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-muted text-center mt-2 small">▲ 레이더 탐지 및 UI 시연</p>
        </section>

        {/* --- 아이템/점수 관리 --- */}
        <section className="col-12">
          <h2 className="fw-bold mb-3 text-primary">3. 아이템/점수 시스템</h2>
          <p className="mb-4">
            맵에 배치된 부표(캡슐)를 수집하면 점수가 증가하고, UI에 실시간으로 반영됩니다.<br />
            수집된 부표는 일정 시간 후 자동으로 리스폰되며, 이때 수집 및 리스폰 시각 효과를 동반합니다.<br />
            장애물과 충돌 시 점수가 감소하여 조작의 중요성을 강조했습니다.
          </p>
          <div className="ratio ratio-16x9 rounded shadow-sm mb-3 mx-auto" style={{ maxWidth: '720px' }}>
            {/* 실제 YouTube 영상 ID로 교체하세요 */}
            <iframe
              src="https://www.youtube.com/embed/1Y9un6crR2Y?si=0tuwDRO_ikhLltEQ"
              title="점수 시스템"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-muted text-center mt-2 small">▲ 아이템 수집 및 점수 시스템 시연</p>
        </section>

        {/* --- 기타 구현 및 최적화 --- */}
        <section className="col-12">
          <h2 className="fw-bold mb-3 text-primary">4. 기타 구현 및 최적화</h2>
          <p className="mb-4">
            바다 환경(Material) 구현 및 선박 움직임에 따른 물 튀김 효과(파티클 시스템)를 포함하여 시각적 몰입도를 높였습니다.<br />
            또한 WebGL 환경에서의 성능을 고려하여 적절한 Collider, Shader 적용 및 Asset 경량화, Format과 메모리 조정 등 <br />
            다양한 최적화 방안을 시도했습니다.
          </p>
            <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
                <img
                src="/images/colliderset.png"
                alt="콜라이더 줌아웃"
                className="img-fluid rounded shadow-sm"
                style={{ width: '320px', height: '240px', objectFit: 'cover' }}
                />
                <img
                src="/images/webglset1.png"
                alt="WebGL 세팅"
                className="img-fluid rounded shadow-sm"
                style={{ width: '320px', height: '240px', objectFit: 'cover' }}
                />
            </div>
          <p className="text-muted text-center mt-2 small">▲ 환경 구현 및 WebGL 최적화 설정 일부</p>
        </section>

      </div> {/* End row gy-5 */}

      {/* 결론 */}
      <hr className="my-5" />
      <section className="text-center">
        <p className="text-muted mb-4">
          본 프로젝트를 통해 Unity 엔진의 핵심 시스템(입력, 물리, UI, 감지, 상호작용)에 대한 이해를 높이고,<br />
          WebGL 환경에서의 개발 및 최적화 경험을 쌓을 수 있었습니다.
        </p>
        <Link to="/simulation" className="btn btn-primary btn-lg">
          시뮬레이션 체험하기
        </Link>
      </section>
    </div>
  );
}
