const navItems = document.querySelectorAll('nav li');
const conteudo = document.getElementById('conteudo');

function carregarConteudo(contentId) {
  fetch(`conteudo_${contentId}.html`) 
    .then(response => response.text())
    .then(html => {
      conteudo.innerHTML = html;
      navItems.forEach(item => item.classList.remove('active'));
      const activeItem = document.querySelector(`nav li[data-content="${contentId}"]`);
      if (activeItem) {
        activeItem.classList.add('active');
      }
    });
}
carregarConteudo('historia');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    carregarConteudo(item.dataset.content);
  });
});
