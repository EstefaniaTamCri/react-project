import card3 from "../../db/card3.json";
import classes from "./CardsInfo.module.css";

const Card3 = ({ img, subTitle, title, title2, button }) => {
  return (
    <div className={classes.card3}>
      <div className={classes.cardDetails}>
        <h6 className={classes.subTitle3}>{subTitle}</h6>
        <h3 className={classes.title3}>{title}</h3>
        <h3 className={classes.titleSecond}>{title2}</h3>

        <button className={classes.button}>{button}</button>
      </div>
      <div className={classes.divImage3}>
        <img className={classes.image3} src={img} alt="Imagen" />
      </div>{" "}
    </div>
  );
};
export default Card3;
