import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slice/Products-slice";
import { Container, Row } from "react-bootstrap";
// import { getCarts } from "../rtk/slice/cart-slice";
import CardComponet from "./CardComponent";
function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  // console.log(products);
  return (
    <Container className="py-5">
      <Row className="py-5">
        {products.map((Product) => {
          return (
            <CardComponet key={Product.id} product={Product} page={"Product"} />
          );
        })}
      </Row>
    </Container>
  );
}

export default Products;
