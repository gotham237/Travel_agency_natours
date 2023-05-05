/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';
import Stripe from 'stripe';
const stripe = Stripe(
  'pk_test_51McDJrFOzzsafUgBuhpyfH0wm3aXTGvW0HblFhjCpBw4NrCZFbSjmZXbPfsSUQfxyMBLn3Wcag2MQSO1p4VhVnpx00ut1xAUvj'
);

export const bookTour = async tourId => {
  // 1) Get checkout session from API
  try {
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    // 2) Create checkout form + charge the credit card
    // await stripe.redirectToCheckout({
    //   sessionId: session.data.session.id
    // });
    //console.log(session.data.session.url);
    window.location.replace(session.data.session.url);
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
