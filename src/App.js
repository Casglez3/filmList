import { Buscador } from "./components/Buscador";
import { Listado } from "./components/Listado";
import { Crear } from "./components/Crear";
import { useState } from "react";


function App() {

  const [listadoState, setListadoState] = useState([]);

  return (
    <div className="layaout">

      {/*Cabecera*/}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>MisPelis</h1>
      </header>

      {/*Barra de navegación*/}
      <nav className="nav">
        <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Películas</a></li>
          <li><a href="/#">Blog</a></li>
          <li><a href="/#">Contacto</a></li>
        </ul>
      </nav>

      {/*Contenido principal*/}

      <section id="content" className="content">
        {/*Aquí va el listado de películas */}
        <Listado listadoState={listadoState} setListadoState={setListadoState}/>

      </section>

      {/*Barra lateral*/}
      <aside className="lateral">
        <Buscador listadoState={listadoState} setListadoState={setListadoState} />
        <Crear setListadoState={setListadoState}/>

      </aside>

      {/*Pie de página*/}
      <footer className="footer">
        &copy; Máster en React -
        <a href=""> Gloria Castillo</a>
      </footer>

    </div>
  );
}

export default App;
