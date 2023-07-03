import { CartEmpty } from './components/CartEmpty';
import { CartList } from './components/CartList';
import { useCart } from '../../context';
import { useTitle } from '../../hooks/useTitle';

export const CartPage = () => {
  const { cartList } = useCart();

  // Set page title with the number of items in the cart
  useTitle(`Cart (${cartList.length})`);

  return (
    <main>
      {/* Conditional Rendering: Display CartList if cartList is not empty, otherwise display CartEmpty */}
      {cartList.length ? <CartList /> : <CartEmpty />}
    </main>
  );
};
