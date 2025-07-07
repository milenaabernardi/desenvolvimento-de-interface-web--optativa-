const configButton = document.querySelector(".dropdown-config img");
const configMenu = document.querySelector(".dropdown-config .dropdown-content");

configButton.addEventListener("click", (e) => {
  e.stopPropagation();
  configMenu.style.display =
    configMenu.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown-config")) {
    configMenu.style.display = "none";
  }
});

const addButtons = document.querySelectorAll(".add-card");

addButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const coluna = btn.parentElement;

    const novoCard = document.createElement("div");
    novoCard.className = "card";
    novoCard.innerHTML = `
      Informações
      <div class="card-options">
        <img src="assets/pontos.png" alt="Mais opções" class="options-toggle" />
        <div class="options-menu">
          <button>
            <img src="assets/arquivar.png" alt="Arquivar" />
            Arquivar
          </button>
          <button>
            <img src="assets/editar.png" alt="Editar" />
            Editar
          </button>
          <button class="btn-excluir">
            <img src="assets/excluir.png" alt="Excluir" />
            Excluir
          </button>
        </div>
      </div>
    `;

    coluna.insertBefore(novoCard, btn);
    atualizarContadores();

    novoCard.querySelector(".btn-excluir").addEventListener("click", () => {
      novoCard.remove();
      atualizarContadores();
    });
  });
});

document.addEventListener("click", function (e) {
  const isToggle = e.target.closest(".options-toggle");

  document.querySelectorAll(".options-menu").forEach((menu) => {
    menu.style.display = "none";
  });

  if (isToggle) {
    const menu = isToggle.nextElementSibling;
    if (menu) {
      menu.style.display = "flex";

      const rect = menu.getBoundingClientRect();
      if (rect.bottom > window.innerHeight) {
        menu.style.top = "auto";
        menu.style.bottom = "24px";
      } else {
        menu.style.top = "24px";
        menu.style.bottom = "auto";
      }
    }
  }
});

// Alternar tema claro/escuro
const btnToggle = document.getElementById("toggle-theme");
btnToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Atualizar os números nos títulos das colunas
function atualizarContadores() {
  const colunas = document.querySelectorAll(".coluna");

  colunas.forEach((coluna) => {
    const cards = coluna.querySelectorAll(".card");
    const contador = coluna.querySelector("h2 .contador");
    contador.textContent = cards.length;
  });
}

atualizarContadores();