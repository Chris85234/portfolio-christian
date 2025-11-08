import './styles/global.css';
import './styles/sections.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'leaflet/dist/leaflet.css';

import Hero from './components/Hero';
import SobreMi from './components/SobreMi';
import Educacion from './components/Educacion';
import MapaSabores from './components/MapaSabores';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
// import Platillos from './components/Platillos'; ← Lo activaremos cuando elijas el estilo

function App() {
  return (
    <>
      <Hero />
      <SobreMi />
      <Educacion />
      <MapaSabores />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
