function validarDados() {
  var conteudo = document.getElementById("pesquisa").value.trim();

  if (conteudo == "") {
    alert("Escreva Algo");
  } else {
    var limpar = document.getElementById("pesquisa").value = "";

    var div = document.createElement('div');
    div.textContent = conteudo;
    div.className = "item-lista";

    document.getElementById("lista").appendChild(div);

    var botaoV = document.createElement('button');
    botaoV.textContent = "X";
    div.appendChild(botaoV);

    botaoV.addEventListener("click", function () {
      document.getElementById("lista").removeChild(div);
    });
  }
}
