const db = require('../config/mongoose');
const todo = require('../models/todo');

// controller to render the home page
module.exports.home = function(req, res){
    todo.find({}, function(err, todos){
        if(err){
            console.log("Error in fetching todos from db");
            return;
        }
        return res.render('home', {
            title:"To-Do List",
            todo_list: todos
        });
    });
 };

 //controller to add a new todo
module.exports.create = function(req, res){
    todo.create({
        name: req.body.name,
        duedate: req.body.duedate,
        category: req.body.category,
        completed: false
    }, function(err, newTodo){
        if(err){
            console.log("Error in creating the todo");
        }
        console.log("ADDED: ", newTodo);
        return res.redirect('back');
    });
}

//controller to delete a todo
module.exports.delete = function(req, res){
    let id = req.query.id;
    console.log("DELETE: ", id);
    todo.findByIdAndDelete(id, function(err){
        if(err){
            console.log("Error in deleting an object from the database");
            return;
        }
        return res.redirect('back');
    });
};

// controller to toggle
module.exports.toggle = function(req, res){
    let id = req.query.id;
    todo.findByIdAndUpdate(id, {completed: !completed}, function(err, docs){
        if(err){
            console.log("Error in toggling");
            return;
        }
        console.log("TOGGLE: ", id, docs);
        return res.redirect('back');
    })
};

// SYNTAX: module.exports.actionName = function(req, res){};