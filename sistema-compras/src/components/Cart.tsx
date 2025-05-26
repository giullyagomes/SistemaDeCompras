import type { Product } from '../App';

interface CartProps {
  cart: Product[];
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

const Cart: React.FC<CartProps> = ({ cart, removeFromCart, clearCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="mt-8 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold">Carrinho de Compras</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Carrinho vazio</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {cart.map(item => (
              <li key={item.id} className="py-2 flex justify-between">
                <span>{item.name} - R$ {item.price.toFixed(2)}</span>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-semibold">Total: R$ {total.toFixed(2)}</p>
          <button
            className="mt-4 bg-green-400 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            onClick={clearCart}
          >
            Finalizar Compra
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;