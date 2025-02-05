import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    backgroundColor: "#333",
  };

  const logoStyle = {
    fontSize: "24px",
    color: "white",
    fontWeight: "bold",
  };

  const navLinksStyle = {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    transition: "color 0.3s ease",
  };

  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>MyWebsite</div>
      <ul style={navLinksStyle}>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/about" style={linkStyle}>About</Link></li>
        <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
