import Search from "../assets/icons/Search.svg";
import Notification from "../assets/icons/np_notification_2425223_000000 1.svg";
const Navbar = () => {
  return (
    <nav className="Navbar">
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
      <div className="r">
        <div className="docs">Docs</div>
        <img src={Notification} className="notification" />
        <div className="profile">
          <img src="" alt="" className="profileImage" />
          <div className="profileName">John Doe</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
