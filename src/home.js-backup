import './home.css';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap-icons/font/bootstrap-icons.css'

// import back from './images/back.jpg'
function Home(){
    return(
 
        <div className="Container" >
      <div className="Backimage">  
       <div className="Header">
         <div className='Headerinfo'>
          <ul className='Headeraddress'>
            <li className='Headeradddress1' ><span ><i class="bi bi-geo-alt-fill"></i> </span>123 Street, Newyork, USA</li>
            <li className='Headeradddress1' ><span ><i class="bi bi-telephone-fill"></i> </span>+012   345 6789</li>
            <li className='Headeradddress1' ><span><i class="bi bi-envelope-open-fill"></i> </span> Tourist@gmail.com</li>
          </ul>
         </div>
         <div className='Headericons'>         
          <li><div className='Headericons1'></div></li>
          <li><div className='Headericons1'></div></li>
          <li><div className='Headericons1'></div></li>
          <li><div className='Headericons1'></div></li>
          <li><div className='Headericons1'></div></li>
         </div>
       </div>
       <div className='content1'>  
    
            {/*  //navbar and search bar page */}
    <Navbar   expand="lg" className='navbar-dark' > 
    <Container fluid   className='navbox'>
        <Navbar.Brand ><div id="navbrand" ><h1 ><i class="bi bi-geo-alt-fill"></i> TOURIST</h1></div></Navbar.Brand>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
        <Nav className='NavContents' >
         <Nav.Item   className='Navitem'>
          <Nav.Link href="/home"  >Home</Nav.Link>
        </Nav.Item>
        <Nav.Item  className='Navitem'>
          <Nav.Link >About</Nav.Link>
        </Nav.Item >
         <Nav.Item  className='Navitem'>
          <Nav.Link event  Key="link-2">Services</Nav.Link>
        </Nav.Item>
         <Nav.Item  className='Navitem'>
          <Nav.Link eventKey="link-2">Packages</Nav.Link>
        </Nav.Item>
       
       <Nav.Item  className='Navitem'>
             <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Destination</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Booking
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"> 
              Travel Guides</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
               Testimonial
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
               404
              </NavDropdown.Item>
            </NavDropdown>
            </Nav.Item>
            <Nav.Item  className='Navitem'>
          <Nav.Link eventKey="link-2" >Contact</Nav.Link>
        </Nav.Item> 
        </Nav>
       </Navbar.Collapse>
       {/* </Col> */}
       {/* </Row> */}
      </Container>
   </Navbar>                                              {/*  //navbar section over */}
   <hr></hr>
          <div className='searchbar'>
            <h1>Enjoy Your Vacation With Us</h1>
            <p>We offer a Variety of packages in which you can explore the World</p>
            <input type='text' />
            <button>Search </button>
          </div>
        </div>
       </div>
     
    </div>
    
    )
}
export default Home;