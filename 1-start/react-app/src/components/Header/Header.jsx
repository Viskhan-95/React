import HeaderNav from '../HeaderNav/HeaderNav';
import Logo from '../Logo/Logo';
import styles from './Header.module.css';

function Header({state, dispatch}) {
    return (
        <header className={styles.header}>
            <Logo image={'./logo.svg'}/>
            <HeaderNav state={state} dispatch={dispatch}/>
        </header>
    );
}

export default Header;