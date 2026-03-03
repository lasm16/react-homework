export default function SuccessCard({ facts }) {
  return (
    <div style={{
      backgroundColor: "#d4edda",
      padding: "15px",
      borderRadius: "8px",
      marginTop: "15px"
    }}>
      <h3>Факты о котах:</h3>
      <ul>
        {facts.map((item) => (
          <li key={item.fact}>{item.fact}</li>
        ))}
      </ul>
    </div>
  );
}