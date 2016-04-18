toDoApp.controller('ToDoController', ['todoFactory', function(todoFactory) {

  var self = this;

  self.todos = [];

  self.addToDo = function(todoText) {
    self.todos.push(new Todo(todoText));
  };
  
  self.removeToDo = function() {
    self.todos.pop();
  };
}]);
