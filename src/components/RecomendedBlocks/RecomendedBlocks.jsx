import styles from "./styles.module.css";
import Card from "../Card/Card";

export default function RecomendedBlocks({ cards }) {
  return (
    <>
      <div className={styles.resultsBlocks}>
        <div className={styles.gridResults}>
          {cards.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              body={card.body}
              localization={card.localization}
            />
          ))}
        </div>
      </div>
    </>
  );
}
