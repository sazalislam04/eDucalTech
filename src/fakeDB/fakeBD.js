const addToDb = (id) => {
  let shoppingCart = getToDb();

  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const getToDb = () => {
  let shoppingCart = {};
  const savedCart = localStorage.getItem("shopping-cart");
  if (savedCart) {
    shoppingCart = JSON.parse(savedCart);
  }
  return shoppingCart;
};

const removeFromDb = (id) => {
  const storedCard = localStorage.getItem("shopping-cart");
  if (storedCard) {
    const shoppingCart = JSON.parse(storedCard);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};

const deleteDataFromStorage = () => {
  localStorage.removeItem("shopping-cart");
};

export { getToDb, addToDb, deleteDataFromStorage, removeFromDb };
