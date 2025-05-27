import { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ProductModal from './components/ProductModal';
import { getAllProducts } from './services/api';
import type { ProductType } from './services/api/types';


export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const App: React.FC = () => {
  const [cart, setCart] = useState<ProductType[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  const [products, setProducts] = useState<ProductType[]>([]);

  const handleGetProducts = async () => {
    try {
      const result = await getAllProducts();

      if (result != undefined && result.data.results != undefined) {
        setProducts(result.data.results)
        console.log(result.data.results);

      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    handleGetProducts()
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: ProductType) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter(item => item.objectId !== productId));
  };

  const clearCart = () => {
    setCart([]);
    alert('Compra finalizada com sucesso!');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-purple-600 text-white p-4">
        <h1 className="text-2xl font-bold">Loja De Esportes</h1>
      </header>
      <main className="container mx-auto p-4">
        <ProductList products={products} addToCart={addToCart} setSelectedProduct={setSelectedProduct} />
        <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />
        {selectedProduct && (
          <ProductModal product={selectedProduct} closeModal={() => setSelectedProduct(null)} addToCart={addToCart} />
        )}
      </main>
    </div>
  );
};

export default App;