import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

export default function Root(props) {
  const linkStyle = {
    padding: "16px",
    display: "inline-block",
    color: "#ffffff",
  };

  const containerStyle = {
    "padding": "1rem",
    "backgroundColor": "#ff7b25",
    "color": "#000000",
  }

  function ShopHome() {
    return <h2>Shop home</h2>
  }

  function Phones() {
    return <h2>Shop phones</h2>
  }

  function Computers() {
    return <h2>Shop computers</h2>
  }

  return (
    <section style={containerStyle}>
      <h1>Shop page</h1>
        <div>
          {props.name} is mounted!
        </div>
        <div>
          <BrowserRouter basename="/">
            <Link to="/shop/phones" style={linkStyle}>
              Phones
            </Link>
            <Link to="/shop/computers" style={linkStyle}>
              Computers
            </Link>
            <Routes>
              <Route path="/shop" element={<ShopHome />} />
              <Route path="/shop/phones" element={<Phones />} />
              <Route path="/shop/computers" element={<Computers />} />
            </Routes>
          </BrowserRouter>
        </div>
    </section>
  );
}
