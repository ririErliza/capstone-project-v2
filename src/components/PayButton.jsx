import axios from "axios";
import { Button } from "react-bootstrap";

const PayButton = ({ cartItems }) => {
   const url= "http://localhost:5000"
  
    const handleCheckout = () => {

        console.log(cartItems)

        axios
        .post(`${url}/payment/create-checkout-session`, {
            cartItems,
        })
        .then((response) => {
            if (response.data.url) {
            window.location.href = response.data.url;
            }
        })
        .catch((err) => console.log(err.message));
     
    };
  
    return (
      <>
        <Button className="btn btn-success" onClick={() => handleCheckout()}>Check out</Button>
      </>
    );
  };
  
  export default PayButton;