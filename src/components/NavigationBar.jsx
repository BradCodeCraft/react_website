// Importing Components
import { useContext } from "react";
import ThemeContext from "./GlobalThemeContext";
import PageContext from "./GlobalPageContext";

// Importing Icons
import { FaArchway } from "react-icons/fa6";
import { FaStore } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";
import { BiMoon } from "react-icons/bi";
import { BiSun } from "react-icons/bi";


// NavigationBar Component
function NavigationBar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { setPage } = useContext(PageContext);

  return (
    <div
      className={`${theme}-navigation-bar-container`}
    >
      <div
        className="home-page-icon-container"
      >
        <button
          className={`home-page-icon ${theme}-icon-button`}
          onClick={() => setPage('home')}
        >
          <FaArchway />
        </button>
      </div>

      <div
        className="main-pages-icon-container"
      >
        <button
          className={`store-page-icon ${theme}-icon-button`}
          onClick={() => setPage('store')}
        >
          <FaStore />
        </button>
        <button
          className={`community-page-icon ${theme}-icon-button`}
          onClick={() => setPage('community')}
        >
          <FaPeopleGroup />
        </button>
        <button
          className={`profile-page-icon ${theme}-icon-button`}
          onClick={() => setPage('profile')}
        >
          <FaPerson />
        </button>
      </div>

      <div
        className="setting-page-icon-container"
      >
        <button
          className={`setting-page-icon ${theme}-icon-button`}
          onClick={() => {theme === 'dark' ? setTheme('light') : setTheme('dark')}}
        >
          {(theme === 'dark') ?
          <BiMoon /> : <BiSun />}
        </button>
      </div>
    </div>
  )
}

export default NavigationBar;