const params = new URLSearchParams(window.location.search);
const product = params.get('product');
const username = params.get('username');
const email = params.get('email');
const phone = params.get('phone')
const price = params.get('params');

console.log(product, username, email, phone, price)

const container = document.getElementById("order-details");
console.log(container)
container.innerHTML = `
      <p><strong>Customer:</strong> ${username}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Product:</strong> ${product}</p>
      <p><strong>Price:</strong> $${price}</p>
    `;