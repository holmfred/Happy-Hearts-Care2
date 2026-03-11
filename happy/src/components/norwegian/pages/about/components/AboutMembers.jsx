import Heading from "../../../../common/heading/Heading";
import Heidi from "../../../../../images/heidi.avif";
import Henning from "../../../../../images/henning.avif";
import Elisabet from "../../../../../images/elisabet.avif";
import Tanei from "../../../../../images/tanei.avif";


function AboutMembers() {
  return (
    <div className="about-members">
      <Heading size="3" content="Medlemmer" />
      <div className="about-members-container">
        <div className="about-members-item">
          <img src={Heidi} alt="Heidi Fjellaker Steiner" />
          <div>
            <h4>Heidi Fjellaker Steiner</h4>
            <p>Sektetær</p>
          </div>
        </div>
        <div className="about-members-item">
          <img src={Henning} alt="Henning Fladberg" />
          <div>
            <h4>Henning Fladberg</h4>
            <p>Styremedlem</p>
          </div>
        </div>
        <div className="about-members-item">
          <img src={Elisabet} alt="Elisabet Saksgård Fladberg" />
          <div>
            <h4>Elisabet Saksgård Fladberg</h4>
            <p>Styremedlem</p>
          </div>
        </div>
        <div className="about-members-item">
          <img src={Tanei} alt="Tanei Kaiye" />
          <div>
            <h4>Tanei Kaiye</h4>
            <p>Styremedlem</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMembers;