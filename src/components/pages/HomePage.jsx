// Importing components 
import { useContext } from "react";
import ThemeContext from "../GlobalThemeContext";

// Importing Icons
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";

// HomePage component
const HomePage = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className="home-page-container">
      <h1>
        My Website
      </h1>

      <h3>
        Hello viewers, this is my website that was built using React Native. This project includes common features, such as switching between light and dark mode or switching between different pages, using basic React hooks, such as useContext and useState (for now).
      </h3>

      <div
        className={`${theme}-contact-info-area-container`}
      >
        <h1
          className="contact-info-header"
        >
          GET IN TOUCH
        </h1>

        <div className="contact-info-container">
          <div className="location-info-container">
            <a
              className="phone-info-link info-link"
              href="https://maps.google.com/?q=1719 N Lincoln St, Bloomington, IN, 47408"
              rel="noreferrer"
              target="_blank"
            >
              <FaLocationDot
              className={`location-info-icon ${theme}-info-icon`}
            />
            </a>
            
            

            <div className="location-info-text info-text-container">
              <h3>
                1719 North Lincoln Street
              </h3>

              <h4>
                Bloomington, Indiana, USA, 47408
              </h4>
            </div>
          </div>
          <div className="phone-info-container">
            <a
              className="phone-info-link info-link"
              href="tel:682-241-0059"
              rel="noreferrer"
              target="_blank"
            >
              <FaPhone
                className={`phone-info-icon ${theme}-info-icon`}
              />
            </a>

            <div className="phone-info-text info-text-container">
              <h3>
                +1 (682) 241-0059
              </h3>

              <h4>
                Messaging is preferred
              </h4>
            </div>
          </div>
          <div className="email-info-container">
            <a
              className="phone-info-link info-link"
              href="mailto:bradcodecraft@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <FaMessage
              className={`email-info-icon ${theme}-info-icon`}
              />
            </a>
            
            <div className="location-info-text info-text-container">
              <h3>
                bradcodecraft@gmail.com
              </h3>

              <h4>
                I will respond to email within 1 work day
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;