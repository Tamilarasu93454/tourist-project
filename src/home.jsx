import './home.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Services from './services';
import About from './about';
import Destination from './destination';
// import { Navbar } from 'react-bootstrap';
import NavbarComponent from "./navbar-component"
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// import React, { useState, useEffect } from 'react';


function Home(){
  // const [scrolling, setScrolling] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       setScrolling(true);
  //     } else {
  //       setScrolling(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);


    return(
 <>

    <div className="Home-container" >
      <div className="Backimage">
    
                <div className='content1'>   
                <NavbarComponent /> 
             { <div className='searchbar'>
               <h1>Enjoy Your Vacation With Us</h1>
               <p>We offer a Variety of packages in which you can explore the World</p>
               <input type='text' />
               <button>Search </button>
             </div> }
          </div>
            
       </div>
   
         {/* second page starts */}
        
          <About />

         {/* service page ,third page starts */}
         
         <Services />

        {/* Destintation pages starts */}
         <Destination />
  

    </div>
  
    </>
    )}

export default Home;