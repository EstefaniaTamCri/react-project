import classes from "./CafeAmenities.module.css";
import icon from "../../db/icons.json";

const Card = ({ img, title, lorem }) => {
  return (
    <div className={classes.card}>
        <img src={img} alt="Imagen" />
      
      <div className={classes.cardDetails}>
        <h6 className={classes.title}>{title}</h6>
        <p className={classes.lorem}>{lorem}</p>
      </div>
    </div>
  );
};

const CafeAmenities = () => {
  return (
    <section>
      <div>
        <h3>AMAZING SERVICES</h3>
        <h2>CAFE AMENITIES</h2>
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
