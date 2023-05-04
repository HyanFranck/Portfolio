const links = document.querySelectorAll('.menu-itens a');

links.forEach((link) => {
    link.addEventListener('click', () => {
        const checkbox = document.getElementById('toggle');
        checkbox.checked = false;
    });
});

// Obtenha todas as divs com a classe "card-wrapper"
const cardWrappers = document.querySelectorAll('.card-wrapper');

// Adicione um evento onclick a cada div
cardWrappers.forEach((cardWrapper) => {
  cardWrapper.onclick = () => {
    // Obtenha o nome do arquivo da página que você deseja redirecionar
    const fileName = 'Projetos1/Index.html';

    // Redirecione para a página desejada dentro da mesma pasta
    window.location.href = `${window.location.origin}/${fileName}`;
  }
});


