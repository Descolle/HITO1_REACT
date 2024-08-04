import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function CardPizza({ name, price, ingredients, picture }) {
  return (
    <div className="PizzaContainer">
      <div>
        <Card style={{ width: "18rem" }} className="pizza">
          <Card.Img variant="top" src={picture} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text className="items">
              Ingredientes: 🍕 {ingredients}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Valor:{price}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button variant="primary">Ver Más</Button>{" "}
            <Button variant="success">🛒Añadir al Carrito</Button>{" "}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default CardPizza;
