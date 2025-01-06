import styles from './Favorite.module.css';

function Favorite({image, text, color, setIsFavorite, isFavorite}) {
    return (
        <div className={styles.favorite}>
            <img src={image} alt='Иконка избранное'/>
            <button onClick={() => setIsFavorite(!isFavorite)} style={{color:color}}>{text}</button>
        </div>
    );
}

export default Favorite;