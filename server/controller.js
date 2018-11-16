let todos = [];
let uniqueId = 1;

module.exports = {
    test: (req, res) => {
        res.status(200).send('woopie gold')
        // let {query, params, body} = req;
        // console.log(query, params, body)
    },
    getTodos: (req, res) => {
        res.status(200).send(todos);
    },
    createTodo: (req, res) => {

        // console.log(req.params)
        let {todo, urgency} = req.params

        // console.log(todo, urgency)

        let newTodo = {
            theTodo: todo,
            urgency: urgency,
            id: uniqueId,
        }
        uniqueId++;
        todos.push(newTodo);
        res.status(200).send(todos);
    }
}
