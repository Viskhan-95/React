import HeaderNav from '../HeaderNav/HeaderNav';
import Logo from '../Logo/Logo';
import './Header.css';

function Header() {
    return (
        <div className='header'>
            <Logo image={'./logo.svg'}/>
            <HeaderNav />
        </div>
    );
}

export default Header;