import { useState } from "react";

const Contador = () => {
  const [numero, setNumero] = useState(10);
  //let numero = 10;

  return (
    <article className="text-center">
      <h2 className="text-primary">Contador</h2>
      <h3>{numero}</h3>
      <button
        className="btn btn-outline-primary"
        onClick={() => setNumero(numero + 1)}>
        +1
      </button>
    </article>
  );
};

export default Contador;
