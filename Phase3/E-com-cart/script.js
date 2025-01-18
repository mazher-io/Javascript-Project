// Sample Prodcuts

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

// Get DOM Elements
const productsContainer = document.getElementById("products");
const cartContainer = document.getElementById("cart");
const totalPriceElement = document.getElementById("total-price");
const clearCartButton = document.getElementById("clear-cart");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Functiion to render products on the page
function renderProducts() {
  productsContainer.innerHTML = "";
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
      <span>${product.name} - $${product.price}</span>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productsContainer.appendChild(productElement);
  });
}

// Function to add a product to the cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const existingProductIndex = cart.findIndex((item) => item.id === productId);

  if (existingProductIndex > -1) {
    // Product already in cart, increase quantity
    cart[existingProductIndex].quantity++;
  } else {
    // New product, add to cart with quantity 1
    cart.push({ ...product, quantity: 1 });
  }

  // Save to localStorage and re-render
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Function to remove a product from the cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  cartContainer.innerHTML = "";

  let total = 0;

  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
          <span>${item.name} - $${item.price} x ${item.quantity}</span>
          <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
    cartContainer.appendChild(cartItem);

    total += item.price * item.quantity;
  });

  totalPriceElement.textContent = total;
}

// Function to clear the cart
function clearCart() {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Event listener for the "Clear Cart" button
clearCartButton.addEventListener("click", clearCart);

// Initial render of products and cart
renderProducts();
renderCart();
