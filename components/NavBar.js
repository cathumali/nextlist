import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          alt=""
          src="/logo.png"
          // width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        NextList
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/jobs">Jobs</Nav.Link>
        <Nav.Link href="/memes">Memes</Nav.Link>
      </Nav>
    </Navbar>
)
export default NavBar;
