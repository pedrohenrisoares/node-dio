async function addItem(userCart, item) {
  userCart.push(item);
}

async function calculateTotal(userCart) {
  const result = userCart.reduce((ac, ind) => ac + ind.subtotal(), 0);
  console.log(`[💲] Total ${result}`);
}

async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  if (indexFound === -1) {
    console.log("Nenhum item encontrado.");
    return;
  }
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }
  if (userCart[indexFound].quantity === 1) {
    userCart.splice(indexFound, 1);
    return;
  }
}

async function displayCart(userCart) {
  console.log("Shopee cart list:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}: ${item.name} - R$${item.price} | ${
        item.quantity
      }x | Subtotal R$${item.subtotal()}`
    );
  });
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
