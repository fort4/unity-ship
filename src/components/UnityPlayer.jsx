
const UnityPlayer = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
    <iframe
      src="/Build/index.html"
      title="Unity WebGL Player"
      width="100%"
      height="100%"
      style={{ border: 'none' }}
    />
    </div>
  );
};

export default UnityPlayer;
