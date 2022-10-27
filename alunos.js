
const alunos = require ('./DATABASE/dados.json')


// Aqui vai os alunos com idade maior que 18 anos (alunosMaioresDeDezoito)
 const alunosMaioresDeDezoito = () => {
  const lista = bancoDeDados.filter((usuario) => usuario.idade >= 18);

  return lista;
}
console.log('Lista de usuários acima de 18: ', alunosMaioresDeDezoito());

const listarUsuariosAdicionandoAtivos = () => {
  const lista = bancoDeDados.map((usuario) => ({ ...usuario, ativo: usuario.idade > 18 }))
}
console.log('Lista de usuários com ativos: ', listarUsuariosAdicionandoAtivos());

const adicionandoUsuario = (usuario) =>{
  if (!usuario){
    console.log('Usuário não informado');
    return;
  }
  const usuarioParaAdicionar = {...usuario, ativo: usuario.idade > 18};

  bancoDeDados.push(usuarioParaAdicionar);
}
adicionarUsuario({
  "id": 7,
  "nome": "Kevin Campos",
  "idade": 17,
  "sexo": "M",
  "email": "kevin@gmail.com",
  "telefone": "999999999"
});
adicionarUsuario({
  "id": 8,
  "nome": "Juliana Campos",
  "idade": 20,
  "sexo": "F",
  "email": "ju@gmail.com",
  "telefone": "999999999"
});
console.log('Lista de usuários com o novo usuários: ', bancoDeDados);


const removerUsuario = (idUsuario) => {
  const usuario = bancoDeDados.findIndex((usuario) => usuario.id === idUsuario)

  if(usuarioIdex < 0) {
    console.log('Usuário não encontrado');
    return;
  }


  bancoDeDados.splice(usuarioIndex, 1);

}
removerUsuario(8);
console.log('Lista de usuários com o usuário removido: ', bancoDeDados);