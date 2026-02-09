import React from "react";
import styles from "../Cards/Card";

const Card = ({title, description}) => {

  return (
    <div className={styles.card}>
      <div className={styles.icons}>icon</div>
      <h4>{title}</h4>
      <p>{description}</p>
      <span>Read More</span>
    </div>
  );
};

export default Card;
