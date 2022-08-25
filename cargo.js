class Cargo{
    constructor(){
        this.cargos = [];
    }

    adicionarCargo(nomeCargo){
        this.cargos.push(nomeCargo)
    }

    exibirCargos(){
        console.log(this.cargos)
    }
}

module.exports = Cargo;