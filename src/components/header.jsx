import "../styles/header.css";
import keys from "../images/keys.jpg";

const Header = () => {
  return (
    <header id="main-header">
      <img src={keys} id="keys" alt="Keys" />
      <h1>Vacation Properties</h1>
    </header>
  );
};

export default Header;
