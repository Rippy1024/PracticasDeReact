const TituloSecundario = (props) => {
    return (
        <article>
            <h2 className="text-primary">Practica con react {props.anioActualProps}</h2>
            <p>
                React es una biblioteca de JavaScript desarrollada por Facebook para construir interfaces de usuario interactivas y eficientes. Se basa en componentes reutilizables, utiliza un Virtual DOM para optimizar las actualizaciones, y su sintaxis incorpora JSX para la creación declarativa de interfaces. React simplifica el desarrollo de aplicaciones web al proporcionar una estructura modular y un flujo unidireccional de datos.
                <br/>
                Comision: {props.comision}
            </p>
            
        </article>
    );
};

export default TituloSecundario;