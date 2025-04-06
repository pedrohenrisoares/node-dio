export default async function createItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    subtotal: () => {
      return price * quantity;
    },
  };
}
