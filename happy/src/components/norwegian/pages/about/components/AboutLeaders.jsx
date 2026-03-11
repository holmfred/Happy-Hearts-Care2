import Heading from "../../../../common/heading/Heading";
import Lars from "../../../../../images/Lars.avif";
import Remi from "../../../../../images/Remi.avif";


function AboutLeaders() {
  return (
    <div className="about-container">
    <Heading size="1" content="Vi er Happy Hearts Care Norge" />
    <hr/>
    <div className="about-leader">
      <Heading size="3" content="Ledere" />
      <div className="about-leader-container">
        <div className="about-leader-item">
          <img src={Lars} alt="Lars Pettersen" />
          <div>
            <h4>Lars Pettersen</h4>
            <p>Daglig Leder</p>
          </div>
        </div>
        <div className="about-leader-item">
          <img src={Remi} alt="Remi Steiner" />
          <div>
            <h4>Remi Steiner</h4>
            <p>Styreleder</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default AboutLeaders;