const listaLivros = require("./array");

// apenas troca o pivô de lugar.
function encontraMenores(pivo, array) {
  let menores = 0;

  for (let atual = 0; atual < array.length; atual++) {
    let produtoAtual = array[atual];

    if (produtoAtual.preco < pivo.preco) {
      menores++;
    }
  }
  trocaLugar(array, array.indexOf(pivo), menores);
  return array;
}

function trocaLugar(array, de, para) {
  const elem1 = array[de];
  const elem2 = array[para];

  array[para] = elem1;
  array[de] = elem2;
}

//console.log(encontraMenores(listaLivros[2], listaLivros));

// dividindo no pivô

function divideNoPivo(array) {
  let pivo = array[Math.floor(array.length / 2)];
  encontraMenores(pivo, array);

  // console.log(pivo);

  let valoresMenores = 0;

  for (let analisando = 0; analisando < array.length; analisando++) {
    let atual = array[analisando];

    if (atual.preco <= pivo.preco && atual !== pivo) {
      trocaLugar(array, analisando, valoresMenores);
      valoresMenores++;
    }
  }
  return array;
}

// console.log(divideNoPivo(listaLivros));

module.exports = trocaLugar;
