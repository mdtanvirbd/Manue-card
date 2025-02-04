const menuItems = [
    { id: 1, name: 'পানির পিঠা', category: 'desserts', price: 50, image: './Images/Panir-pitha.jpeg' },
    { id: 2, name: 'মোটা বড়ো সিঙ্গারা', category: 'starters', price: 30, image: './Images/Singara.jpeg' },
    { id: 3, name: 'ভর্তা', category: 'mains', price: 100, image: './Images/vorta.jpeg' },
    { id: 4, name: 'কাঁচামরিচ ভাজা', category: 'starters', price: 25, image: './Images/Green-chili.jpg' },
    { id: 5, name: 'ফুলকপি কোরমা', category: 'mains', price: 150, image: './Images/fulkopi.jpg' },
    { id: 6, name: 'ঢাকাই মিষ্টি', category: 'desserts', price: 60, image: './Images/Misty.jpeg' },
    { id: 7, name: 'মাছের টেংরা', category: 'mains', price: 180, image: './Images/tengra.jpeg' },
    { id: 8, name: 'চিংড়ি মালাইকারি', category: 'mains', price: 200, image: './Images/chingri.jpg' },
    { id: 9, name: 'পোলাও', category: 'mains', price: 120, image: './Images/polau.jpg' },
    { id: 10, name: 'বিরিয়ানি', category: 'mains', price: 250, image: './Images/Beriyani.jpeg' },
    { id: 11, name: 'ফুসকা', category: 'desserts', price: 40, image: './Images/Tok-misty.jpg' },
    { id: 12, name: 'আলুর চপ', category: 'starters', price: 15, image: './Images/alurchop.jpg' },
    { id: 13, name: 'লুচি', category: 'mains', price: 70, image: './Images/luchi.jpeg' },
    { id: 14, name: 'বেগুনি', category: 'starters', price: 20, image: './Images/Beguni.jpeg' },
    { id: 15, name: 'শাহী টিক্কা', category: 'mains', price: 220, image: './Images/Shahi-tikka.webp' },
];

const menuContainer = document.querySelector('.menu-items');

menuItems.forEach(item => {
    const menuItemDiv = document.createElement('div');
    menuItemDiv.classList.add('menu-item');
    menuItemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.category}</p>
        <p class="price">৳${item.price}</p>
        <div class="quantity">
            <input type="number" id="quantity-${item.id}" value="0" min="0">
        </div>
        <button onclick="addToCart(${item.id})">Add to Cart</button>
    `;
    menuContainer.appendChild(menuItemDiv);
});

function addToCart(itemId) {
    const quantity = document.getElementById(`quantity-${itemId}`).value;
    if (quantity > 0) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItemIndex = cart.findIndex(item => item.id === itemId);

        if (existingItemIndex > -1) {
            cart[existingItemIndex].quantity += 1;  // Increase by 1 on each add
        } else {
            const item = menuItems.find(item => item.id === itemId);
            cart.push({ ...item, quantity: 1 });  // Set initial quantity to 1
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Item added to cart!');
        updateCartQuantity();
    } else {
        alert('Please select a quantity');
    }
}

// Update cart quantity display
function updateCartQuantity() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach(item => {
        document.getElementById(`quantity-${item.id}`).value = item.quantity;
    });
}

// On page load, update the quantity to show the cart status
document.addEventListener("DOMContentLoaded", function() {
    updateCartQuantity();
});
