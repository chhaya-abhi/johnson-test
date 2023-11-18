import { Col, Row } from "react-bootstrap"; 
import { ProductItem } from "../components/ProductItem" 
import productItems from "../data/items.json";

export function Product() {
  return (
    <>
      <h1>Product</h1>
      <Row md={1} xs={1} lg={1} className="g-5">
        {productItems.map((item) => (
          <Col key={item.id}>
            <ProductItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
