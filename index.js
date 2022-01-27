let swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Timer
let timeleft = 10;
let popModalTimer = setInterval(() => {
  console.log(timeleft);
  if (timeleft <= 0) {
    clearInterval(popModalTimer);
    document.querySelector("[data-modal]").classList.remove("is-hidden");
  }
  const secRef = document.querySelector(".seconds");
  timeleft -= 1;
  if (timeleft < 0) {
    return;
  }
  secRef.textContent = "0" + timeleft;
}, 1000);

// Modal
(() => {
  const refs = {
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.closeModalBtn.addEventListener("click", () => {
    refs.modal.classList.add("is-hidden");
  });
})();
