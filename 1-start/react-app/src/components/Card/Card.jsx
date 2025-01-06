import { useState } from 'react';
import Rating from '../Rating/Rating';
import Text from '../Text/Text';
import styles from './Card.module.css'
import Favorite from '../Favorite/Favorite';

function Card({name, rating, image}) {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className={styles.card}>
            <Rating rating={rating}/>
            <img src= {`./images/${image}`} alt="Фото фильма" />
            <div className={styles.card__footer}>
                <Text title={name} titleSize='16px'/>
                {isFavorite ? 
                    <Favorite image={'./delFavorite.svg'} text='В избранном' color={'#37D8A7'} setIsFavorite={setIsFavorite} isFavorite={isFavorite}/> :
                    <Favorite image={'./addFavorite.svg'} text='В избранное' color={'#7B6EF6'}setIsFavorite={setIsFavorite} isFavorite={isFavorite} />
                    
                }
            </div>
            
        </div>
    );
}

export default Card;