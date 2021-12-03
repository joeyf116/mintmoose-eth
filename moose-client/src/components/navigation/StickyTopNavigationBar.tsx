import { Container, Nav, Navbar, Image } from "react-bootstrap";
import MooseLogo from "../../assets/MooseLogo.svg";
import { Link } from "react-router-dom";
import WalletConnect from "../wallet/WalletConnect";

const StickyTopNavigationBar = (): JSX.Element => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Image src={MooseLogo} width={50} height={50} fluid />
        </Navbar.Brand>
        <Navbar.Brand>
          <WalletConnect />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default StickyTopNavigationBar;
