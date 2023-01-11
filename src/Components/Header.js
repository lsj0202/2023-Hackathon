import './css/Header.css';
import headLogo from '../assets/images/menu 1.png';

function Header() {
    return(
        <div className="header">
            <h1>
            <img src={headLogo} class="img1" alt="BigCo Inc. logo"/>
                오늘의 코디
            </h1>
            <ul className="list">
                <li>즐겨찾기</li>
                <li><span className="tre">트렌디</span></li>
                <li className="end">로그인</li>
            </ul>
        </div>
    );
}

export default Header;