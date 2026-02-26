import { useOutletContext } from 'react-router-dom';

export default function Settings() {
  const { preferences, updatePreference } = useOutletContext();

  return (
    <div className="glass-card">
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Interface Settings</h2>
      
      <div style={{ marginBottom: '2rem' }}>
        <label>Visuell stil</label>
        <select value={preferences.theme} onChange={(e) => updatePreference('theme', e.target.value)}>
          <option value="light">Snø hvit</option>
          <option value="dark">Midnatt blå</option>
        </select>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <label>Dagen Vibe</label>
        <select value={preferences.mood} onChange={(e) => updatePreference('mood', e.target.value)}>
          <option value="productive">Fult fokus</option>
          <option value="relaxed">Hviiiiiletid</option>
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
        <span>Slå på Zen-modus</span>
      </div>
    </div>
  );
}