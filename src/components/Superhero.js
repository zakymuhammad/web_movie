import { Card, Col, Container, Row, Image } from "react-bootstrap";
import Image1 from "../assets/Imagesuperhero/img1.jpg";
import Image2 from "../assets/Imagesuperhero/img2.jpg";
import Image3 from "../assets/Imagesuperhero/img3.png";
import Image4 from "../assets/Imagesuperhero/img4.jpg";
import Image5 from "../assets/Imagesuperhero/img5.jpg";
import Image6 from "../assets/Imagesuperhero/img6.jpg";

const Trending = () => {
  return (
    <div className=" py-4">
      <Container>
        <h1 className="text-white text-center mb-4">Superhero Movie</h1>
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className=" bg-opacity-75 bg-dark movieImage">
              <Image src={Image1} alt="Card image" className="trendingImage" />
              <div className="p-2 m-1 text-white ">
                <Card.Title className="text-center">interstellar</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" bg-opacity-75 bg-dark movieImage">
              <Image src={Image2} alt="Card image" className="trendingImage" />
              <div className="p-2 m-2 text-white ">
                <Card.Title className="text-center">interstellar</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" bg-opacity-75 bg-dark movieImage">
              <Image src={Image3} alt="Card image" className="trendingImage" />
              <div className="p-2 m-2 text-white ">
                <Card.Title className="text-center">interstellar</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" bg-opacity-75 bg-dark movieImage">
              <Image src={Image4} alt="Card image" className="trendingImage" />
              <div className="p-2 m-2 text-white ">
                <Card.Title className="text-center">interstellar</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" bg-opacity-75 bg-dark movieImage">
              <Image src={Image5} alt="Card image" className="trendingImage" />
              <div className="p-2 m-2 text-white ">
                <Card.Title className="text-center">interstellar</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" bg-opacity-75 bg-dark movieImage">
              <Image src={Image6} alt="Card image" className="trendingImage" />
              <div className="p-2 m-2 text-white ">
                <Card.Title className="text-center">interstellar</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
