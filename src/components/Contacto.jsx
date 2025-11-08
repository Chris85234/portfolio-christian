export default function Contacto() {
  return (
    <section id="contacto" className="seccion-contacto">
      <h2>Contáctame</h2>
      <p className="contacto-subtitulo">
        ¿Quieres colaborar, aprender juntos o compartir una historia culinaria?
      </p>

      <form className="formulario-contacto">
        <div className="campos-superiores">
          <input type="text" placeholder="Nombre" name="nombre" required />
          <input type="email" placeholder="Correo electrónico" name="email" required />
        </div>
        <textarea placeholder="Mensaje" name="mensaje" rows="5" required></textarea>
        <button type="submit">Enviar </button>
      </form>
    </section>
  );
}
