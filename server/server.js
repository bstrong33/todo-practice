const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');

const app = express();

app.use(bodyParser.json())

app.get('/test', controller.test)
app.get('/todo', controller.getTodos)
app.post('/todo/:todo/:urgency', controller.createTodo) // :todo and :urgency are params
// http://localhost:4033/todo/sling%20some%20code/important postman request

const port = 4033
app.listen(port, () => console.log(`Ye maiden voyage docked at port: ${port}`))