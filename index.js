const prompt = require('prompt-sync')();

idade = parseInt(prompt("Digite sua idade: "));
tempo = parseInt(prompt("Digite seu tempo de serviço: "));
salario = parseFloat(prompt("Digite seu salário: "));

// Implementar o comando de decisão para verificar se o cidadão pode, ou não, se aposentar
if((idade >= 65) || (tempo >= 30) || (idade >= 60 && tempo >= 25)){
  if(tempo > 20){
    var aposentadoria = salario * 80/100;
  } else {
    var aposentadoria = salario * 60/100;
  }

  if(aposentadoria < 1212){
    var aposentadoria = 1212;
  } else if(aposentadoria >7087.22){
    var aposentadoria = 7087.22;
  }
  console.log('Você pode se aposentar!');
  console.log('Seu salário de aposentado será: ',aposentadoria);
} else {
  console.log('Você não pode se aposentar!');
}