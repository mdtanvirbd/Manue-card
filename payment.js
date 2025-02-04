// payment.js
document.addEventListener("DOMContentLoaded", function() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalAmount = 0;

    cart.forEach(item => {
        totalAmount += item.price * item.quantity;
    });

    document.getElementById("totalAmount").textContent = totalAmount;

    document.getElementById("makePaymentBtn").addEventListener("click", function() {
        const paymentMethod = document.getElementById("paymentMethod").value;
        
        if (paymentMethod === "bkash") {
            alert("আপনি বিকাশের মাধ্যমে পেমেন্ট করবেন। অনুগ্রহ করে নির্দেশনা অনুসরণ করুন।");
        } else if (paymentMethod === "rocket") {
            alert("আপনি রকেটের মাধ্যমে পেমেন্ট করবেন। অনুগ্রহ করে নির্দেশনা অনুসরণ করুন।");
        } else if (paymentMethod === "nagad") {
            alert("আপনি নগদের মাধ্যমে পেমেন্ট করবেন। অনুগ্রহ করে নির্দেশনা অনুসরণ করুন।");
        }

        // পেমেন্ট সফল হলে কার্ট খালি করুন
        localStorage.removeItem("cart");
        window.location.href = "success.html"; // সফল পেমেন্ট পেজে পাঠিয়ে দিন
    });
});
