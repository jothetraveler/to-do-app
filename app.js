function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const deleteToDo = document.getElementById('deleteToDo');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    let title = newToDoText.value;
    let newLi = document.createElement('li');
    let checkbox = document.createElement('input');


    checkbox.type = "checkbox";
    newLi.textContent = title;
    newLi.appendChild(checkbox);
    toDoList.appendChild(newLi);
    newToDoText.value = '';

  });

  deleteToDo.addEventListener('click', removal => {
  removal.preventDefault();
  let selected = document.querySelectorAll('#toDoList li input:checked');
    for(var i = 0; i < selected.length; i++){
<<<<<<< HEAD
      // input:checked's parent's parent aka the grandparent; requesting grandparent to
      // removeChild(input:checked's parent); selected[i] identifies a specfic element in the collection
      // of checkboxes
=======
>>>>>>> 68c2ac58d8d1646267e35c9ff06d78118bcb020d
     selected[i].parentNode.parentNode.removeChild(selected[i].parentNode);
    }
  });
}
  // document.getElementById('deleteToDo').addEventListener('click'){
  //   checkbox.checked();
  // });


document.querySelectorAll('#items-listed li input:checked')
window.onload = function(){
  alert("The window has loaded!");
  onReady();
  // deleteToDoItem();
}
