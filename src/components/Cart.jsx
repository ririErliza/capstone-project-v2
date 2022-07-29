import React from "react";
import { Button } from "react-bootstrap";
import { useCart } from "react-use-cart";
import PayButton from "./PayButton";
import { MdDeleteForever } from "react-icons/md";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();

  if (isEmpty) return <h1 className="text-center">Cart is Empty</h1>;
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        {/* {console.warn(items)} */}
        <div className="col-12">
          <h5>
            Cart ({totalUniqueItems}) total Items: ({totalItems})
          </h5>
          <br />
          <table className="table table-light table-hover m-0">
            <tbody>
              <tr>
                <td style={{ padding: "0px 100px 0px 10px" }}>
                  <b>Product</b>
                </td>
                <td style={{ padding: "0px 100px 0px 10px" }}>
                  <b>Name</b>
                </td>
                <td style={{ padding: "0px 50px 0px 0px" }}>
                  <b>Price($)</b>
                </td>
                <td style={{ padding: "0px 50px 0px 0px" }}>
                  <b>Quantity</b>
                </td>
              </tr>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={item.img} style={{ height: "6rem" }} alt="" />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>
                      <button
                        style={{ border: "2px solid #f8f9fa" }}
                        className="btn btn-light btn-sm mr-1"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        –
                      </button>
                      <button className="btn btn-light btn-sm" style={{ }}>
                      {item.quantity}
                      </button> 
                      
                      <button
                        style={{ border: "2px solid #fcba03" }}
                        className="btn btn-light btn-sm ml-1"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </td>
                    <td>
                      
                      
                      <Button
                        className="btn btn-light btn-sm"
                        onClick={() => removeItem(item.id)}
                      >
                        <MdDeleteForever style={{ fontSize:"1.5em",color: "red" }}/>
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <hr />
        <br />
        {/* <div> */}
        <div id="cart-footer">
        <div className="col-auto ms-auto">
          <h3>Total Price: $ {cartTotal}</h3>
        </div>
        <div className="col-auto ms-auto">
          <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
            Clear Cart
          </button>
          <PayButton cartItems={items}/>
        </div>
        </div>
        
        {/* </div> */}
      </div>
    </section>
  );
};

export default Cart;
