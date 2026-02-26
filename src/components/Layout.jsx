import { Outlet, Link } from 'react-router-dom';
import { usePreferences } from '../hooks/usePreferences.jsx';

export default function Layout() {
  const prefData = usePreferences();
  const { theme, zenMode } = prefData.preferences;

  return (
    <div className={`app-container ${theme} ${zenMode ? 'zen-mode' : ''}`}>
      <nav>
        <Link to="/">Instrumentpanel</Link>
        <Link to="/settings">Skreddersy</Link>
      </nav>
      <main>
        <Outlet context={prefData} />
      </main>
    </div>
  );
}