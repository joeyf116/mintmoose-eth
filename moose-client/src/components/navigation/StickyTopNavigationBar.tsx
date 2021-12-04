import {
  Container,
  Nav,
  Navbar,
  Image,
} from "react-bootstrap";
import MooseLogo from "../../assets/MooseLogo.svg";
import { Link } from "react-router-dom";

const StickyTopNavigationBar = (): JSX.Element => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container fluid>
      <Navbar.Brand as={Link} to="/" className="font-monospace fw-bolder">
              {/* <Image src={MooseLogo} height={60} width={60} /> */}
              MooseMint
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </Container>
        <Container fluid className="justify-content-end">
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="jsutify-content-end">
            <Nav.Link as={Link} to="/create" className="font-monospace fs-4 pe-3">Mint</Nav.Link>
            <Nav.Link as={Link} to="/collectibles" className="font-monospace fs-4">Collectibles</Nav.Link>
            <Nav.Link as={Link} to="/marketplace" className="font-monospace fs-4">Marketplace</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default StickyTopNavigationBar;
