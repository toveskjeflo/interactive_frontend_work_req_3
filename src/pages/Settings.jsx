import { useOutletContext } from 'react-router-dom';

export default function Settings() {
  const { preferences, updatePreference } = useOutletContext();

  return (
    <div className="glass-card">
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Interface Settings</h2>
      
      <div style={{ marginBottom: '2rem' }}>
        <label>Visual Style</label>
        <select value={preferences.theme} onChange={(e) => updatePreference('theme', e.target.value)}>
          <option value="light">Minimal Light</option>
          <option value="dark">Midnight Slate</option>
        </select>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <label>Current Vibe</label>
        <select value={preferences.mood} onChange={(e) => updatePreference('mood', e.target.value)}>
          <option value="productive">Focus Flow 🎯</option>
          <option value="relaxed">Slow Living ☁️</option>
        </select>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} 
           onClick={() => updatePreference('zenMode', !preferences.zenMode)}>
        <div style={{ 
          width: '40px', height: '20px', background: preferences.zenMode ? '#6366f1' : '#ccc',
          borderRadius: '20px', position: 'relative', transition: '0.3s'
        }}>
          <div style={{ 
            width: '16px', height: '16px', background: 'white', borderRadius: '50%',
            position: 'absolute', top: '2px', left: preferences.zenMode ? '22px' : '2px', transition: '0.3s'
          }} />
        </div>
        <span>Enable Zen Mode (Pulse Background)</span>
      </div>
    </div>
  );
}