import React from "react";
import { CardData } from "../../data/home";
import Card from "./Card";
import styles from "../Cards/CardSection.css";
const CardSection = () => {
  return (
    <section className={`${styles.Wrapper} container`}>
      {CardData.map((data, index)=> (
        <Card key={index} title= {data.title} description={data.description} />
      ))}
    </section>
  );
};

export default CardSection;
