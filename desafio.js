"use strict";

const ps = require("prompt-sync");
const prompt = ps();

while (true) {

    let opcao = prompt("Gostaria de classificar o nível do heroi? Digite 1 - SIM ou 2 - NÃO: ")

    if (opcao == 1) {

        let nome = prompt("Digite o nome do Herói: ");
        let quantidadeXp = prompt("Digite a quantidade de XP: ");
        let classificadorNivel;

        if (quantidadeXp <=1000) {
            classificadorNivel = "Ferro";
        } else if (quantidadeXp >=1001 && quantidadeXp <= 2000) {
            classificadorNivel = "Bronze";
        } else if (quantidadeXp >= 2001 && quantidadeXp <= 6000) {
            classificadorNivel = "Prata";
        } else if (quantidadeXp >= 6001 && quantidadeXp <= 7000) {
            classificadorNivel = "Ouro";
        } else if (quantidadeXp >= 7001 && quantidadeXp <= 8000) {
            classificadorNivel = "Platina";
        } else if (quantidadeXp >= 8001 && quantidadeXp <= 9000) {
            classificadorNivel = "Ascendente";
        } else if (quantidadeXp >= 9001 && quantidadeXp <= 10000) {
            classificadorNivel = "Imortal";
        } else {
            classificadorNivel = "Radiante";
        }

        console.log(`O Herói de nome ${nome} está no nível ${classificadorNivel}!`)
    }

    if (opcao == 2) {
        console.log("Obrigada!")
        break
    }
}
