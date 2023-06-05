import card1 from "../../db/card1.json";

import classes from "./CardsInfo.module.css";
const Card1 = ({ img, subTitle, title, title2, button }) => {
  return (
    <div className={classes.card1}>
      <div className={classes.cardDetails}>
        <h6 className={classes.subTitle1}>{subTitle}</h6>
        <h3 className={classes.title1}>{title}</h3>
        <h3 className={classes.titleSecond}>{title2}</h3>
        <button className={classes.button}>{button}</button>
      </div>
      <div className={classes.divImage1}>
        <img className={classes.image1} src={img} alt="Imagen" />
      </div>{" "}
    </div>
  );
};
export default Card1;
