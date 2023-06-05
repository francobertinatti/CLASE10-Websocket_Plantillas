const generateProducts = (num) => {
  const products = [];
  const titles = ["Camisa", "Pantalón", "Zapatos", "Gorra", "Reloj"];
  const prices = [100, 200, 300, 400, 500];

  for (let i = 0; i < num; i++) {
    const product = {
      id: i + 1,
      title: titles[i % titles.length],
      price: prices[i % prices.length],
    };
    products.push(product);
  }
  return products;
};

let products = generateProducts(1);

const addProduct = (product) => {
  products.push({
    ...product,
    id: products.length + 1,
  });
};

const deleteProduct = (productId) => {
  products = products.filter((product) => product.id !== productId);
};

module.exports = {
  getProducts: () => products,
  addProduct,
  deleteProduct,
};
