const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
  }
  
  
  const list = document.getElementById('todo-list')
  const itemCountSpan = document.getElementById('item-count')
  const uncheckedCountSpan = document.getElementById('unchecked-count')
  const tabla = document.getElementById('cuerpoToDo')
  
  function addTodo() {
    let tarea = window.prompt("Ingrese la tarea", "");
    if (tarea != null){
      if(tarea != ""){
        addCells(tarea);
        counter();
        countChecked();
      }else{
        alert("Error!");
      }
    }
  }
  function addCells(tarea){
    let fila = tabla.insertRow(0);
    let celdaTarea = fila.insertCell(0);
    let celdaCheck = fila.insertCell(1);
    celdaTarea.append(tarea);
    celdaCheck.append(createCheckbox());

  }
  function countChecked(){
    chkbox = document.getElementsByClassName(classNames.TODO_CHECKBOX)
    uncheckedCountSpan.innerHTML = 0;
    for (let index = 0; index < chkbox.length; index++) {
      if (chkbox[index].checked == false) {
        uncheckedCountSpan.innerHTML ++
      }
      
    }
  }
  function createCheckbox(){
    checkbox = document.createElement("input");
    checkbox.type = "checkbox"
    checkbox.className = classNames.TODO_CHECKBOX
    checkbox.checked = false;
    return checkbox
  }

  function counter(){
    itemCountSpan.innerHTML++
  }