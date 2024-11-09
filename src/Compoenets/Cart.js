import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getCarts } from "../rtk/slice/cart-slice";
import { Container, Row, Button, Image } from "react-bootstrap";
// import CardComponet from "./CardComponent";
import Table from "react-bootstrap/Table";
import { removeCart } from "../rtk/slice/cart-slice";
function Cart() {
  const carts = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  const totalPrice = carts.reduce((acc, cart) => {
    acc += cart.price * cart.quantity;
    return acc;
  }, 0);
  // const totalQuantity = carts.reduce((acc, cart) => {
  //   acc += cart.quantity;
  //   return acc;
  // }, 0);
  // useEffect(() => {
  //   dispatch(getCarts());
  // }, []);
  return (
    <>
      <Container className="py-5">
        <Row className="py-3">
          <h1>
            Carts{" "}
            {carts.length !== 0 ? (
              <Button
                variant="primary"
                onClick={() => {
                  dispatch({
                    type: "cart/restCarts",
                  });
                }}
              >
                Reset Carts
              </Button>
            ) : null}
          </h1>
        </Row>
        <Row>
          <p className="text-left">Total Price is: {totalPrice} $</p>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Img</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((cart) => (
                <tr key={cart.id}>
                  <td>{cart.id}</td>
                  <td>{cart.title}</td>
                  <td>
                    <Image
                      src={cart.image}
                      alt={cart.title}
                      style={{ width: "100px", height: "100px" }}
                    />
                  </td>
                  <td>{cart.price}</td>
                  <td>{cart.quantity}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => {
                        dispatch(removeCart(cart));
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
              {/* <tr>
                <td>#</td>
                <td>Total Price</td>
                <td>-</td>
                <td>{totalPrice}</td>
                <td>{totalQuantity}</td>
                <td>
                  <Button
                    variant="sucess"
                    onClick={() => {
                      //
                    }}
                  >
                    Buy
                  </Button>
                </td>
              </tr> */}
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
}

export default Cart;
