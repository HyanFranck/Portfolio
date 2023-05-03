document.getElementById("enviar").addEventListener("click", function() {
  var mensagem = document.getElementById("mensagem").value;
  window.location.href = "cardapio.html?mensagem=" + mensagem;
});

function addDiv() {
  // Crie um elemento div
  const newDiv = document.createElement('div');

  // Adicione algum conteúdo à div (opcional)
  newDiv.textContent = "Nova div criada!";

  // Adicione a nova div à div-container
  const divContainer = document.getElementById('add-div-btn1');
  divContainer.appendChild(Carrinho);
}

































let SaladadeFrutas = {
    valor: 10,
    Unidade: 1
}

let PastelzinhosdeCarne = {
  valor: 12,
  Unidade: 1
}

let BatataFrita = {
  valor: 16,
  Unidade: 1
}

let ParmedianadeFrango = {
  valor: 32,
  Unidade: 1
}

let PicanhaaoMolhoBarbecue = {
  valor: 52,
  Unidade: 1
}

let MacarrãoParafusoaoCarbonaradeErvas = {
  valor: 40,
  Unidade: 1
}

let PudimdeLeiteCondensado = {
  valor: 10,
  Unidade: 1
}

let PetitGateau = {
  valor: 16,
  Unidade: 1
}