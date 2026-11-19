
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
const popup = document.getElementById("popup");
const selectedPlan = document.getElementById("selectedPlan");
const closePopup = document.getElementById("closePopup");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const plan = button.closest(".pricing-card")
                           .querySelector("h2").textContent;

        selectedPlan.textContent = "You've selected the " + plan + " Plan!";
        popup.style.display = "flex";
    });
});

closePopup.addEventListener("click", function() {
    popup.style.display = "none";
});
