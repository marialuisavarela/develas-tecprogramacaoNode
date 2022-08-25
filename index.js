const Cargo = require('./cargo');
const Funcionario = require('./funcionario');



const listaCargos = new Cargo();
listaCargos.adicionarCargo('Cargo1');
listaCargos.adicionarCargo('Cargo2');
listaCargos.adicionarCargo('Cargo3');
console.log(listaCargos.exibirCargos())

const funcionario1 = new Funcionario('Joao', 'Cargo1', 100);
const funcionario2 = new Funcionario('Maria', 'Cargo2', 200);
console.log(funcionario1)
console.log(funcionario2)

