import "bootstrap/dist/css/bootstrap.min.css";
import TituloSecundario from "./components/TituloSecundario";

function App() {
  //aquí agregamos toda la lógica que necesite el componente

  return (
    //aquí puedo agregar un poquito mas de lógica si necesito, después iría un <></> fragment
    <>
      {/* aqui empiezo a maquetar comentario de html */}
      <section className="container my-4">
        <h1 className="display-3 text-center text-danger">Contador con React</h1>
        <TituloSecundario/>
      </section>
    </>
  );
}

export default App;
