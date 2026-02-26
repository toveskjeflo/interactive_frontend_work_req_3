import { useOutletContext } from 'react-router-dom';

export default function Preview() {
  const { preferences } = useOutletContext();

  const config = {
    productive: { title: "Deep Work Mode", quote: "Focus on being productive instead of busy." },
    relaxed: { title: "Quiet Moments", quote: "Sometimes the most productive thing you can do is relax." }
  };

  const current = config[preferences.mood];

  return (
    <div className="glass-card" style={{ textAlign: 'center' }}>
      <span style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', opacity: 0.6 }}>
        Dagens Preferanse: {preferences.theme}
      </span>
      <h1 style={{ fontSize: '3.5rem', margin: '1rem 0', fontWeight: '800' }}>
        {current.title}
      </h1>
      <p style={{ fontSize: '1.2rem', fontStyle: 'italic', opacity: 0.8, lineHeight: '1.6' }}>
        "{current.quote}"
      </p>
      {preferences.zenMode && (
        <div style={{ marginTop: '2rem', color: '#6366f1', fontSize: '0.9rem', fontWeight: 'bold' }}>
          Zen-modus aktivt
        </div>
      )}
    </div>
  );
}