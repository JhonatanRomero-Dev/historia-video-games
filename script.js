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