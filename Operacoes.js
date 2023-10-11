//Uma função calculadora que os números e as operações serão feitas pelo usuário. 
//O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. 
//No início, o programa mostrará a seguinte lista de operações:
//1: Soma
//2: Subtração
//3: Multiplicação
//4: Divisão
//0: Sair
//Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, 
//o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.
//Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. 
//Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, 
//o sistema irá parar. 
//É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado. 


let result
let op = 1;
while (op != 0) {
  op = parseInt(prompt('Digite a operação desejada: ' + '\n1:Soma' + '\n2:Subtração' + '\n3: Multiplicação' +
    '\n4: Divisão' + '\n0: Sair' + ':' + ' '))

  if (op < 0 && op > 4) {
    alert('Essa opção não existe!')
  } else {
    let val1 = parseFloat(prompt('Digite o primeiro valor: '))
    let val2 = parseFloat(prompt('Digite o segundo valor: '))
    if (op == 1) {
      result = val1 + val2
      alert('Resultado da soma: ' + result)
    } else if (op == 2) {
      result = val1 - val2
      alert('Resultado da subtração: ' + result)
    } else if (op == 3) {
      result = val1 * val2
      alert('Resultado da multiplicação: ' + result)
    } else if (op == 4 && val2 != 0) {
      result = val1 / val2
      alert('Resultado da divisão: ' + result)
    } else if (op == 0) {
      alert('Você saiu da calculadora!')
    }
  }
}
