 import Container from 'react-bootstrap/Container';
 import Row from 'react-bootstrap/Row';
 import Col from 'react-bootstrap/Col';
 import "./css/bookingPage.css"
function BookingPage(){
    return(
       <div>
        <Container className="booking-container">
            <div className='booking-container1'> 
            <Row id="booking-row1">
                <Col id="booking-col1" >
                <h6>BOOKING</h6>
                <h1>Online Booking</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, 
                    accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, et?</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis provident esse illum soluta impedit quisquam corporis.</p>
            <button>Read More</button>
                   
                </Col>
                <Col  id="booking-col2">
                
                <h1>Book A Tour</h1>
                </Col>
            </Row>
            </div>
        </Container>

       </div>

    )

        
    
}
export default BookingPage;