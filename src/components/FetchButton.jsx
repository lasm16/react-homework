import { useState } from "react";
import SuccessCard from "./SuccessCard";
import ErrorCard from "./ErrorCard";

export default function FetchButton() {
  const [facts, setFacts] = useState(null);
  const [error, setError] = useState(null);

  const fetchFacts = async () => {
    setError(null);
    setFacts(null);

    try {
      const response = await fetch("https://catfact.ninja/facts");

      if (!response.ok) {
        throw new Error(`Ошибка сервера: ${response.status}`);
      }

      const data = await response.json();
      setFacts(data.data.slice(0, 5)); // покажем 5 фактов

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <button onClick={fetchFacts}>
        Получить факты о котах
      </button>

      {facts && <SuccessCard facts={facts} />}
      {error && <ErrorCard message={error} />}
    </div>
  );
}