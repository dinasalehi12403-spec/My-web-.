// مدیریت تعداد محصولات در سبد خرید با جاوااسکریپت
let cartCount = 0;
const cartButton = document.getElementById('cart-btn');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartButton.textContent = سبد خرید (${cartCount});
        alert('محصول با موفقیت به سبد خرید اضافه شد!');
    });
});
