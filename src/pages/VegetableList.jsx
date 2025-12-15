import { Link } from "react-router-dom";
import { vegetables } from "../data";

function VegetableList() {
  return (
    <div className="container">
      {vegetables.map(v => (
        <div className="card" key={v.id}>
          <div>
            <h3>{v.name}</h3>
            <p>Цена: {v.price} сом</p>
            <p style={{ fontSize: "14px", color: "#555" }}>{v.short}</p>
          </div>
          <Link to={`/vegetable/${v.id}`}>Подробнее</Link>
        </div>
      ))}
    </div>
  );
}

export default VegetableList;
