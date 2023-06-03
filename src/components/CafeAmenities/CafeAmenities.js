import classes from "./CafeAmenities.module.css";
import icon from "../../db/icons.json";

const Card = ({ img, title, lorem }) => {
  return (
    <div className={classes.card}>
        <img className={classes.image} src={img} alt="Imagen" />
      
      <div className={classes.cardDetails}>
        <h6 className={classes.title}>{title}</h6>
        <p className={classes.lorem}>{lorem}</p>
      </div>
    </div>
  );
};

const CafeAmenities = () => {
  return (
    <section className={classes.main}>
      <div>
        <h3 className={classes.services}>AMAZING SERVICES</h3>
        <h2 className={classes.amenities}>CAFE AMENITIES</h2>
      </div>
      <div className={classes.cardContainer}>
        {icon.map((item, index) => (
          <Card
            key={index}
            img={item.img}
            title={item.title}
            lorem={item.lorem}
          />
        ))}
      </div>
    </section>
  );
};

export default CafeAmenities;
