var init = function(){
  var state = JSON.parse(localStorage.getItem('todoList')) || [];
  var list = document.querySelector('#todo-list');
  var button = document.querySelector('button');

  button.onclick = handleClick;

  populate(list, state);
}

var populate = function(list, state){
  //for each item in the state, invoke addItem
  for(item of state){
    addItem(list, item);
  }
}

var addItem = function(list, item){
  //add an item to the list
  var li = document.createElement('li')
  li.innerText = item;
  list.appendChild(li);
}

var handleClick = function(){
  //get the value of the input box
  var input = document.querySelector("#new-item").value;
  //get the "todo-list" element from the DOM
  var toDoList = document.querySelector("#todo-list");
  //invoke addItem
  addItem(toDoList, input);
  //invoke save
  save(input);
  input = "";
}

var save = function(item){
  var state = JSON.parse(localStorage.getItem('todoList')) || [];
  //save the item to localStorage
  state.push(item);
  //NOTE You'll have to use JSON.stringify
  var string = JSON.stringify(state)
  localStorage.setItem("todoList", string);
}

window.onload = init;

//ADVANCED: create a drop-down of many to-do lists that are stored in localStorage
//HINT: you'll have to use a different data structure (an array of objects maybe?)
