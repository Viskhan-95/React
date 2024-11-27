import styles from './Card.module.css'

function Card({name, rating, image}) {
    return (
        <div className={styles.card}>
            <div className={styles.card__body}>
                <div className={styles.card__rating}>
                    <img src='./rating.svg' alt='Иконка рейтинга' />
                    <h4 className={styles.card__rating_text}>{rating}</h4>
                </div>
                <img src= {`./images/${image}`} alt="Фото фильма" />
            </div>
            <div className={styles.card__footer}>
                <h3 className={styles.card__title}>{name}</h3>
                <button className={styles.card__button_favorite}>
                    <img src="favorite.svg" alt="Иконка класс" />
                    В избранное
                </button>
            </div>
            
        </div>
    );
}

export default Card;