import Heading from "../../../../common/heading/Heading";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import School from "../../../../../images/school.jpg"
import Nutrition from "../../../../../images/food.jpg"

function HomeNews() {
  return (
    <div className="home-news">
      <Heading size="2" content="Nyheter" />
      <div className="home-news-container"> 
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={School} />
                <Card.Body>
                <Card.Title>14. August 2020</Card.Title>
                <Card.Text>
                     I helgen er det tid for ny matutdeling til alle familiene våre. Vanligvis går Elisabeth på internatskole, men bor nå hos en onkel. Dette fordi alle skolene i Kenya er stengt på grunn av Covid19. Så de får også maten de trenger. I løpet av de neste par ukene skal teamet vårt i Kenya besøke alle familiene i hjemmene deres....
                </Card.Text>
                <Button variant="primary">Les Mer</Button>
                </Card.Body>
            </Card>
        </div>
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Nutrition} />
                <Card.Body>
                <Card.Title>6. Januar 2020</Card.Title>
                <Card.Text>
                    1. september 2018 så var HCC på besøk hos en familie og hjalp de i gang med deres income generating program. De fikk 20 kyllinger fra HHC, som de skulle ta godt vare på og selge egg ifra. Etter vært blir det fler kyllinger som de også kan selge videre. For at alle familiene skal kunne komme i gang med sitt program, trenger vi hjelp fra deg....
                </Card.Text>
                <Button variant="primary">Les Mer</Button>
                </Card.Body>
            </Card>
        </div>
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Nutrition} />
                <Card.Body>
                <Card.Title>16. Oktober 2019</Card.Title>
                <Card.Text>
                    En ny familie har blitt en del av HHC. Fantastisk at vi stadig kan ta inn nye familier, det gjør oss så glad. Tusen takk til vår nye sponsor fra Norge/Tyskland. De har fem barn, 1 av barna går på skolen mens de andre barna er hjemme. Far heter Nkapapa, han er døv og de har ikke penger til å få noe hjelp rettet mot hans handicap....
                </Card.Text>
                <Button variant="primary">Les Mer</Button>
                </Card.Body>
            </Card>
        </div>
        
      </div>
    </div>
  );
}

export default HomeNews;