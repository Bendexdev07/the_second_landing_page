import "./card.css";

export default function Card({ name, role, imgSrc }) {
  return (
    <div className="card-container">
      <img src={imgSrc} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}