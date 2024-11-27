import './HeaderNav.css';

function HeaderNav() {
    return (
        <nav className='nav'>
            <ul className='navItem'>
                <li><a href='#search'>Поиск фильмов</a></li>
                <li><a href='#my-movies'>Мои фильмы</a></li>
            </ul>
            <button className='button-enter'>
                Войти
                <img src='./enter.svg' alt='Иконка входа'/>
            </button>
        </nav>
    );
}

export default HeaderNav;