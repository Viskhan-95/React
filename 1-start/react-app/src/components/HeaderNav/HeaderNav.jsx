import styles from './HeaderNav.module.css';

function HeaderNav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navItem}>
                <li><a href='#search'>Поиск фильмов</a></li>
                <li><a href='#my-movies'>Мои фильмы</a></li>
            </ul>
            <button className={styles.buttonEnter}>
                Войти
                <img src='./enter.svg' alt='Иконка входа'/>
            </button>
        </nav>
    );
}

export default HeaderNav;