import StripePayment from "./components/stripePayment/index";
import PaypalPayment from "./components/paypaylPayment";
// stripe imports
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// stripe promise
const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

function App() {
  // console.log(".env", process.env.REACT_APP_PUBLISHABLE_KEY);
  return (
    <div style={{ textAlign: "center", paddingTop: "2rem" }}>
      <Elements stripe={stripePromise}>
        <StripePayment />
      </Elements>

      <div>
        <PaypalPayment />
      </div>
    </div>
  );
}

export default App;
