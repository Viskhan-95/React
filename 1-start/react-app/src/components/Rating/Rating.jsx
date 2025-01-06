import styles from './Rating.module.css';

function Rating({rating}) {
    return (
        <div className={styles.rating}>
            <img src='./rating.svg' alt='Иконка рейтинга'/>
            <h4>{rating}</h4>
        </div>
    );
}

export default Rating;