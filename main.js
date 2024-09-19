document.addEventListener('DOMContentLoaded', () => {

    const toDoForm = document.getElementById('toDoForm');
    const listaTarefas = document.getElementById('listaTarefas');

    const carregarTarefas = () => {
        const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
        listaTarefas.innerHTML = '';

        tarefas.forEach((tarefa, index) => {
            const cartao = document.createElement('div');
            cartao.className = 'col-md-4 mb-4';
            cartao.innerHTML = `
                <div class="card text-bg-dark mb-3 task-card">
                    <div class="card-body">
                        <h5 class="card-title">${tarefa.name}</h5>
                        <p class="card-text">${tarefa.description}</p>
                        <button class="btn btn-danger" onclick="editarTarefa(${index})">Editar</button>
                        <button class="btn btn-danger" onclick="excluirTarefa(${index})">Excluir</button>
                    </div>
                </div>
            `;

            listaTarefas.appendChild(cartao);
        });
    }

    const salvarTarefa = (tarefa) => {
        const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []; //Verifica se existe tarefas no localStorage, se não existir, retorna um array vazio
        tarefas.push(tarefa); //Adiciona a tarefa no array
        localStorage.setItem('tarefas', JSON.stringify(tarefas)); //Salva o array no localStorage
        carregarTarefas();
    }

    toDoForm.addEventListener('submit', (evento) => {

        // Previne um listener de evento para o formulário de submit
        evento.preventDefault();

        const nomeTarefa = document.getElementById('nomeTarefa').value;
        const descricaoTarefa = document.getElementById('descricaoTarefa').value;

        const newTask = {
            name: nomeTarefa,
            description: descricaoTarefa
        }

        salvarTarefa(newTask);
        toDoForm.reset();
    })

    window.excluirTarefa = (index) => {
        const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
        tarefas.splice(index, 1);
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
        carregarTarefas();
    }

    window.editarTarefa = (index) => {
        const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
        const task = tarefas[index];

        document.getElementById('nomeTarefa').value = task.name;
        document.getElementById('descricaoTarefa').value = task.description;

        tarefas.splice(index, 1);
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
        carregarTarefas();
    }

    carregarTarefas();
});