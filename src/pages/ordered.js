import './ordered.css';
import { useLocation, useNavigate } from 'react-router-dom';

function OrderedPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const orderData = location.state.orderData || {};
  const handleDelivery = () => {
    navigate('/delivery', {
      state: { orderData },
    });
  };

  return (
    <div className="ordered-page">
      <h2>Your Order Summary</h2>
      <p>Meat: {orderData.meat || 0}</p>
      <p>Cheese: {orderData.cheese || 0}</p>
      <p>Salad: {orderData.salad || 0}</p>
      <p>Tomato: {orderData.tomato || 0}</p>
      <h3>Total Price: ${orderData.totalPrice || '0.00'}</h3>
      <button
        onClick={() => (window.location.href = '/')}
        className="back-button"
      >
        Back to Burger Builder
      </button>

      <button onClick={handleDelivery} className="delivery-button">
        Proceed to Delivery
      </button>
    </div>
  );
}

export default OrderedPage;
