const kudos = require('./kudos');

test('test getKudosForUser', () => {
  expect(kudos.getKudosForUser(30)).toEqual(['GOOD', 'NICE']);
  expect(kudos.getKudosForUser(40)).toEqual(['GOOD', 'GOOD']);
  expect(kudos.getKudosForUser(100)).toEqual(['SUPER']);
  expect(kudos.getKudosForUser(105)).toEqual(['SUPER','OK']);
  expect(kudos.getKudosForUser(0)).toEqual([]);
});

test('test getKudosValueMessageForUser', () => {
  expect(kudos.getKudosValueMessageForUser(['GOOD', 'NICE']))
    .toEqual('Você recebeu treze reais em retorno aos kudos GOOD, NICE !');
  expect(kudos.getKudosValueMessageForUser(['GOOD', 'GOOD']))
    .toEqual('Você recebeu dezesseis reais em retorno aos kudos GOOD, GOOD !');
  expect(kudos.getKudosValueMessageForUser(['SUPER']))
    .toEqual('Você recebeu vinte e cinco reais em retorno aos kudos SUPER !');
  expect(kudos.getKudosValueMessageForUser(['SUPER', 'OK']))
    .toEqual('Você recebeu vinte e sete reais em retorno aos kudos SUPER, OK !');
  expect(kudos.getKudosValueMessageForUser([]))
    .toEqual('Você recebeu zero reais em retorno aos kudos  !');
});
