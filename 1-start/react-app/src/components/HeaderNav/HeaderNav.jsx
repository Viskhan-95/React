import styles from './HeaderNav.module.css';

function HeaderNav({state, dispatch}) {
    const exit = () => {
        dispatch({type: 'LOGOUT'})
    }
    return (
        <nav className={styles.nav}>
            <ul className={styles.navItem}>
                <li><a href='#search'>Поиск фильмов</a></li>
                <li><a href='#my-movies'>Мои фильмы</a></li>
            {
                state?.isLogined
                    ? <>
                        {state?.user.name}
                        <img src='./userIcon.svg' alt='Иконка пользователя' />
                        <button onClick={exit} className={styles.buttonEnter}>
                        Выйти
                        </button>
                    </>
                    : <button className={styles.buttonEnter}>
                    Войти
                    <img src='./enter.svg' alt='Иконка входа'/>
                    </button>
                    
            }
            </ul>
        </nav>
    );
}

export default HeaderNav;