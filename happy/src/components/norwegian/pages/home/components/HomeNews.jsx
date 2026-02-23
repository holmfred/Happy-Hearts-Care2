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
                <Card.Title>Nyhet 1</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt amet nihil eius quisquam a, tenetur, ducimus velit delectus quas saepe eaque pariatur commodi ipsum nesciunt dolorem soluta recusandae accusamus mollitia?
                </Card.Text>
                <Button variant="primary">Les Mer</Button>
                </Card.Body>
            </Card>
        </div>
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Nutrition} />
                <Card.Body>
                <Card.Title>Nyhet 2</Card.Title>
                <Card.Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, reprehenderit repellat iure quisquam velit laboriosam consequatur porro suscipit optio aperiam incidunt delectus, explicabo quis illum aspernatur ea possimus adipisci facere.
                </Card.Text>
                <Button variant="primary">Les Mer</Button>
                </Card.Body>
            </Card>
        </div>
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Nutrition} />
                <Card.Body>
                <Card.Title>Nyhet 3</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos culpa deserunt nobis, animi molestias ad quisquam asperiores beatae voluptas? Laboriosam perferendis nobis, eveniet rerum quae repudiandae neque quis recusandae sequi!
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