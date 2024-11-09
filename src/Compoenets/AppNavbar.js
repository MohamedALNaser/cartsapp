import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { getCarts } from "../rtk/slice/cart-slice";

function AppNavbar() {
  const cartslength = useSelector((state) => state.carts).length;
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCarts());
  // }, []);
  // console.log(cartslength);
  return (
    <Navbar fixed="top" bg="light" expand="lg" className="fixed">
      <Container>
        <Link to="/" className=" navbar-brand">
          CartApp
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/Products" className="nav-link">
              Products
            </Link>
            <Link to="/Cart" className="nav-link">
              Carts {cartslength !== 0 && <span>- {cartslength}</span>}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
