const form = document.getElementById("enquiry-form");
import { products } from "./data.js";
const handleForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries([...formData.entries()]);
    console.log(data)

    if (data.username.trim() === "") {
        updateError("user-err", "Invalid name");
    };

    if (data.email.trim() === "") {
        updateError("email-err", "email is required");
    };

    if (data.phone.trim() === "") {
        updateError("phone-err", "Phone is required");
    };

    const params = new URLSearchParams(data);
    window.location.href = `confirm.html?${params.toString()}`;
};


function updateError(name, msg) {
    const element = document.getElementById(name);
    element.innerText = msg
    element.style.display = "block";

}

form.addEventListener("submit", handleForm);

function fetchDataDetails() {
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get('productId'));

    const p = products.filter((p) => {
        if (p.id === id) {
            return p
        }
    })

    document.getElementById('product-name').value = p[0].name;
}

fetchDataDetails()