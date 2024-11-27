import HeaderNav from '../HeaderNav/HeaderNav';
import Logo from '../Logo/Logo';
import styles from './Header.module.css';

function Header() {
    return (
        <div className={styles.header}>
            <Logo image={'./logo.svg'}/>
            <HeaderNav />
        </div>
    );
}

export default Header;