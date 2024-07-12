import axios from 'axios';

const PaymentHandler = (Id, price) => async (event) => {
  event.preventDefault();

  const amount = price * 100;
  const currency = 'INR';
  const receiptId = '1234567890';
  const token = localStorage.getItem('token');
  console.log(Id)


  if (!token) {
    console.error('No token found in localStorage');
    return;
  }

  console.log('VITE_API_URL:', import.meta.env.VITE_API_URL);
  console.log('VITE_RAZORPAY_KEY:', import.meta.env.VITE_RAZORPAY_KEY);

  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/order`, {
      amount,
      currency,
      receipt: receiptId,
      CourseId: Id
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    const order = response.data;
    console.log('Order:', order);

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY,
      amount,
      currency,
      name: "EDU THE COURSEVERSE",
      description: "Course Transaction",
      image: "/logo.png",
      order_id: order.id,
      handler: async function (response) {
        const body = { ...response, CourseId: Id };
        console.log(body)
       
        try {
          const validateResponse = await axios.post(`${import.meta.env.VITE_API_URL}/users/validate`, body, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          });

          const jsonResponse = validateResponse.data;
          console.log('Validation Response:', jsonResponse);
        } catch (error) {
          console.error('Error during validation:', error);
        }
      },
      prefill: {
        name: "Ritik Raj Pandey",
        email: "ritikphenomenon@gmail.com",
        contact: "8092849968",
      },
      notes: {
        address: "Razorpay Corporate Office",
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
