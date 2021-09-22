// Exercício 3
//Crie uma aplicação Node que receba uma string representando uma tarefa. O programa deve adicionar a nova tarefa em uma variável que represente uma lista de tarefas. A lista de tarefas pode estar criada antes da execução do código. Após adicionar o item à lista, exiba a lista atualizada.

const tarefas = ["varrer", "estudar", "lavar roupa", "lavar louça"]

const adicionarTarefa = () => {
    const tarefa = process.argv[2]
    tarefas.push(tarefa)
}

adicionarTarefa()
console.table({tarefas})