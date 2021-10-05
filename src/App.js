import { useState } from "react";
import ProductList from "./components/ProductList";
import PromotionGenerator from "./components/PromotionGenerator";
import "./App.css";

function App() {
  const [useProduct, setProduct] = useState([
    { id: 1, name: "Smart TV LED 50", price: 1999.0 },
    { id: 2, name: "PlayStation 5", price: 12000.0 },
    { id: 3, name: "Notebook Acer Nitro 5", price: 5109.72 },
    { id: 4, name: "Headset s fio Logitech G935", price: 1359.0 },
    { id: 5, name: "Tablet Samsung Galaxy Tab S7", price: 4844.05 },
    { id: 6, name: "Cadeira Gamer Cruiser Preta FORTREK", price: 1215.16 },
  ]);

  const [productList, setProductList] = useState([]);

  const randomSort = () => {
    const id = Math.floor(Math.random() * 6) + 1;
    const discount = Math.floor(Math.random() * (90 - 40)) + 40;

    const productFiltered = useProduct.filter((product) => {
      return product.id === id;
    });

    const realProduct = productFiltered[0];
    const priceProduct = realProduct.price;
    const discountPrice = priceProduct * (discount / 100);
    const finalPrice = priceProduct - discountPrice;

    setProductList([
      {
        id: realProduct.id,
        name: realProduct.name,
        price: realProduct.price,
        discount: discount,
        discountPrice: discountPrice,
        finalPrice: finalPrice,
      },
    ]);
  };

  const [currentSale, setCurrentSale] = useState([]);

  const handleClick = (productId) => {
    setCurrentSale([...currentSale, productList[0]]);
  };

  return (
    <div className="App">
      <ProductList
        productPromo={productList}
        handleClick={handleClick}
        currentSale={currentSale}
      />

      <PromotionGenerator randomSort={randomSort} />
    </div>
  );
}

export default App;
