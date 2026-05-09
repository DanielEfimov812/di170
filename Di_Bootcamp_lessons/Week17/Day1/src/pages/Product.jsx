import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router";

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 5 * 1000);
  }, []);

  return (
    <div>
      <h2>Product #{id}</h2>
      <Link to='/shop'>Continue Shopping</Link>
      <button onClick={() => navigate('/')}>Go Back to Homepage</button>
    </div>
  );
}
