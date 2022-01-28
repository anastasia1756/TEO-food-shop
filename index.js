let swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Timer
let timeleft = 10;
let popModalTimer = setInterval(() => {
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
let form = document.getElementById("sheetdb-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("sheetdb-form")),
  })
    .then((response) => response.json())
    .then((html) => {
      alert("success");
      form.reset();
    });
});

// Table
const fetchUsers = async () => {
  const formRef = document.querySelector(".table");

  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  const markup = users
    .map(({ id, username, name, email, phone }) => {
      return `
    
  <tr class="table__data">
    <td class="table__item-bold">${id}</td>
    <td>${name}</td>
    <td>${username}</td>
    <td>${email}</td>
    <td>${phone}</td>
  </tr> 
  `;
    })
    .join("");
  formRef.insertAdjacentHTML("beforeend", markup);
};
const moreUsers = () => {
  const btnRef = document.querySelector(".table__btn");
  btnRef.addEventListener("click", () => {
    const formRef = document.querySelector(".table");
    const moreUsers = [
      {
        id: 11,
        name: "Ana",
        username: "Toro",
        email: "ana@ukr.net",
        phone: "0634256781",
      },
      {
        id: 12,
        name: "Alexa",
        username: "Bingo",
        email: "al@gmail.com",
        phone: "0676856789",
      },
      {
        id: 13,
        name: "Petra",
        username: "Toro",
        email: "ana@ukr.net",
        phone: "0634256781",
      },
      {
        id: 14,
        name: "John",
        username: "Braun",
        email: "al@gmail.com",
        phone: "0676856789",
      },
    ];
    const markup = moreUsers
      .map(({ id, username, name, email, phone }) => {
        return `
  <tr class="table__data">
    <td class="table__item-bold">${id}</td>
    <td>${name}</td>
    <td>${username}</td>
    <td>${email}</td>
    <td>${phone}</td>
  </tr> 
  `;
      })
      .join("");
    formRef.insertAdjacentHTML("beforeend", markup);
    if (moreUsers.length >= 4) {
      btnRef.setAttribute("disabled", "disabled");
    }
  });
};
fetchUsers();
moreUsers();
