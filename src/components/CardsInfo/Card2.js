import card2 from "../../db/card2.json";
import classes from "./CardsInfo.module.css";

const Card2 = ({ img, title, title2, title3, button }) => {
  return (
    <div className={classes.card2}>
      <div className={classes.cardDetails}>
        <h3 className={classes.title2}>{title}</h3>
        <h3 className={classes.title2Second}>{title2}</h3>
        <h3 className={classes.title3Second}>{title3}</h3>
        <button className={classes.button2}>{button}</button>
      </div>
      <div className={classes.divImage2}>
        <img className={classes.image2} src={img} alt="Imagen" />
      </div>
    </div>
  );
};
export default Card2;
