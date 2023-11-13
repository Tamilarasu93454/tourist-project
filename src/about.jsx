import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function About(){
    return(<div>
     <Container className='container2'>
         <Row >
            <Col sm={6} className='about-col1'>
            <div className='about-col1-image'></div>
            </Col> 
            <Col  className='about-col2' >
             <h6  className=''>ABOUT US </h6>
              <h1  className=''>Welcome to Tourist</h1>
               <p  className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, corporis sint dicta eum culpa nostrum.</p>
                <p  className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium debitis cupiditate, quaerat illum, quae vel veniam numquam aspernatur
                         ratione ipsam tempore, tenetur soluta sunt dolorum.</p>
               <Row>
                <Col sm={6}><p>First Star Flights</p></Col>
                <Col sm={6}><p>Hand Picked Hotels</p></Col>
                <Col sm={6}><p>5 Star Accomodations</p></Col>
                <Col sm={6}><p> Latest Model Vehicle</p></Col>  
                <Col sm={6}><p>150 Premiem City Tours</p></Col> 
                <Col sm={6}><p>24/7 Services</p></Col>
               </Row>
            <button>Read more</button>
            </Col> 
            </Row>
    </Container>

    </div>)
}
  export default About; 