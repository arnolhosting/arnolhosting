document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".card");
    const pricingCardsContainer = document.querySelector(".pricing-cards");
  
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        // Add active class to the clicked button
        button.classList.add("active");
  
        const filter = button.getAttribute("data-filter");
  
        // Clear and reorder the cards container
        pricingCardsContainer.innerHTML = '';
  
        cards.forEach((card) => {
          card.classList.remove("show");
          if (filter === "all" || card.getAttribute("data-type") === filter) {
            pricingCardsContainer.appendChild(card);
            setTimeout(() => {
              card.classList.add("show");
            }, 100); // Delay to trigger the animation
          }
        });
      });
    });
  
    // Initially show all cards with animation
    cards.forEach((card) => {
      pricingCardsContainer.appendChild(card);
      card.classList.add("show");
    });
  });
  