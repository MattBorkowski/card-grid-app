import axios from "axios";
import { useEffect, useState } from "react";
import {
  Button,
  CardContainer,
  CardDetail,
  DescriptionText,
  Grid,
  Image,
  Title,
} from "./styles/styles.components";

async function getCardData() {
  try {
    const result = await axios.get("http://localhost:4000/cards");
    return result.data;
  } catch (error) {
    return [];
  }
}

function Card(props) {
  return (
    <CardContainer id="card">
      <Image
        id="card-image"
        src={props.cardInfo.image.url}
        alt={props.cardInfo.image.alt}
      />
      <CardDetail id="card-detail">
        <Title id="card-title">{props.cardInfo.title}</Title>
        <DescriptionText id="card-description">
          {props.cardInfo.description}
        </DescriptionText>
        <Button id="card-button">BUY</Button>
      </CardDetail>
    </CardContainer>
  );
}

function Cards() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCardData().then((results) => {
      setCards(results);
      setLoading(false);
    });
  }, []);

  if (!loading) {
    return (
      <Grid id="card-grid">
        {cards.map((card) => (
          <Card key={card.id} cardInfo={card} />
        ))}
      </Grid>
    );
  } else {
    return <div>Loading...</div>;
  }
}

function App() {
  return <Cards />;
}

export default App;
