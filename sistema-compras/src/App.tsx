import { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ProductModal from './components/ProductModal';


export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const initialProducts: Product[] = [
  { id: 1, name: 'Bola de Basquete', price: 449.99, description: 'Bola de basquete de couro sintético Spalding Tf-500 #6 + Completa (Link do anúncio real: https://www.mercadolivre.com.br/bola-de-basquete-de-couro-sintetico-spalding)', image: 'https://http2.mlstatic.com/D_NQ_NP_2X_683699-MLU78946286741_092024-F.webp' },
  { id: 2, name: 'Bola de vôlei', price: 159.79, description: 'Bola Volei Penalty Vp 5000 Oficial Quadra Profissional (Link real: https://produto.mercadolivre.com.br/MLB-3220829697-bola-volei-penalty-vp-5000)', image: 'https://http2.mlstatic.com/D_NQ_NP_2X_827721-MLB80752864468_112024-F-bola-volei-penalty-vp-5000-oficial-quadra-profissional.webp' },
  { id: 3, name: 'Bola de futebol', price: 144.51, description: 'Bola Futebol De Campo Tornado XXII Tamanho 68-70cm Penalty (Link real: https://www.mercadolivre.com.br/bola-futebol-de-campo-tornado-xxii-tamanho-68-70cm-penalty)', image: 'https://http2.mlstatic.com/D_NQ_NP_2X_717802-MLU72637294033_112023-F.webp' },
];

const App: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.id !== productId));
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
        <ProductList products={initialProducts} addToCart={addToCart} setSelectedProduct={setSelectedProduct} />
        <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />
        {selectedProduct && (
          <ProductModal product={selectedProduct} closeModal={() => setSelectedProduct(null)} addToCart={addToCart} />
        )}
      </main>
    </div>
  );
};

export default App;