import "./ourTeam.css";
import Card from "./card.jsx";
import { teamMembersrow1, teamMembersrow2 } from "./team.js";

export default function OurTeam() {
  return (
    <div className="team-container">
      <div className="title">
        <img src="src/assets/Icon.png" alt="icon" />
        <h2>Our Team</h2>
      </div>

      <div className="row-1">
        <p className="paragraph">
          We are passionate about creating visually stunning and functional
          solutions that communicate effectively.
        </p>
        {teamMembersrow1.map((member, index) => (
          <Card
            key={`r1-${index}`}
            name={member.name}
            role={member.role}
            imgSrc={member.imgSrc}
          />
        ))}
      </div>

      <div className="row-2">
        {teamMembersrow2.map((member, index) => (
          <Card
            key={`r2-${index}`}
            name={member.name}
            role={member.role}
            imgSrc={member.imgSrc}
          />
        ))}
      </div>
    </div>
  );
}