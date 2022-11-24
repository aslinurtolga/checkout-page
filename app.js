const minus = document.querySelectorAll('.minus');
const plus = document.querySelectorAll('.plus');
const remove = document.querySelectorAll('.remove');
const product-line-price = document.querySelectorAll('.product-line-price');
const line-through = document.querySelectorAll('.line-through');
const product-quantity = document.querySelectorAll('.product-quantity');
const card-subtotal = document.querySelectorAll('#card-subtotal');
const card-tax = document.querySelectorAll('#card-tax');
const card-total = document.querySelectorAll('#card-total');
const card-shipping = document.querySelectorAll('#card-shipping');

let total = 0;
product-line-price.forEach((item) => {
    total += item.textContent
    card-subtotal.textContent = total.toFixed(2) + "$"
)};

card-tax.textContent = (Number(card-subtotal.textContent).replace("$", "") * 0.18).toFixed(2)+"$";
card-total.textContent = +(card-subtotal.textContent).replace("$", "")+ +(card-shipping.textContent.replace("$", ""))+ +(shipping_price.textContent.replace("$", ""))+"$"

minus.forEach((item) => {
    item.addEventListener("click", (e) => {
        if(item)
    }
}