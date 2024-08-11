import { FaMoon, FaSun, FaCog } from 'react-icons/fa';
import { useState, useEffect } from 'react';
const TopNavbar = () => {
  const [toggleColorSwitcher, setToggleColorSwitcher] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // skin color change
  const colors = {
    'color-1': '#ec1839',
    'color-2': '#18ec45',
    'color-3': '#fa5b0f',
    'color-4': '#37b182',
    'color-5': '#1854b4',
  };

  const setActiveStyle = (color) => {
    localStorage.setItem('--skin-color', colors[color]);
    document.body.style.setProperty('--skin-color', colors[color]);
  };

  useEffect(() => {
    const defaultColor = localStorage.getItem('--skin-color');
    if (!defaultColor) {
      setActiveStyle('color-1'); // Set default color
    } else {
      document.body.style.setProperty('--skin-color', defaultColor);
    }
  }, []);

  return (
    <div className='top-nav'>
      <div className='wrapper'>
        <div className='menu-toggle'></div>
        <div className='action-icons'>
          <div className='day-night s-icon' onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </div>
          <div className='style-switcher-toggler s-icon'>
            <FaCog
              className='spin'
              onClick={() => setToggleColorSwitcher(!toggleColorSwitcher)}
            />
            <div
              className={`style-switcher ${toggleColorSwitcher ? 'open' : ''}`}
            >
              <h4>Theme Color</h4>
              <div className='colors'>
                {Object.keys(colors).map((color) => (
                  <span
                    style={{ backgroundColor: colors[color] }}
                    key={color}
                    className={color}
                    onClick={() => {
                      setActiveStyle(color);
                      setToggleColorSwitcher(false);
                    }}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopNavbar;
