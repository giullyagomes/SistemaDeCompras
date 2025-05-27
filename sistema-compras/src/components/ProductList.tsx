import type { Product } from '../App';
import type { ProductType } from '../services/api/types';

interface ProductListProps {
  products: ProductType[];
  addToCart: (product: ProductType) => void;
  setSelectedProduct: (product: ProductType) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, addToCart, setSelectedProduct }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product.objectId} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          <img src={product.photoUrl} alt={product.name} className="w-full h-40 object-cover rounded" />
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-600">R$ {product.price}</p>
          <div className="flex justify-between mt-2">
            <button
              className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              onClick={() => setSelectedProduct(product)}
            >
              Detalhes
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
              onClick={() => addToCart(product)}
            >
              Adicionar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;