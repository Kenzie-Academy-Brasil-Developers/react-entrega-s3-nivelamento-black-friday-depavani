import Cart from "../CurrentSale";
const ProductList = ({ productPromo, handleClick, currentSale }) => {
  return (
    <>
      <div className="promoCard">
        {productPromo?.map((product, index) => (
          <div key={index}>
            <div>
              <h1>O Produto sorteado foi:</h1>

              <p>Nome do Produto: {product.name}</p>
              <p>Preço original: R${product.price.toFixed(2)}</p>
              <p>Porcentagem do desconto: {product.discount}%</p>
              <p>Valor do desconto: R${product.discountPrice.toFixed(2)}</p>
              <p>Preço final: R${product.finalPrice.toFixed(2)}</p>
            </div>
            <button onClick={handleClick}>Adicionar ao Carrinho</button>
            <Cart currentSale={currentSale} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
