export default function PlatilloPopup({ platillo }) {
  return (
    <div style={{ width: "220px" }}>
      <img src={platillo.imagen} alt={platillo.nombre} style={{ width: "100%", borderRadius: "8px" }} />
      <h3 style={{ margin: "8px 0", color: "#D4B483" }}>{platillo.nombre}</h3>
      <p style={{ fontSize: "14px", lineHeight: "1.4" }}>{platillo.reflexion}</p>
    </div>
  );
}
