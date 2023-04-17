import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div className="App">
        <h2>Popular Titles</h2>
        <div><Link to="/pelis">Peliculas</Link></div>
        <div><Link to="/series">Series</Link></div>
    </div>
  );
}

export default Inicio;