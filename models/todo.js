const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    duedate:{
        type: Date,
        required: true
    },
    completed:{
        type: Boolean
    }
});

const todo = mongoose.model('todo', todoSchema);

module.exports = todo;