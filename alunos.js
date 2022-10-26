
const alunos = require ('./DATABASE/dados.json')


// Aqui vai os alunos com idade maior que 18 anos (alunosMaioresDeDezoito)
 const alunosMaioresDeDezoito = () => {
  console.log(alunos.filter((alunos) => {
    return alunos.idade > 18
  }));
}
alunosMaioresDeDezoito();