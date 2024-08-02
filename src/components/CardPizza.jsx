import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function CardPizza({ name, price, ingredients, picture }) {
  return (
    <div className="CardPizza d-flex flex-row mb-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Ingredientes: {ingredients}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Valor:{price}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardPizza;
