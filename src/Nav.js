import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Naving() {
  return (
    <div>
          <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><MenuIcon/>Espresso Center</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="Coffie.js">
            <NavDropdown title="Coffee" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://img.freepik.com/premium-vector/coffee-shop-menu-template-vector_521045-18.jpg?size=626&ext=jpg&ga=GA1.2.531790826.1680080683&semt=ais">Ordinary Coffee</NavDropdown.Item>
              <NavDropdown.Item href="https://img.freepik.com/free-psd/coffeein-coffee-pack-menu-template_23-2148464722.jpg?size=626&ext=jpg&ga=GA1.2.531790826.1680080683&semt=ais">Mocha</NavDropdown.Item>
              <NavDropdown.Item href="https://img.freepik.com/free-psd/coffee-concept-poster-template_23-2148640883.jpg?size=626&ext=jpg&ga=GA1.2.531790826.1680080683&semt=ais">Black Coffee</NavDropdown.Item>
            </NavDropdown>
            </Nav.Link>
            <Nav.Link href="Tea.js">
            <NavDropdown title="Tea" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://img.freepik.com/free-vector/hand-drawn-tea-menu-template_23-2147850442.jpg?size=626&ext=jpg&ga=GA1.1.531790826.1680080683&semt=ais">Ordinary Tea</NavDropdown.Item>
              <NavDropdown.Item href="https://img.lovepik.com/free-template/bg/20200806/bg/97c2f036d75a7_400982.png_detail.jpg!wh650">Black Tea</NavDropdown.Item>
              <NavDropdown.Item href="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e9564c71753425.5bd01bc0dcf15.jpg">Green Tea</NavDropdown.Item>
            </NavDropdown>
            </Nav.Link>
            <Nav.Link href="Pastries.js">
            <NavDropdown title="Pasteries" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://b.zmtcdn.com/data/menus/659/18510659/530ddd956a4081fac5213b3e28b6fb0c.jpg">Cake</NavDropdown.Item>
              <NavDropdown.Item href='https://b.zmtcdn.com/data/menus/890/20238890/4bfc72fe5d6aea99cff1a6c75973599e.jpg'>Pie</NavDropdown.Item>
              <NavDropdown.Item href="https://img.freepik.com/free-psd/doughnuts-madness-e-menu-template_23-2148800199.jpg?size=626&ext=jpg">Donut</NavDropdown.Item>
            </NavDropdown>
            </Nav.Link>
            <p/>
            <ShoppingCartIcon href="Cart.js"></ShoppingCartIcon>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Naving
