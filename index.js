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
    okBtn: document.querySelector(".modal__btn"),
  };
  const hideModal = () => {
    refs.modal.classList.add("is-hidden");
  };
  refs.closeModalBtn.addEventListener("click", hideModal);
  refs.okBtn.addEventListener("click", hideModal);
})();

// Animation

let path = anime.path(".motion-path-demo path");
anime({
  targets: ".motion-path-demo .el",
  translateX: path("x"),
  translateX: 1400,
  easing: "linear",
  duration: 3000,
  loop: true,
});

// Post form
// window.addEventListener("click", function () {
//   // function doGet(e) {
//   //   writeToGoogleSpreadsheet(e.parameter);
//   // }
//   // function writeToGoogleSpreadsheet(params) {
//   //   var spreadsheet = SpreadsheetApp.openById("id_of_my_google_spreadsheet");
//   //   var sheetData = spreadsheet.getSheetByName("Data");
//   //   sheetData.appendRow([
//   //     params.monitorURL,
//   //     params.alertType,
//   //     params.alertDetails,
//   //   ]);
//   // }

//   const form = document.querySelector(".form");
//   form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     const data = new FormData(form);
//     const action = e.target.action;
//     fetch(action, {
//       method: "POST",
//       body: data,
//     }).then(() => {
//       alert("Success!");
//     });
//   });
// });
let form = document.getElementById("sheetdb-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("sheetdb-form")),
  })
    .then((response) => response.json())
    .then((html) => {
      // you can put any JS code here
      alert("success");
      form.reset();
    });
});
