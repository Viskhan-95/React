import './Card.css'

function Card({name, rating, image}) {
    return (
        <div className='card'>
            <div className='card__body'>
                <div className='card__rating'>
                    <img src='./rating.svg' alt='Иконка рейтинга' />
                    <h4 className='card__rating_text'>{rating}</h4>
                </div>
                <img src= {`./images/${image}`} alt="Фото фильма" />
            </div>
            <div className='card__footer'>
                <h3 className='card__title'>{name}</h3>
                <button className='card__button_favorite'>
                    <img src="favorite.svg" alt="Иконка класс" />
                    В избранное
                </button>
            </div>
            
        </div>
    );
}

export default Card;