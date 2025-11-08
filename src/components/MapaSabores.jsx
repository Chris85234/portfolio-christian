import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import platillos from '../assets/data/platillos';
import PlatilloPopup from './PlatilloPopup';
import 'leaflet/dist/leaflet.css';

export default function MapaSabores() {
  return (
    <section id="platillos" className="overlay">
      <h2>Mapa de sabores</h2>
      <p className="subtitulo-mapa">
        Cada bandera representa un platillo que he cocinado en esa región. Al hacer clic, descubrirás una historia, una técnica o una emoción detrás de cada receta.
      </p>

      <div className="mapa-wrapper">
        <MapContainer
          center={[15, -90]}
          zoom={4}
          minZoom={3}
          maxBounds={[[-90, -180], [90, 180]]}
          worldCopyJump={false}
          style={{
            height: "500px",
            width: "100%",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0,0,0,0.4)"
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
          />

          {platillos.map((p, index) => {
            const icon = L.icon({
              iconUrl: p.bandera,
              iconSize: [32, 20],
              iconAnchor: [16, 10]
            });

            return (
              <Marker key={index} position={p.coords} icon={icon}>
                <Popup>
                  <PlatilloPopup platillo={p} />
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </section>
  );
}
