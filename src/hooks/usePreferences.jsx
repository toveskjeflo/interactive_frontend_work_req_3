import { useState } from 'react';

export const usePreferences = () => {
  const [preferences, setPreferences] = useState({
    theme: 'light',
    mood: 'productive',
    zenMode: false // New Feature
  });

  const updatePreference = (key, value) => {
    setPreferences((prev) => ({ ...prev, [key]: value }));
  };

  return { preferences, updatePreference };
};