import type { Product } from '../App';

interface ProductModalProps {
  product: Product;
  closeModal: () => void;
  addToCart: (product: Product) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, closeModal, addToCart }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold">{product.name}</h2>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mt-2" />
        <p className="mt-2">{product.description}</p>
        <p className="mt-2 font-semibold">R$ {product.price.toFixed(2)}</p>
        <div className="flex justify-between mt-4">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
            onClick={closeModal}
          >
            Fechar
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            onClick={() => {
              addToCart(product);
              closeModal();
            }}
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;