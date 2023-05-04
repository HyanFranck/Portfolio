const links = document.querySelectorAll('.menu-itens a');

links.forEach((link) => {
    link.addEventListener('click', () => {
        const checkbox = document.getElementById('toggle');
        checkbox.checked = false;
    });
});