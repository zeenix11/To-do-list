const TODO_STATUS = {
    PENDING: 1,
    DONE: 2,
    POSTPONED: 3,
};


const todoStatusMap = new Map([
    [TODO_STATUS.DONE, 'todo--done'],
    [TODO_STATUS.PENDING, 'todo--pending'],
    [TODO_STATUS.POSTPONED, 'todo--postponed']
]);




const ui = {
    container: document.querySelector('#todo-container'),
    addTodoElement(todo) {
        this.container.insertAdjacentHTML('beforeend', `
            <li class="list-group-item">
                <p class="todo ${todoStatusMap.get(todo.status)}">${todo.title}</p>
                <div class="d-flex justify-content-end">
                  <button type="button" class="btn
                        btn-sm btn-danger" 
                        data-action="0" 
                        data-id="${todo.id}">Delete
                    </button>
                  <button type="button" 
                        class="btn btn-sm btn-info" 
                        data-action="1" 
                        data-id="${todo.id}">Edit
                    </button>
                </div>

            </li>
        ` )

    },




    displayTodos(todos) {
        todos.forEach((todo) => ui.addTodoElement(todo));

    },
};

