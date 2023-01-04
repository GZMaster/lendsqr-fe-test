import logo from "../assets/images/logo.svg";
const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="left">
        <div className="logo">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="searchWrapper">
          <input
            type="text"
            className="search"
            placeholder="Search for anything"
          />
        </div>
      </div>
      <div className="docs">
        <a href="#">Docs</a>
      </div>
      <div className="notification"></div>
      <div className="profile">
        <div className="profileImage"></div>
        <div className="profileName">John Doe</div>
      </div>
    </nav>
  );
};

export default Navbar;
