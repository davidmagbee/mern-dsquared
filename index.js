const express = require('express');
const parser = require('body-parser');

const app = express();
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

const taskController = require('./backend/controllers/task-controller');

app.use('/task', taskController);

app.get('/', (req, res) => {
    res.redirect('/tasks')
});

app.listen(5000, () => console.log("Yo yo, you're up and running on port 5000!"));