import { useState } from 'react';
import './Header.css'

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">Huỳnh Nga</h1>
        <nav className="nav-desktop">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            onClick={toggleDarkMode}
            className="theme-toggle"
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="nav-mobile">
          <div className="nav-mobile-content">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="nav-link"
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;