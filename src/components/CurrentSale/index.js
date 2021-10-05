const Cart = ({ currentSale }) => {
  const Discount = currentSale
    .reduce(
      (initialPrice, finalPrice) => initialPrice + finalPrice.discountPrice,
      0
    )
    .toFixed(2);

  const FullPrice = currentSale
    .reduce((initialPrice, finalPrice) => initialPrice + finalPrice.price, 0)
    .toFixed(2);

  const TotalPrice = FullPrice - Discount;

  return (
    <ul className="carttotal">
      <div className="cart">
        Carrinho <br />
        <br />
        Total - R$ : {TotalPrice.toFixed(2)}
        <br />
        Desconto total: {Discount}
      </div>
      <div className="totalitens">
        {currentSale.map((product, index) => (
          <div className="itens" key={index}>
            <p>Nome do Produto: {product.name}</p>
            <p>Preço original: R${product.price.toFixed(2)}</p>
            <p>Porcentagem do desconto: {product.discount}%</p>
            <p>Valor do desconto: R${product.discountPrice.toFixed(2)}</p>
            <p>Preço final: R${product.finalPrice.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </ul>
  );
};

export default Cart;
