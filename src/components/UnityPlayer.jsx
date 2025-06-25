import { useState } from 'react';

const UnityPlayer = () => {
  const [showHelp, setShowHelp] = useState(true);

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      {/* Unity WebGL iframe */}
      <iframe
        src="/webgl/index.html"
        title="Unity WebGL Player"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      />

      {/* 토글 버튼 */}
      <button
        onClick={() => setShowHelp(!showHelp)}
        style={{
          position: 'absolute',
          top: '5.5rem',
          left: '1rem',
          zIndex: 11,
          background: '#222',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '36px',
          height: '36px',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 0 6px rgba(250, 215, 215, 0.4)',
        }}
        title={showHelp ? '도움말 닫기' : '도움말 열기'}
      >
        ?
      </button>

      {/* 설명 박스 */}
      {showHelp && (
        <div
          style={{
            position: 'absolute',
            top: '5rem', // 살짝 더 아래로
            left: '1rem',
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            color: 'white',
            padding: '1rem',
            borderRadius: '8px',
            maxWidth: '300px',
            fontSize: '0.9rem',
            lineHeight: '1.5',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
            zIndex: 10,
          }}
        >
          <h6 className="fw-bold mb-2">🕹 조작 방법</h6>
          <ul className="mb-2" style={{ paddingLeft: '1rem' }}>
            <li><strong>W / ↑</strong>: 전진</li>
            <li><strong>S / ↓</strong>: 후진</li>
            <li><strong>A / ←</strong>: 좌회전</li>
            <li><strong>D / →</strong>: 우회전</li>
            <li><strong>Shift</strong>: 가속</li>
          </ul>
          <h6 className="fw-bold mb-1">💡 점수 시스템</h6>
          <ul style={{ paddingLeft: '1rem' }}>
            <li>부표 습득: +10점</li>
            <li>암석 충돌: -20점</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UnityPlayer;
