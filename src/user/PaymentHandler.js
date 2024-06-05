import axios from 'axios';

const PaymentHandler = (Id, price) => async (event) => {
  event.preventDefault(); // Ensure default behavior is prevented at the start of the handler

  console.log(price);
  const amount = price * 100; // Can be dynamically adjusted
  const currency = 'INR';
  const receiptId = '1234567890'; // Can be dynamically adjusted
  const token = localStorage.getItem('token'); // Replace with your actual token
  
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/order`, {
      amount,
      currency,
      receipt: receiptId,
      CourseId: Id // Add CourseId in the request body
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    
    const order = response.data;
    console.log('order', order);
    console.log(import.meta.env.VITE_RAZORPAY_KEY);

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY, // Add your Razorpay key here
      amount,
      currency,
      name: "EDU THE COURSEVERSE", // Name of your organization
      description: "Course Transaction", // Reason for the payment
      image: "../src/assets/logo.png", // Ensure this path is correct
      order_id: order.id,
      handler: async function (response) {
        const body = { ...response, CourseId: Id }; 

        try {
          const validateResponse = await axios.post(`${import.meta.env.VITE_API_URL}/users/validate`, body, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          });

          const jsonResponse = validateResponse.data;
          console.log('jsonResponse', jsonResponse);
        } catch (error) {
          console.error('Error during validation:', error);
        }
      },
      prefill: {
        name: "Ritik Raj Pandey",
        email: "ritikphenomenon@gmail.com",
        contact: "8092849968",
      }, // Change with customer prefill data
      notes: {
        address: "Razorpay Corporate Office", // Any address
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    rzp1.open();
  } catch (error) {
    console.error('Error creating order:', error);
  }
}

export default PaymentHandler;
