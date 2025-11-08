export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Christian Ariel Alfaro Rivera</h1>
          <h2>Futuro Chef profesional</h2>
          <p>Creando una nueva historia en cada plato…</p>

          {/* 📄 Espacio para tu archivo de CV */}
          <a 
            href="public\Christian Ariel Alfaro rivera.pdf"  // ← coloca aquí la ruta correcta de tu archivo
            className="btn" 
            download
          >
            Descargar CV
          </a>

          {/* 🔗 Espacios para tus redes sociales */}
          <div className="social-icons">
            <a 
              href="https://www.instagram.com/christian_rivera530/" // ← reemplaza con tu Instagram real
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a 
              href="https://linkedin.com/in/tu_usuario" // ← reemplaza con tu LinkedIn real
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a 
              href="https://github.com/tu_usuario" // ← reemplaza con tu GitHub real
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
