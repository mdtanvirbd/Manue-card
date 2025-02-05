document.addEventListener("DOMContentLoaded", function() {
    // LocalStorage থেকে total amount পাওয়া যাচ্ছে কিনা চেক করা
    let totalAmount = localStorage.getItem("total");

    if (!totalAmount || isNaN(totalAmount)) {
        totalAmount = 0; // যদি null বা invalid হয়, তাহলে 0 সেট করো
    } else {
        totalAmount = parseFloat(totalAmount);
    }

    // Total Amount UI-তে সেট করো
    const totalAmountElement = document.getElementById("totalAmount");
    if (totalAmountElement) {
        totalAmountElement.textContent = `মোট: ৳${totalAmount}`;
    }

    // পেমেন্ট সাবমিট বাটনের ইভেন্ট লিসনার
    document.getElementById("makePaymentBtn").addEventListener("click", function() {
        const paymentMethod = document.getElementById("paymentMethod").value;
        const number = document.getElementById("number").value;

        if (!number) {
            alert("দয়া করে আপনার পেমেন্ট নম্বর প্রদান করুন!");
            return;
        }

        if (paymentMethod === "bkash") {
            alert("✅ আপনি বিকাশের মাধ্যমে পেমেন্ট করবেন। অনুগ্রহ করে নির্দেশনা অনুসরণ করুন।");
        } else if (paymentMethod === "rocket") {
            alert("✅ আপনি রকেটের মাধ্যমে পেমেন্ট করবেন। অনুগ্রহ করে নির্দেশনা অনুসরণ করুন।");
        } else if (paymentMethod === "nagad") {
            alert("✅ আপনি নগদের মাধ্যমে পেমেন্ট করবেন। অনুগ্রহ করে নির্দেশনা অনুসরণ করুন।");
        }

        // সফল পেমেন্ট হলে কার্ট খালি করে Success পেজে পাঠিয়ে দাও
        localStorage.removeItem("cart");
        localStorage.removeItem("total");
        window.location.href = "success.html";
    });
});
