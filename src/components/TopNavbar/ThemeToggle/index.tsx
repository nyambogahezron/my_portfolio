'use client';
import { FaCog, FaMoon, FaSun } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import styles from './index.module.css';

const ThemeToggle = () => {
  const [toggleColorSwitcher, setToggleColorSwitcher] =
    useState<boolean>(false);
  const [theme, setTheme] = useState<string>(
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // skin color change
  const colors: { [key: string]: string } = {
    'color-1': '#ec1839',
    'color-2': '#18ec45',
    'color-3': '#fa5b0f',
    'color-4': '#37b182',
    'color-5': '#1854b4',
  };

  const setActiveStyle = (color: string) => {
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
    <div className={styles.actionIcons}>
      <div
        className={`${styles.dayNight} ${styles.sIcon}`}
        onClick={toggleTheme}
      >
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </div>
      <div className={styles.sIcon}>
        <FaCog
          className={styles.spin}
          onClick={() => setToggleColorSwitcher(!toggleColorSwitcher)}
        />
        <div
          className={` ${styles.styleSwitcher} ${
            toggleColorSwitcher ? styles.open : ''
          }`}
        >
          <h4>Theme Color</h4>
          <div className={styles.colors}>
            {Object.keys(colors).map((color) => (
              <span
                style={{ backgroundColor: colors[color] }}
                key={color}
                className={styles.color}
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
  );
};

export default ThemeToggle;
