import { Card, Button, Col, Row } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import DescriptionModal from "./DescriptionModal";
import SpecificationModal from "./SpecificationModal";
import DeliveryModal from "./DeliveryModal";

type ProductItemProps = {
  id: number;
  name: string;
  price: number;
  ref_no: number;
  details: string;
  description: string;
  specification: string;
  delivery: string;
  imgUrl: string;
};

export function ProductItem({
  id,
  name,
  price,
  ref_no,
  details,
  description,
  specification,
  delivery,
  imgUrl,
}: ProductItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card className="h-100">
      <Row>
        <Col>
          <Card.Img variant="" src={imgUrl} height="400px" width="10px" />
        </Col>
        <Col>
          <Card.Body className="d-flex flex-column">
            <Card.Title className="align-items-baseline md-4">
              <span className="fs-2 text-bold">{name}</span>
              <br />
              <br />
              <span className="text-muted">{ref_no}</span>
              <br />
              <br />
              <span className="text-muted">{details}</span>
              <br />
              <br />
              <span className="fs-2 d-flex align-items-center jutify-content-center">
                £{price}
              </span>
              <br />
              <br />
            </Card.Title>
            <div className="mt-auto">
              {quantity === 0 ? (
                <Button
                  className="w-100"
                  onClick={() => increaseCartQuantity(id)}
                >
                  Add To Basket
                </Button>
              ) : (
                <div
                  className="d-flex align-items-center flex-column"
                  style={{ gap: ".5rem" }}
                >
                  <div
                    className="d-felx align-items-center jutify-content-center"
                    style={{ gap: ".5rem" }}
                  >
                    <div>
                      <Button onClick={() => decreaseCartQuantity(id)}>
                        -
                      </Button>
                      <span className="fs-6">&nbsp;{quantity}</span> in basket
                      &nbsp;
                      <Button onClick={() => increaseCartQuantity(id)}>
                        +
                      </Button>
                    </div>
                  </div>
                  <Button
                    onClick={() => removeFromCart(id)}
                    variant="danger"
                    size="sm"
                  >
                    Remove
                  </Button>
                </div>
              )}
            </div>
          </Card.Body>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <div className="me-auto">
            <DescriptionModal description={{description}}></DescriptionModal>
          </div>
        </Col>
        <Col>
          <div className="me-auto">
          <SpecificationModal></SpecificationModal>
          </div>
        </Col>
        <Col>
          <div className="me-auto">
          <DeliveryModal></DeliveryModal>
          </div>
        </Col>
      </Row>
      <br />
    </Card>
  );
}
