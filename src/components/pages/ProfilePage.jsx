import { useContext } from "react";
import { BsFileEarmarkPerson } from "react-icons/bs";
import ThemeContext from "../GlobalThemeContext";

const ProfilePage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="profile-page-container">
      <div className="profile-page-header-container">
        <BsFileEarmarkPerson
          className="profile-page-temporary-avatar"
        />


        <div className="profile-page-photos-container">
          <h2>130</h2>
          <h4>photos</h4>
        </div>

        <div className="profile-page-followers-container">
          <h2>4.1k</h2>
          <h4>followers</h4>
        </div>

        <div className="profile-page-activity-container">
          <h2>Daily</h2>
          <h4>activity</h4>
        </div>
      </div>

      <div className="profile-page-top-info-container">
        <span>
          <h1>Brad Nguyen</h1>
        </span>

        <div
          className={`${theme}-top-info-line-break`}
        />

        <span>
          <h2>Information System and Computer Scient student</h2>
        </span>
      </div>

      <div
        className={`${theme}-profile-page-line-break`}
      />

      <div className="profile-page-bottom-info-container">
        <div className="bottom-info-header-container">
          <div
            className={`${theme}-bottom-info-line-break`}
          />

          <h2>Biography</h2>
        </div>

        <div className="bottom-info-main-container">
          <div className={`height-info-container ${theme}-info-container`}>
            <h2>5.5</h2>
            <h4>Height</h4>
          </div>

          <div className={`age-info-container ${theme}-info-container`}>
            <h2>21</h2>
            <h4>Age</h4>
          </div>

          <div className={`eye-info-container ${theme}-info-container`}>
            <h2>Black</h2>
            <h4>Eyes</h4>
          </div>

          <div className={`gpa-info-container ${theme}-info-container`}>
            <h2>3.88</h2>
            <h4>GPA</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage;