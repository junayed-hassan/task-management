import { useEffect, useState } from "react";
import Container from "../../components/Container";
import { MdOutlineLightMode } from "react-icons/md";

function Header() {

  const [theme, setTheme] = useState(localStorage.getItem('themeMode') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('themeMode', theme);
  }, [theme]);

  const themeHandler = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="py-4 border-b">
        <Container className="flex justify-between items-center">
          <strong className="dark:text-red-600">JUNAYED HASSAN</strong>
          { <MdOutlineLightMode onClick={themeHandler} className={`text-xl cursor-pointer ${theme === 'dark' && 'text-white'}`} /> }
        </Container>
    </div>
  )
}

export default Header