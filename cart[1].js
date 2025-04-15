
let cart = [];

function addToCart(productId) {
  let product = products.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    updateCart();
  }
}

function updateCart() {
  let cartContainer = document.getElementById('cartItems');
  cartContainer.innerHTML = '';
  let total = 0;
  cart.forEach(product => {
    total += product.price;
    cartContainer.innerHTML += `<li>${product.name} - $${product.price}</li>`;
  });
  document.getElementById('total').innerText = 'Total: $' + total;
}

let products = [];

fetch('products.json')
  .then(response => response.json())
  .then(data => {
    products = data;
    let productList = document.getElementById('productList');
    data.forEach(product => {
      productList.innerHTML += `
        <div class="product">
          <img src="${product.image}" alt="${product.name}">
          <h4>${product.name}</h4>
          <p>$${product.price}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      `;
    });
  });
