import './index.css';
import back from "./images/back.jpg";
function Index(){
    return(
    <div className="Container">
      <div className="Backimage">
       <image src={back} alt="aboutpage" width="100%" height="50px"/> 
       {/* <div className="Header"></div> */}
      </div>
    </div>
    )
}
export default Index;