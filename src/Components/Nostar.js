import './css/Nostar.css';
import Dummy from '../dummy.json';

function Nostar() {
    console.log(Dummy[0].src)
    return(
        <div className="container5">
                <div className="staro">
                    트랜드
                </div>
                <div class="align">
                {/* <img src={nostar} className="img3" alt="Big"/>
                <img src={nostar} className="img3" alt="Big"/>
                <img src={nostar} className="img3" alt="Big"/>
                <img src={nostar} className="img3" alt="Big"/>
                <img src={nostar} className="img3" alt="Big"/>
                <img src={nostar} className="img3" alt="Big"/> */}
                {Dummy.map((n)=>(
                    <div class="top">
                        <img src={n.src} alt='' />
                        <div className='images1'>
                            <span></span>
                            <span>#{n.weight}</span><br/>
                            <span>#{n.height}</span><br/>
                            <span>#{n.gender}</span><br/>
                            <span>#{n.season}</span><br/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Nostar;