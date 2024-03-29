import "bootstrap/dist/css/bootstrap.min.css";
import Contador from "./components/Contador";
import TituloSecundario from "./components/TituloSecundario";

function App() {
  //aquí agregamos toda la lógica que necesite el componente
const anioActual = 2024;
  return (
    //aquí puedo agregar un poquito mas de lógica si necesito, después iría un <></> fragment
    <>
      {/* aqui empiezo a maquetar comentario de html */}
      <section className="container my-4">
        <h1 className="display-3 text-center text-danger">Contador con React</h1>
        <TituloSecundario comision='c73i' anioActualProps={anioActual} />
        <Contador/>
      </section>
    </>
  );
}

export default App;
