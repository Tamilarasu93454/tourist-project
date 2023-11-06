import './home.css';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
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
         <Container fluid className='navbar'>
           <div className='navbrand'>
            <h1>TOURIST</h1>
           </div>
           <div className='navcontents'>
            <div className='navitems'>
             <p>Home</p>
            </div>
            <div className='navitems'>
            <p>About</p>
            </div>
            <div className='navitems'>
            <p>Services</p>
            </div>  
             <div className='navitems'>
             <p>Packages</p>
            </div>
            <div className='navitems'>
            <p>Pages</p>
            </div>
            <div className='navitems'>
            <p>Contact</p>
            </div>
             <button className='navbutton'>
              Register
             </button>
           </div>
         </Container>
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