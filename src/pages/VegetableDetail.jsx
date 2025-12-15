import { useParams, Link } from "react-router-dom";
import { vegetables } from "../data";

function VegetableDetail() {
  const { id } = useParams();
  const vegetable = vegetables.find(v => v.id === Number(id));

  if (!vegetable) {
    return <h2>Овощ не найден</h2>;
  }

  return (
    <div>
      <header>{vegetable.name}</header>

      <div className="container">
        <div className="card">
          <h3>{vegetable.name}</h3>
          <p>Цена: {vegetable.price} сом</p>
          <p>{vegetable.full}</p>
          <Link to="/">Назад</Link>
        </div>
      </div>
    </div>
  );
}

export default VegetableDetail;
