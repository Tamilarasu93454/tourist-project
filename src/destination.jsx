import { Container } from "react-bootstrap"
import {Col} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import './css/destination.css'
import maldives from "./images/destination-1.jpg"
import malaysia from "./images/destination-2.jpg"
import australia from "./images/destination-3.jpg"
import indonesia from "./images/destination-4.jpg"
function Destination(){
    return(
        <div>
            <Container className="destination-container">
            <div className='destination-container1'>

            <h6>DESTINATION</h6>
               
            <h1>Popular Destinaton</h1>
            </div>
            <Row  className="destination-Row1">
               <Col sm={7} className="destination-col" >
                <div >
             <img src={maldives} alt="thailand" width={642}/>
                </div>
                <Row className="destination-Row">
                  <Col className="destination-col" id="destination-Row1-col">
                    <div>
                        <img src={malaysia} alt="malasiya"  width={311}/>
                    </div>
                  </Col >
                  <Col className="destination-col" id="destination-Row1-col" >
                    <div >
                  <img src={australia} alt="Australia" width={311} />
                  </div>
                  </Col>
                </Row>
               </Col>
               <Col className="destination-col" id="destination-Row1-col2">
               
               <img  src={indonesia}  alt="Indonesia" width={463} />
               </Col>
               </Row>
            </Container>
        </div>
    )
}
export default Destination;