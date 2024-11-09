import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../rtk/slice/cart-slice";
// import { getCarts } from "../rtk/slice/cart-slice";
function CardComponet(props) {
  const carts = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  const { product, page } = props;
  // useEffect(() => {
  //   dispatch(getCarts());
  // }, []);
  // console.log(carts.includes(product));
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          style={{ height: "300px" }}
          variant="top"
          src={product.image}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>{product.price}$</Card.Text>
          {page === "Product" ? (
            <Button
              variant="primary"
              onClick={() => {
                dispatch(addToCart(product));
              }}
            >
              Add to Cart
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => {
                dispatch({
                  type: "cart/removeCarts",
                  payload: carts.indexOf(product),
                });
              }}
            >
              remove From Carts
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CardComponet;
