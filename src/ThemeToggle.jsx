import { useTheme } from './useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full focus:outline-none transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <span className="text-gray-700">🌙</span>
      ) : (
        <span className="text-yellow-300">☀️</span>
      )}
    </button>
  );
};

export default ThemeToggle;