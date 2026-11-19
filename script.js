
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

const buttons = document.querySelectorAll(".pricing-card button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const plan = button.closest(".pricing-card")
                           .querySelector("h2").textContent;

        alert("Thank you for choosing the " + plan +
              " Plan! Your plan selection is successful.");
    });
});

