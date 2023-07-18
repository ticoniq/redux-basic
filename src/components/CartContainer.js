import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const {cartItems, total, amount} = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your bag</h2>
          <h4 className="empty-cart">Is currently empty</h4>
        </header>
      </section>
    )
  }
  
  return (
    <section className="cart">
      <header>
        <h2>YOur bag</h2>
        <div>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />
          })}
        </div>
      </header>
      <footer>
        <div className="cart-total">
          <hr />
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button 
          className="btn clear-btn" 
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer