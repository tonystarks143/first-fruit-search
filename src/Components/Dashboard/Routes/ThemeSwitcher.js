import React, { useState } from 'react';

const ThemeSwitcher = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`theme-switcher ${isDarkTheme ? 'dark' : 'light'}`}>
      <button className="btn btn-primary" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
