import Card from '../Card/Card';
import './CardList.css'

function CardList({ data }) {
    return (
        <div className='card-list'>
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