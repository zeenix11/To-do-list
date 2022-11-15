
const ACTION = {
    EDIT: '1',
    DELETE: '0'
};

const mainContainer = document.querySelector("#todo-container");
const addTodoButton = document.querySelector('#todo-add');
const todoForm = document.querySelector('#todo-form');
const saveTodoButton = document.querySelector('#todo-save');
const cancelTodoButton = document.querySelector('#todo-cancel');
const formIntputTodoName = document.querySelector('#todo-name');

(function init() {
    server.getTodos().then(ui.displayTodos);
    mainContainer.addEventListener("click", actionHandler);
    addTodoButton.addEventListener("click", showTodoForm);
    saveTodoButton.addEventListener("click", saveTodoTask);
    cancelTodoButton.addEventListener("click", cancelTask);
    formIntputTodoName.addEventListener('input', enableButton)
})();


function actionHandler(ev) {
    const action = ev.target.dataset.action;
    if (!action) {
        return;
    }

    const todoId = ev.target.dataset["id"];

    if (action === ACTION.DELETE) {
        return server.deleteTodo(todoId);

    }


    if (action === ACTION.EDIT) {
        server.getTodo(todoId).then((todo) => {
            document.forms["todo-form"]["todo-name"].value = todo.title;
            document.forms["todo-form"]["todo-status"].value = todo.status;
            showTodoForm();
        });

    }
};
function showTodoForm() {
    todoForm.classList.remove('d-none');
};

function saveTodoTask(event) {
    event.preventDefault();


    const payload = {
        title: document.forms['todo-form']['todo-name'].value,
        status: +document.forms['todo-form']['todo-status'].value,
    }



    todoForm.classList.add('d-none');
    server.createTodo(payload);
};

function cancelTask() {
    todoForm.classList.add('d-none');
}

function enableButton(event) {
    if (!event.target.value) {
        // saveTodoButton.setAttribute("title", "todo title is required"); - not working
        saveTodoButton.setAttribute("disabled", true);
    } else {
        saveTodoButton.removeAttribute("disabled");
    }


}


