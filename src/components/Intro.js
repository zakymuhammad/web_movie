import { Col, Container, Row, Button, Nav } from "react-bootstrap";

const intro = () => {
  return (
    <div className="intro d-flex justify-content-end align-items-end">
      <Container className="d-flex text-center justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">Freanly</div>
            <div className="title">buat semua kalangan</div>
            <div className="introButton mt-4 text-center">
              <Button variant="dark">
                <Nav.Link href="#trending">nonton sekarang</Nav.Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default intro;
