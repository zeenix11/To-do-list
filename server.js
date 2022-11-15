const BASE_URL = 'http://localhost:3000';



const server = {
    getTodos() {
        const url = `${BASE_URL}/todos`;
        return fetch(url).then(res => res.json());
    },
    getTodo(id) {
        const url = `${BASE_URL}/todos/${id}`;
        return fetch(url).then(res => res.json());
    },

    createTodo(todo) {
        const url = `${BASE_URL}/todos`;
        return fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todo),
        });
    },

    deleteTodo(id) {
        const url = `${BASE_URL}/todos/${id}`;

        return fetch(url, {
            method: 'DELETE'
        });
    }

}