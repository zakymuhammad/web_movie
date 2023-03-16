import { Card, Col, Container, Row, Image } from "react-bootstrap";
import interstellarImage from "../assets/Imagetranding/img1.png";
import Image2 from "../assets/Imagetranding/img2.jpg";
import Image3 from "../assets/Imagetranding/img3.png";
import Image4 from "../assets/Imagetranding/img4.jpg";
import Image5 from "../assets/Imagetranding/img5.jpg";
import Image6 from "../assets/Imagetranding/img6.jpg";

const Trending = () => {
  return (
    <div className=" py-4">
      <Container>
        <h1 className="text-white text-center mb-4">Trending Movie</h1>
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className=" bg-opacity-75 bg-dark movieImage">
              <Image
                src={interstellarImage}
                alt="Card image"
                className="trendingImage"
              />
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
