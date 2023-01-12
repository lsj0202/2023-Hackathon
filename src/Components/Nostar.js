import './css/Star.css';
import nostar from '../assets/images/nostar.png';

function Nostar() {
    return(
        <div className="container1">
            <div>
                <div className="sta">
                    트랜드
                </div>
                <img src={nostar} className="img3" alt="Big"/>
                <img src={nostar} className="img3" alt="Big"/>
                <img src={nostar} className="img3" alt="Big"/>
                <img src={nostar} className="img3" alt="Big"/>
                <img src={nostar} className="img3" alt="Big"/>
                <img src={nostar} className="img3" alt="Big"/>
            </div>
        </div>
    );
}

export default Nostar;