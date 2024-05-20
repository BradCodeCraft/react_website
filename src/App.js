import { useState } from "react";

import NavigationBar from "./components/NavigationBar";
import PageContent from "./components/PageContent";
import ThemeContext from "./components/GlobalThemeContext";
import PageContext from "./components/GlobalPageContext";

const App = () => {
  const [theme, setTheme] = useState('light');
  const currentTheme = { theme, setTheme };

  const [page, setPage] = useState('home');
  const currentPage = { page, setPage};

  return (
    <div className={`${theme}-app-container`}>
      <ThemeContext.Provider value={currentTheme}>
        <PageContext.Provider value={currentPage}>
          <NavigationBar />
          
          <PageContent />
        </PageContext.Provider>
      </ThemeContext.Provider>
    </div>
  )
}

export default App;