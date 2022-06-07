import { BrowserRouter, Link } from "react-router-dom";

export default function Root(props) {
  const linkStyle = {
    padding: "16px",
    display: "inline-block",
    color: "#ffffff",
  };

  const containerStyle = {
    padding: "1rem",
    backgroundColor: "#6b5b95",
    color: "#ffffff",
  }

  return (
    <section style={containerStyle}>
        <div>
          {props.name} is mounted!
        </div>
        <div>
          <BrowserRouter basename="/">
            <Link to="/" style={linkStyle}>
              Home
            </Link>
            <Link to="/shop" style={linkStyle}>
              Shop
            </Link>
          </BrowserRouter>
        </div>
    </section>
  );
}
