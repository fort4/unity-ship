import UnityPlayer from '../components/UnityPlayer';

export default function Simulation() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Unity WebGL 시뮬레이터</h2>
      <UnityPlayer />
    </div>
  );
}
