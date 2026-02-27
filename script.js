function redirectWithMessage(letter) {
  const message = document.getElementById("redirectMessage");
  const text = document.getElementById("redirectText");

  text.innerText = `Redirecionando para jogos com a letra ${letter}...`;

  message.classList.add("show");

  setTimeout(() => {
    window.location.href = `https://vimm.net/vault/PS2/${letter}`;
  }, 2000);
}


function searchGame() {
  const input = document.getElementById("searchInput");
  const gameName = input.value.trim();

  if (gameName === "") return;

  const firstLetter = gameName[0].toUpperCase();
  let url = "";

  if (!isNaN(firstLetter)) {
    url = "https://vimm.net/vault/?p=list&system=PS2&section=number";
  } else {
    url = `https://vimm.net/vault/PS2/${firstLetter}`;
  }

  const message = document.getElementById("redirectMessage");
  const text = document.getElementById("redirectText");

  text.innerHTML = `🎮 Redirecionando para <strong>${gameName}</strong>...`;

  message.classList.add("show");

  setTimeout(() => {
    window.location.href = url;
  }, 1500);
}

document.getElementById("searchInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    searchGame();
  }
});


document.addEventListener("DOMContentLoaded", function() {

  const form = document.querySelector(".search-form");

  if (!form) return; // segurança

  const input = form.querySelector("input");
  const message = document.getElementById("redirectMessage");
  const text = document.getElementById("redirectText");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    let game = input.value.trim();
    if (!game) return;

    let firstChar = game.charAt(0).toUpperCase();
    let url;

    if (!isNaN(firstChar)) {
      url = "https://vimm.net/vault/?p=list&system=PS2&section=number";
      text.innerText = `🎮 Redirecionando para jogos que começam com número...`;
    } 
    else if (/^[A-Z]$/.test(firstChar)) {
      url = "https://vimm.net/vault/PS2/" + firstChar;
      text.innerText = `🎮 Redirecionando para jogos com a letra ${firstChar}...`;
    } 
    else {
      return;
    }

    message.classList.add("show");

    setTimeout(() => {
      window.location.href = url;
    }, 2000);

  });

});

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Executa ao carregar
revealOnScroll();