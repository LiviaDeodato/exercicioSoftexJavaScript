var num = parseInt(prompt("Informe um número inteiro positivo: "));
//Tratando o erro que pode ocorrer com a execusão do fatorial(n)
try {
    alert(`${num}! = ${fatorial(num)}`);
    
} catch (e) {
    alert(e);
}

function fatorial(num) {
    if(num >= 0){
        if (num === 1 || num === 0) {
            return 1;
        } else {
            return fatorial(num - 1) * num;
        }
    }else {
        // (Criar)Lançamento do Erro 
        throw new Error("Número inválido para o fatorial!");
    }
}