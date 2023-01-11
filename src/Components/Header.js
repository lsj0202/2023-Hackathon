import './css/Header.css';
import headLogo from '../assets/images/menu 1.png';

import {useRef} from "react";

function Header() {

    const filter = useRef();

    const showFilter = () => {
        filter.current.style.display = "flex";
        for(let i=0; i<=100; i++) {
            setTimeout(()=> {
                filter.current.style.width = `${i*0.4}%`;
            }, 5*i); //js의 비동기적 처리?
        }
        filter.current.style.height = "100%";
    }

    const closeFilter = () => {
        filter.current.style.display = "none";
        filter.current.style.width = "0%";
        filter.current.style.height = "0%";
    }

    return(
        <div className="header">
            <div className='header1'>
                <img src={headLogo} className="img1" alt="BigCo Inc. logo" onClick={showFilter}/>
                <h1>
                    <div class="small" ref={filter}>
                        <div className='closebtn' onClick={closeFilter}></div>
                        <div className='filter'>
                            <div>필터 설정</div>
                        </div>
                    </div>
                    오늘의 코디
                </h1>
            </div>
            
            <div className='header2'>
                <div className='list'>즐겨찾기</div>
                <div className='list'>트렌디</div>
                <div className='list'>로그인</div>
            </div>
        </div>
    );
}

export default Header;