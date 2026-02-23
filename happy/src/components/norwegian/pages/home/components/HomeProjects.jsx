import Heading from "../../../../common/heading/Heading";
import Card from 'react-bootstrap/Card';
import School from "../../../../../images/school.jpg"
import Nutrition from "../../../../../images/food.jpg"

function HomeProject() {
  return (
    <div className="home-projects">
      <Heading size="2" content="Prosjekter" />
      <div className="home-projects-container"> 
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={School} />
                <Card.Body>
                <Card.Title>Skole</Card.Title>
                </Card.Body>
            </Card>
        </div>
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Nutrition} />
                <Card.Body>
                <Card.Title>Ernæring</Card.Title>
                </Card.Body>  
            </Card>
        </div>
        
      </div>
    </div>
  );
}

export default HomeProject;