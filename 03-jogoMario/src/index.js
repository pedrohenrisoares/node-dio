const player1 = {
  NOME: "Mario",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0,
};
const player2 = {
  NOME: "Luigi",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "RETA";

      break;
    case random < 0.66:
      result = "CURVA";
      break;

    default:
      result = "CONFRONTO";
      break;
  }
  return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);

    let block = await getRandomBlock();
    console.log(`🏁 Bloco ${block}`);

    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    ///
    if (block === "RETA") {
      totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
      totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

      await logRollResult(
        character1.NOME,
        "velocidade",
        diceResult1,
        character1.VELOCIDADE
      );
      await logRollResult(
        character2.NOME,
        "velocidade",
        diceResult2,
        character2.VELOCIDADE
      );

      if (totalTestSkill1 > totalTestSkill2) {
        character1.PONTOS++;
        console.log(`${character1.NOME} marcou um ponto! 🎉`);
      } else if (totalTestSkill2 > totalTestSkill1) {
        character2.PONTOS++;
        console.log(`${character2.NOME} marcou um ponto! 🎉`);
      } else {
        console.log(`⭕ Empate! ⭕`);
      }
    }

    ///
    if (block === "CURVA") {
      totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
      totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

      await logRollResult(
        character1.NOME,
        "manobrabilidade",
        diceResult1,
        character1.MANOBRABILIDADE
      );
      await logRollResult(
        character2.NOME,
        "manobrabilidade",
        diceResult2,
        character2.MANOBRABILIDADE
      );

      if (totalTestSkill1 > totalTestSkill2) {
        character1.PONTOS++;
        console.log(`${character1.NOME} marcou um ponto! 🎉`);
      } else if (totalTestSkill2 > totalTestSkill1) {
        character2.PONTOS++;
        console.log(`${character2.NOME} marcou um ponto! 🎉`);
      } else {
        console.log(`⭕ Empate! ⭕`);
      }
    }

    ///
    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.PODER;
      let powerResult2 = diceResult2 + character2.PODER;

      console.log(`${character1.NOME} confrontou ${character2.NOME} 🥊🥊`);
      await logRollResult(
        character1.NOME,
        "poder",
        diceResult1,
        character1.PODER
      );
      await logRollResult(
        character2.NOME,
        "poder",
        diceResult2,
        character2.PODER
      );

      //

      if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
        character2.PONTOS -= 1;
        console.log(
          `${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto`
        );
      } else if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
        character1.PONTOS -= 1;
        console.log(
          `${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto`
        );
      } else if (powerResult1 > powerResult2 && character2.PONTOS === 0) {
        let newRound1 = await rollDice();
        let newRound2 = await rollDice();
        console.log(
          `${character2.NOME} não pode perder pontos\nMas ${character1.NOME} pode ganhar 1 ponto!`
        );
        console.log(
          `Ambos rodam um 🎲 dado e se o número de ${character1.NOME} for maior, ganha um ponto!`
        );
        if (newRound1 > newRound2) {
          console.log(
            `${character1.NOME} tirou 🎲 ${newRound1} contra 🎲 ${newRound2} de ${character2.NOME} e ganhou um ponto!`
          );
          character1.PONTOS += 1;
        } else {
          console.log(
            `${character1.NOME} não ganhou pontos! ${character1.NOME}:🎲${newRound1} | ${character2.NOME}:🎲${newRound2}`
          );
        }
      } else if (powerResult2 > powerResult1 && character1.PONTOS === 0) {
        let newRound1 = await rollDice();
        let newRound2 = await rollDice();
        console.log(
          `${character1.NOME} não pode perder pontos\nMas ${character2.NOME} pode ganhar 1 ponto!`
        );
        console.log(
          `Ambos rodam um 🎲 dado e se o número de ${character2.NOME} for maior, ganha um ponto!`
        );
        if (newRound2 > newRound1) {
          console.log(
            `${character2.NOME} tirou 🎲 ${newRound2} contra 🎲 ${newRound1} de ${character1.NOME} e ganhou um ponto!`
          );
          character2.PONTOS += 1;
        } else {
          console.log(
            `${character2.NOME} não ganhou pontos! ${character2.NOME}:🎲${newRound1} | ${character1.NOME}:🎲${newRound2}`
          );
        }
      } else if (powerResult1 === powerResult2) {
        console.log("⭕ Empate! Ninguém perde ponto! ⭕");
      } else {
        let newRound1 = await rollDice();
        let newRound2 = await rollDice();
        console.log("⚠ Ninguém estava suscetível a perder ponto...");
        console.log("🏁🚨RODADA BÔNUS!");
        console.log("Ambos rodam um 🎲 dado e o maior número ganha um ponto!");
        if (newRound1 > newRound2) {
          console.log(
            `${character1.NOME} tirou 🎲 ${newRound1} contra 🎲 ${newRound2} de ${character2.NOME} e ganhou um ponto!`
          );
          character1.PONTOS += 1;
        } else if (newRound1 < newRound2) {
          console.log(
            `${character2.NOME} tirou 🎲 ${newRound2} contra 🎲 ${newRound1} de ${character1.NOME} e ganhou um ponto!`
          );
          character2.PONTOS += 1;
        } else {
          console.log(
            `Houve um empate novamente! 🎲1 ${newRound1} | 🎲2 ${newRound2}`
          );
        }
      }

      ///
    }

    console.log(`##############################`);
    console.log(`###########`);
  }
}

async function declareWinner(character1, character2) {
  console.log(`Resultado final:`);
  console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
  console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

  if (character1.PONTOS > character2.PONTOS)
    console.log(`\n${character1.NOME} venceu a corrida! Parabéns! 🏆`);
  else if (character1.PONTOS < character2.PONTOS)
    console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆`);
  else console.log("A corrida terminou em empate 🎌");
}

(async function main() {
  console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} . . . \n`);

  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2);
})();
