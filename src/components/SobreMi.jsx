
import chefImage from '/images/christian-chef.jpg';

export default function SobreMi() {
  return (
    <section id="sobre-mi">
      <div className="sobre-mi-wrapper">
        <div className="sobre-mi-imagen">
          <img src={chefImage} alt="Christian cocinando" />
        </div>
        <div className="sobre-mi-texto">
          <h2>Sobre mí</h2>
          <p>Soy Christian, un apasionado de la cocina que cree que cada plato es una historia esperando ser contada.</p>
          <p>Cada receta que desarrollo tiene un propósito. Algunas enseñan sobre nutrición, otras celebran tradiciones familiares, y muchas invitan a reflexionar sobre lo que comemos y por qué.</p>
          <h3>Habilidades:</h3>
          <ul className="habilidades-lista">
            <li><i className="fas fa-utensils"></i> Diseño de recetas</li>
            <li><i className="fas fa-palette"></i> Presentación estética de platos</li>
            <li><i className="fas fa-leaf"></i> Ingredientes saludables y locales</li>
            <li><i className="fas fa-globe"></i> Adaptación cultural de platos</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
