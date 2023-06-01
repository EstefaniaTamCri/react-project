import classes from "./Welcome.module.css";
import mainImg from "../../assets/images/main1.webp";

const Welcome = () => {
  return (
    <>
      <section>
        <div className={classes.divImg}>
          <img className={classes.img} src={mainImg} alt="" />
        </div>
        <div className={classes.welcome}>
          <h2 className={classes.headline}>
            {" "}
            WELCOME TO LITHO <strong>CAFE & RESTAURANT</strong>
          </h2>

          <p className={classes.firstParagraph}>
            One should not attend even the end of the world without a good
            breakfast
          </p>
          <p className={classes.secondParagraph}>
            Lorem ipsum is simply dummy text printing and typesetting industry.
            Lorem ipsum been industry standard dummy text ever since
            printer.
          </p>
          <button className={classes.button}>EXPLORE MORE</button>
        </div>
      </section>
    </>
  );
};

export default Welcome;
