import Card from '../Card/Card';
import  styles from'./CardList.module.css'

function CardList({ data }) {
    return (
        <div className={styles.cardList}>
            {
                data.map(card => (
                    <Card key={card.id}
                        name = {card.name}
                        rating={card.rating}
                        image={card.image}
                    />
                ))
            }
        </div>
    );
}

export default CardList;