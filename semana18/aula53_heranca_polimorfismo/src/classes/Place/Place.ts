//Place é uma classe porque precisa ter um acesso restrito a um dos seus atributos, o que é impossível de se fazer em interfaces(atributos e métodos são sempre públicos em interfaces).
//Place é abstrata porque não enxergamos uma situação em que seria necessário criar uma instância dessa classe, mas sim, subclasses dessa classe representando, cada uma, o tipo de lugar(residence, commerce e industry).
export abstract class Place {
    constructor(protected cep: string) {

    }

    public getCep(): string {
        return this.cep
    }
}



