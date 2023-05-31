const form = document.getElementById('form-dinheiro');
const conta = document.getElementById('valor-conta');
const salario = document.getElementById('valor-salario');

function verificarConta(conta) {
  for (let i = 0; i < conta.length; i++) {
    if (isNaN(parseInt(conta[i].value))) {
      return;
    }
  } // Confirmar se foi inserido apenas números 
}

function verificarSalario(salario) {
  for (let i = 0; i < salario.length; i++) {
    if (isNaN(parseInt(salario[i].value))) {
      return;
    }
  } // Confirmar se foi inserido apenas números 
}

function salarioMaiorQueConta(salario, conta, mensagem) {
  if (parseInt(salario.value) < parseInt(conta.value)) {
    alert("Seu salário precisa ser maior do que o valor que ainda tem na sua conta");
    return;
  } else {
    alert(mensagem);

    conta.value = '';
    salario.value = '';
  }
} // Confirmar se o campo B é maior que o campo A 

form.addEventListener('submit', function(e) {
  e.preventDefault();

  verificarConta(conta);
  verificarSalario(salario);

  const resto = parseInt(salario.value) - parseInt(conta.value);
  const mensagem = `Você ainda tem ${resto} para passar o resto do mês`;

  salarioMaiorQueConta(salario, conta, mensagem);

  form.reset(); // Limpar os campos do formulário
});
