import { products } from './data.js'

function generateRandomColors() {
    const colors = document.querySelectorAll('.color');
    console.log(colors)

    colors.forEach(element => {
        const random = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        element.style.backgroundColor = random;
    });
}

generateRandomColors()

function rederData() {
    const parent = document.getElementById('content-box')
    console.log(parent)
    products.forEach((p, i) => {
        const card =
            `
        <a href="/enquiry.html?productId=${p.id}">
        <div class="card-container">
            <div class="card-img">
                <img src="${p.image}" alt="card image" />
            </div>

            <div class="card-details">
                <p class="card-title">${p.name}</p>
                <p class="description">${p.category}</p>

                <div class="colors">
                    <div class="color" style="background-color:${p.colors[0]}"></div>
                    <div class="color" style="background-color:${p.colors[1]}"></div>
                    <div class="color" style="background-color:${p.colors[2]}"></div>
                </div>
                <p class="price">$ ${p.price}</p>
            </div>
        </div>
        </a>
        `
        parent.innerHTML += card
    })
}

rederData()


