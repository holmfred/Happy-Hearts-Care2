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
                <Card.Title>Utdanning</Card.Title>
                <Card.Text>
                    Utdanning er den sikreste veien ut av fattigdom.
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Nutrition} />
                <Card.Body>
                <Card.Title>Ernæring</Card.Title>
                <Card.Text>
                  Vi deler ut mat ved behov og spesielle anledninger.
                </Card.Text>
                </Card.Body>  
            </Card>
        </div>
        
      </div>
    </div>
  );
}

export default HomeProject;