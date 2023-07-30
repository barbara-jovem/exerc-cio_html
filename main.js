$(document).ready(function () {
  // Função para adicionar a nova tarefa à lista
  $("form").submit(function (event) {
    event.preventDefault();
    const novaTarefa = $("#nova-tarefa").val();
    if (novaTarefa !== "") {
      $("ul").append("<li><h2>" + novaTarefa + "</h2></li>");
      $("#nova-tarefa").val("");
    }
  });

  // Função para riscar a tarefa ao clicar nela
  $(document).on("click", "li", function () {
    $(this).toggleClass("riscado");
  });

  // Função para limpar as tarefas incluídas
  $("#botao-limpar").click(function () {
    $("ul").empty();
  });
});
