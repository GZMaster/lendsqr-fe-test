import Search from "../assets/icons/Search.svg";
import Notification from "../assets/icons/np_notification_2425223_000000 1.svg";
import Profile from "../assets/images/image 4.png";
import useMediaQuery from "../utils/useMediaQuery";
import HamBurger from "../components/Burger/HamBurger";
const Navbar = () => {
  let isPageWide = useMediaQuery("(min-width: 768px)");
  return (
    <nav className="Navbar">
      {!isPageWide ? (
        <HamBurger />
      ) : (
        <div className="l">
          <div className="searchWrapper">
            <input
              type="text"
              className="search"
              placeholder="Search for anything"
            />
            <div className="SearchIcon">
              <img src={Search} alt="" />
            </div>
          </div>
        </div>
      )}
      <div className="r">
        <div className="docs">Docs</div>
        <img src={Notification} className="notification" />
        <div className="profile">
          <img src={Profile} alt="" className="profileImage" />
          <div className="profileName">John Doe</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
