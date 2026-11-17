document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("open-book-btn");
  const coverCard = document.getElementById("cover-card");

  openBtn.addEventListener("click", () => {
    // Animate the cover fading/opening before navigating to the menu page
    coverCard.classList.add("opening");
    
    setTimeout(() => {
      window.location.href = "navigationPage/";
    }, 350);
  });
});