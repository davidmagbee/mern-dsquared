const Task = require('../models/Task');
const seedData = require('./seed.json')

Task.deleteMany({}).then(() => {
    Task.create(seedData).then(tasks => {
        console.log(tasks);
        process.exit();
    });
});
