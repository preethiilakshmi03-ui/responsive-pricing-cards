
const billingToggle = document.getElementById("billingToggle");
const prices = document.querySelectorAll(".price");

// Monthly / Yearly price toggle
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

// Popup elements
const buttons = document.querySelectorAll(".pricing-card button");
const popup = document.getElementById("popup");
const selectedPlan = document.getElementById("selectedPlan");
const closePopup = document.getElementById("closePopup");

// Open popup when selecting a plan
buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        const plan = button.closest(".pricing-card")
                           .querySelector("h2").textContent;

        selectedPlan.textContent =
            "You've selected the " + plan + " Plan!";

        popup.classList.add("show");

    });

});

// Close popup
closePopup.addEventListener("click", function () {
    popup.classList.remove("show");
});

// Close popup when clicking outside
popup.addEventListener("click", function (event) {

    if (event.target === popup) {
        popup.classList.remove("show");
    }

});
