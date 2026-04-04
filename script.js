// Seleciona os elementos
const modal = document.getElementById("meuModal");
const btn = document.getElementById("btnDescobrir"); // Verifique se seu botão tem esse ID
const span = document.getElementsByClassName("fechar")[0];

// Quando clicar no botão, abre o modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Quando clicar no (x), fecha o modal
span.onclick = function() {
  modal.style.display = "none";
}

// Quando clicar fora da caixa branca, também fecha
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('App pronto para uso mobile!', reg))
      .catch(err => console.log('Erro ao registrar app', err));
  });
}

