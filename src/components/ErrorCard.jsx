export default function ErrorCard({ message }) {
  return (
    <div style={{
      backgroundColor: "#f8d7da",
      padding: "15px",
      borderRadius: "8px",
      marginTop: "15px",
      color: "#721c24"
    }}>
      <h3>Ошибка</h3>
      <p>{message}</p>
    </div>
  );
}