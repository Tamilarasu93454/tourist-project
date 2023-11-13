import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./css/service.css"
function Services(){
    return(
        <div>
            <Container>
            <div className='service-container1'>
            <h6>
                SERVICES</h6>
               
            <h1>Our Services</h1>
            </div>
            <Row className='servies-row1'>
                <Col className='services-col' sm={3}>
                    <div  className='services-col-items'>
                    <h4>World Wide Tours</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, eaque.</p>
                    </div>
                </Col>
                <Col className='services-col' sm={3}>    
                <div  className='services-col-items'>
                    <h4>Hotel Reservations</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, eaque.</p>
                    </div></Col> 
                <Col className='services-col'  sm={3}>
                <div  className='services-col-items'>
                    <h4>Travel Guides</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, eaque.</p>
                    </div>
                </Col>
                <Col className='services-col'  sm={3}>
                <div  className='services-col-items'>
                    <h4>Event Management</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, eaque.</p>
                    </div>
                </Col>
                <Col className='services-col' sm={3}>    <div  className='services-col-items'>
                    <h4>World Wide Tours</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, eaque.</p>
                    </div></Col>
                <Col className='services-col'  sm={3}>    <div  className='services-col-items'>
                    <h4>World Wide Tours</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, eaque.</p>
                    </div></Col> 
                <Col className='services-col' sm={3}>    <div  className='services-col-items'>
                    <h4>World Wide Tours</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, eaque.</p>
                    </div></Col>
                <Col  className='services-col' sm={3}>    <div  className='services-col-items'>
                    <h4>World Wide Tours</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, eaque.</p>
                    </div></Col>
            </Row>

         </Container>
        </div>
    )
}

export default Services;