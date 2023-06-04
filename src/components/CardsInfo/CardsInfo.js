import classes from './CardsInfo.module.css';
import card1 from '../../db/card1.json';
import card2 from '../../db/card2.json';
import card3 from '../../db/card3.json';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';


const CardsInfo = () => {
    return (
        <section className={classes.main}>
        <div className={classes.cardContainer}>
            {card1.map((item, index) => (
            <Card1
                key={index}
                img={item.img}
                subTitle={item.subTitle}
                title={item.title}
                title2={item.title2}
                button={item.button}
            />
            ))}
        </div>
        <div className={classes.cardContainer}>
            {card2.map((item, index) => (
            <Card2
                key={index}
                img={item.img}
                title={item.title}
                title2={item.title2}
                title3={item.title3}
                button={item.button}
            />
            ))}
        </div>
        <div className={classes.cardContainer}>
            {card3.map((item, index) => (
            <Card3
                key={index}
                img={item.img}
                subTitle={item.subTitle}
                title={item.title}
                title2={item.title2}
                button={item.button}
            />
            ))}
        </div>
        </section>
    );
};

export default CardsInfo;