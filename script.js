
const billingToggle = document.getElementById("billingToggle");
const prices = document.querySelectorAll(".price");

billingToggle.addEventListener("change", function () {

    prices.forEach(function (price) {

        const monthlyPrice = price.dataset.monthly;
        const yearlyPrice = price.dataset.yearly;

        if (billingToggle.checked) {
            price.innerHTML = `₹${yearlyPrice}<span>/year</span>`;
        } else {
            price.innerHTML = `₹${monthlyPrice}<span>/month</span>`;
        }

    });

});
