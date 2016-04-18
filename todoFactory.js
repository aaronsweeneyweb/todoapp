toDoApp.factory('todoFactory', function() {

  Todo = function(todoText){
    this.text = todoText;
    this.completed = false;
  };

  return Todo;
});
