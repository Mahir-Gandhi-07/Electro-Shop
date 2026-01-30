//function addToCart(name, price) {
//    let cart = JSON.parse(localStorage.getItem("cart")) || [];
//    cart.push({ name, price });
//    localStorage.setItem("cart", JSON.stringify(cart));
//    alert("Added to cart!");
//}

//function loadCart() {
//    let cart = JSON.parse(localStorage.getItem("cart")) || [];
//    let list = document.getElementById("cart-items");
//    let total = 0;

//    list.innerHTML = "";
//    cart.forEach(item => {
//        let li = document.createElement("li");
//        li.textContent = `${item.name} - $${item.price}`;
//        list.appendChild(li);
//        total += item.price;
//    });

//    document.getElementById("total").textContent = "Total: $" + total;
//}

//function login(e) {
//    e.preventDefault();
//    alert("Login successful (demo)");
//}

//function signup(e) {
//    e.preventDefault();
//    alert("Signup successful (demo)");
//}

// navbar.js

const loggedInUser = localStorage.getItem('loggedInUser');

const navLogin = document.getElementById('navLogin');
const navSignup = document.getElementById('navSignup');
const navLogout = document.getElementById('navLogout');
const logoutLink = document.getElementById('logoutLink');

if (loggedInUser) {
    navLogin.style.display = 'none';
    navSignup.style.display = 'none';
    navLogout.style.display = 'block';
} else {
    navLogin.style.display = 'block';
    navSignup.style.display = 'block';
    navLogout.style.display = 'none';
}

logoutLink.addEventListener('click', function () {
    localStorage.removeItem('loggedInUser');
    alert('Logged out successfully!');
    window.location.reload();
});
