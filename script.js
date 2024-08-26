document.addEventListener("DOMContentLoaded", () => {
  const offerBoxes = document.querySelectorAll(".offer-box");
  const totalPriceElement = document.getElementById("total-price");

  offerBoxes.forEach((box) => {
    box.querySelector(".options").style.display = "none";
  });

  offerBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      offerBoxes.forEach((b) => {
        b.classList.remove("selected");
        const radioButton = b.querySelector('input[type="radio"]');
        radioButton.checked = false;
        b.querySelector(".options").style.display = "none";
      });

      box.classList.add("selected");
      const radioButton = box.querySelector('input[type="radio"]');
      radioButton.checked = true;
      box.querySelector(".options").style.display = "flex";

      updatePrice(radioButton.value);
    });
  });

  function updatePrice(price) {
    totalPriceElement.textContent = `$${price}.00 USD`;
  }
});
