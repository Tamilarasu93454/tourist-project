import { Container } from "react-bootstrap"
import {Col} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import './css/footer.css';
import sea from "./images/package-1.jpg"
import girlimage from "./images/package-2.jpg"
import river from "./images/package-3.jpg"


function Footer(){
return(
    <div className="Footer-container">
        <Container className="Footer-container1">
            <Row>
                <Col className="footer-col1">
                <h4>Company</h4>
                <ul>
                    <li>About us</li>
                    <li>contact us</li>
                    <li>Privacy policy</li>
                    <li>Terms & Condition</li>
                    <li>FQQs & Help</li>
                </ul>
                </Col>
                <Col className="footer-col1">
               <h4>Contact</h4>
               <ul>
                <li><i class="bi bi-geo-alt-fill"></i> 123 street, Newyork ,USA</li>
                <li><i class="bi bi-telephone-fill"></i> 012 345 6789</li>
                <li><i class="bi bi-envelope-open-fill"></i> Tourist@gmail.com</li>
           
               </ul>
                </Col>
                <Col className="footer-col1">
                <h4>Gallery</h4>
                <Row className="footer-image-row">
                    <Col className="footer-image-col">
                    <img  src={sea}  alt="Indonesia" width={72} height={50}  className="footer-image-bg"/>
                    </Col>
                    <Col className="footer-image-col">
                    <img  src={girlimage}  alt="Indonesia" width={72} height={50}  className="footer-image-bg" />
                    </Col>
                    <Col className="footer-image-col">
                    <img  src={river}  alt="Indonesia"  width={72} height={50}   className="footer-image-bg" />
                    </Col>
                </Row>
                <Row  className="footer-image-row">
                    <Col className="footer-image-col">
                       <img  src={girlimage}  alt="Indonesia" width={72} height={50}  className="footer-image-bg" />
                    </Col>
                    <Col className="footer-image-col">
                    <img  src={river}  alt="Indonesia"  width={72} height={50}   className="footer-image-bg" />
                    </Col>
                    <Col className="footer-image-col">
                    <img  src={sea}  alt="Indonesia" width={72} height={50}  className="footer-image-bg"/>
                    </Col>
                </Row>
                </Col>
                <Col className="footer-col1">
                <h4>Newsletter</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, odit.</p>
                <div className="footer-input-div">
                <input className="footer-input" placeholder="Your email"></input>
                <button className="footer-input-button">signup</button>
                </div>
                </Col>
               
            </Row>
            <Container >
            <Row>
                <Col className="footer-copy-col1">
                <p>C Your site Name,All rights reserved.Designed by Tamilarasu</p>
                </Col>
                <Col className="footer-copy-col1" id="footer-copy-col2">
                <div className="footer-copy-content">
            
                 <a href>Home </a>
                 <a href>Cookies </a>
                 <a href>Help</a>
                 <a href>FAQs</a>
                </div>
                </Col>
            </Row>
            </Container>

        </Container>

    </div>
)
}

export default Footer;
