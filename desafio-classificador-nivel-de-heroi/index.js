let nome = "Laura";
let xp = 999;
let nivel = "";

switch (true) {

    case (xp > 10000):
        nivel = "Radiante";
        break;

    case (xp > 9000 && xp <= 1000):
        nivel = "Imortal";
        break;

    case (xp > 8000 && xp <= 9000):
        nivel = "Ascendente";
        break;

    case (xp > 7000 && xp <= 8000):
        nivel = "Diamante";
        break;

    case (xp > 6000 && xp <= 7000):
        nivel = "Platina";
         break;
    
    case (xp > 5000 && xp <= 6000):
        nivel = "Ouro";
        break;
    
    case (xp > 2000 && xp <= 5000):
        nivel = "Prata";
        break;
    
    case (xp > 1000 && xp <= 2000):
        nivel = "Bronze";
        break;
    
    case (xp <= 1000):
        nivel = "Ferro";
        break;

    default:
        nivel = "XP inválida";
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`)    