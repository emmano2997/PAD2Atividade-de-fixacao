 
//1 – Crie uma função que retorna a string “Olá, ” concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação “!” no final.
function quest1(text){
 return `Olá + ${text} + '!';`
}

//2 – Crie uma função que dado dois valores e uma Callback (passados como parâmetros), mostre no console a soma, subtração, multiplicação e divisão desses valores, dependendo da função Callabck.

function quest2(valor1, valor2, callback) {
 console.log(callback(valor1, valor2))
}

quest2(10, 10, function(a, b) {
	return a * b;
});

//3 - Crie uma função que verifica se um número inteiro passado como parâmetro é divisível por um numero passado por uma Callback e retorne true ou false.
function quest3 (x, y, callback){
    console.log(callback(x, y));
  }
  quest3(10, 2, function(valorX, valorY){
    if(valorX % valorY == 0){
      return true;
    }
  
    else{
      return false;
    }
  })

//4 - Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por exemplo, se a entrada for 2, a função deverá retornar “fevereiro”, pois este é o 2° mês.
function quest4(mes){
    switch(mes){
      case 1:
        return "janeiro";
        break;
  
      case 2:
        return "fevereiro";
      break;
  
      case 3:
        return "março";
      break;
    }
  }

//5 – Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo dependendo da função Callback.

function quest5 (x1, x2, callback){
    console.log(callback(x1, x2));
  }
  quest5(18, 9, function(valorX1, valorX2){
    if(valorX1 > valorX2){
      return `${valorX1} é maior que ${valorX2}.`
    }

    else{
      return `${valorX2} é maior que ${valorX1}.`
    }
  })