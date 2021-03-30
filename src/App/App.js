import React, { useEffect } from "react"
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "../Header/Header";
import Home from "../Home/Home";
import Checkout from "../Checkout/Checkout";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Payment from "../Payment/Payment";
import SecondPage from "../SecondPage/SecondPage";
import Orders from "../Orders/Orders";
import { useStateValue } from "../Reducer and State/StateProvider";
import { auth } from "../firebase/firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51IVvrmEOlirF5L40TuXssaHeFoutcGqNqEsarqPa6SilsbMJs8KR0AQUUN1nFbLJmHlFVewJzXFSSMdNb6Ae3EIz00YYAerqrx");


function App() {
  const [{ user }, dispatch] = useStateValue();

  // useEffect hook - class based components into functional components
  // code which runs based on a condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in

        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        // the user is logged out

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      // cleanup operations here

      unsubscribe();
    }

  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
            <Footer />
          </Route>
          <Route path="/second">
            <Header />
            <SecondPage />
            <Footer />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
