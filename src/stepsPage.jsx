import { Container } from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import "./css/steps.css"

function StepsPage(){
    return(
        <div>
            <Container  className='steps-container' >
            <div className='steps-container1'>

<h6>PROCESS</h6>
   
<h1>3 Easy Steps</h1>
</div>
                <Row  className="steps-row1" > 
                     <Col className="steps-col"  sm={4}>
                     <div className="steps-col-content">
                        <div className="stepsIcons">
                            <p>icons</p>
                        </div>
                        <h5>Choose a Destination</h5>
                        <div  id="hrTags">
                        
                     <hr className="hr1"></hr>
                     <hr  className="hr2"></hr>

                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non suscipit dicta corporis nesciunt, quod cupiditate?</p>
                     </div>
                     </Col>
                     <Col className="steps-col"  sm={4} >
                     <div className="steps-col-content">
                     <div className="stepsIcons">
                            <p>icons</p>
                        </div>
                     <h5>Pay online</h5>
                     <div id="hrTags">
                     <hr className="hr1"></hr>
                     <hr  className="hr2"></hr>
                     </div>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non suscipit dicta corporis nesciunt, quod cupiditate?</p>
                     </div>
                     </Col>
                     <Col  className="steps-col"  sm={4}
                     >
                     <div className="steps-col-content">
                     <div className="stepsIcons">
                            <p>icons</p>
                        </div>
                     <h5>Fly Today</h5>
                     <div id="hrTags">
                     <hr className="hr1"></hr>
                     <hr  className="hr2"></hr>
                     </div>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non suscipit dicta corporis nesciunt, quod cupiditate?</p>
                     </div>
                     </Col>
                </Row>
            </Container>
        </div>
    )
}
export default StepsPage;