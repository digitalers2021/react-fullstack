import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <h1>Ejemplo react fullstack</h1>
      <Lista></Lista>
    </div>
  );
}

function Lista() {
  const [busqueda, setBusqueda] = useState("");
  const [lista, setLista] = useState([]);

  useEffect(() => {
    // fetch("https://api.example.com/items")
    fetch(`http://127.0.0.1:5000/api?search=${busqueda}`)
    .then((res) => res.json())
    .then((result) => {
      console.log("Fetching data from http://127.0.0.1:5000/api (flask)")
      setLista(result);
      console.log(result)
    });
  }, [busqueda]);

  const handleChange = (e) => {
    setBusqueda(e.target.value)
  }

  return (
    <div>
      <label>Buscar</label>
      <input onChange={handleChange} value={busqueda}></input>
      {/*todos.map(function(todo) { return (<li key={todo}>{todo}</li>)} )*/}
      { lista.map(function(ele) { return (<li key={ele}>{ele}</li>)} )}
    </div>
  );
}

export default App;
