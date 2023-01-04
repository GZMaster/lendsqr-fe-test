import "../styles/main.scss";
import logo from "../assets/images/logo.svg";
import LoginImg from "../assets/images/pablo-sign-in 1.png";
const Login = () => {
  return (
    <section className="Login">
      <div className="Container">
        <div className="left">
          <img src={logo} alt="logo" className="logo" />
          <img src={LoginImg} alt="Login Image" className="LoginImg" />
        </div>
        <div className="right">
          <div className="title">Welcome!</div>
          <p className="text">Enter details to login.</p>
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </form>
          <a href="#" className="forget">
            FORGOT PASSWORD?
          </a>
          <div className="btn">LOG IN</div>
        </div>
      </div>
    </section>
  );
};

export default Login;
