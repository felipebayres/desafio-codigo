// Conversão de kudos para pontos
const KUDOS_TO_POINTS = [
  { name: 'OK', value: 5 },
  { name: 'NICE', value: 10 },
  { name: 'GOOD', value: 20 },
  { name: 'GREAT', value: 50 },
  { name: 'SUPER', value: 100 },
];

// Conversão de kudos para reais
const KUDOS_TO_REAL = [
  { name: 'OK', value: 2 },
  { name: 'NICE', value: 5 },
  { name: 'GOOD', value: 8 },
  { name: 'GREAT', value: 15 },
  { name: 'SUPER', value: 25 },
];

/* 
  Recebe: um int representando o número de pontos do usuário
  Retorna: um array contendo os kudos. Ex.: ['OK', 'GOOD'] 
*/
function getKudosForUser(points) {
  const KudosArray = [];

  // Garante o ordenamento do vetor de Kudos de maneira decrescente
  KUDOS_TO_POINTS.sort((a, b) => a.value < b.value ? 1 : -1);

  // Verifica de ordem decrescente a quantidade de Kudos que a pontuação equivale
  for (i = 0; i < KUDOS_TO_POINTS.length; i++) {
    // Maior quantidade do Kudo escolhido que é possível pela quantidade de pontos;
    const KudoQuantity = Math.floor(points / KUDOS_TO_POINTS[i].value);
    //Restante para ser utilizado com Kudos de valor menor
    points = points % KUDOS_TO_POINTS[i].value;
    for (j = 0; j < KudoQuantity; j++)
      KudosArray.push(KUDOS_TO_POINTS[i].name);
      // Interromper loop se acabarem os pontos restantes
      if (points == 0)
        break
  }

  return KudosArray;

}

/* 
  Recebe: Recebe um array contendo os nomes dos kudos de um usuário. Ex.: ['OK', 'GOOD']
  Retorna: a mensagem padrão com o valor em reais dos kudos por extenso. Ex.: Parabéns, você ganhou vinte e cinco reais
*/
function getKudosValueMessageForUser(kudos) {
  let money = 0;
  //Utiliza uma variavel auxiliar para ter os espaços entre as vírgulas inseridos sem alterar a variavel original
  let kudosAux = Object.assign([],kudos);
  
  kudos.map((kudo, index) => {
    
    const KudoInformation = KUDOS_TO_REAL.find(a => a.name === kudo);
    money += KudoInformation.value;
    // Insere um espaço para igualar a especificação do print
    if (index != 0) {
      kudosAux[index] = " " + kudo;
    }
  })
  
  //Biblioteca utilizada para a escrita completa do numero
  var writtenNumber = require('written-number');
  
  return `Você recebeu ${writtenNumber(money, { lang: 'pt' })} reais em retorno aos kudos ${kudosAux} !`
}

module.exports = {
  getKudosForUser,
  getKudosValueMessageForUser,
};
