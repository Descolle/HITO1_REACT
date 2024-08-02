import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import CardPizza from "./components/CardPizza";
import "./App.css";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <CardPizza
        name="Española"
        price={6950}
        ingredients={`mozzarella, gorgonzola, parmesano, provolone`}
        picture='https://img-global.cpcdn.com/recipes/c8a84ffca7fcb1ab/680x482cq70/pizza-espanola-foto-principal.jpg'
      ></CardPizza>
      <CardPizza
        name="Pepperoni"
        price={6950}
        ingredients={`mozzarella, pepperoni, orégano`}
        picture="https://tupizzaiolo.com/wp-content/uploads/2021/07/Diseno-sin-titulo-1-min.jpg"
      ></CardPizza>
      <CardPizza
        name="Napolitana"
        price={5950}
        ingredients={`mozzarella, tomates, jamón, orégano`}
        picture="https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"
      ></CardPizza>
    </>
  );
}

export default App;
