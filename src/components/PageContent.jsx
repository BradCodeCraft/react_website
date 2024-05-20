import { useContext } from "react";
import ThemeContext from "./GlobalThemeContext";
import PageContext from "./GlobalPageContext";

import HomePage from "./pages/HomePage";
import StorePage from "./pages/StorePage";
import CommunityPage from "./pages/CommunityPage";
import ProfilePage from "./pages/ProfilePage";

const PageContent = () => {
  const { theme } = useContext(ThemeContext);
  const { page} = useContext(PageContext);

  return (
    <div className={`${theme}-page-content-container`}>
      {
       (page === 'home') ?
       <HomePage /> :
       (page === 'store') ?
       <StorePage /> :
       (page === 'community') ?
       <CommunityPage /> :
       (page === 'profile') ?
       <ProfilePage /> :
        "Page does not exist"
      }
    </div>
  )
}

export default PageContent;