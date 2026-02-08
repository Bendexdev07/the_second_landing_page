import "./brandMessage.css";

export default function BrandMessage() {
  return (
    <div className="brandMessageContainer">
      <div className="message">
        <p>
          We are passionate about creating visually stunning and functional
          solutions that communicate effectively. I have a keen eye for detail
          and a deep understanding of design principles, which I use to deliver
          projects that exceed my clients' expectations.
        </p>
      </div>
      <div className="logos">
        <img src="/src/assets/logos-section/Altal.png" alt="Altal" />
        <img src="/src/assets/logos-section/kalologo.png" alt="Kalologo" />
        <img src="/src/assets/logos-section/kinua.png" alt="Kinua" />
        <img src="/src/assets/logos-section/kratelogo.png" alt="Krate" />
        <img src="/src/assets/logos-section/massuilogo.png" alt="Massuilog" />
        <img src="/src/assets/logos-section/tanologo.png" alt="Tanologo" />
      </div>
    </div>
  );
}
