function onReady(){
const toDos = [];
const addToDoForm = document.getElementById('addToDoForm');
let idS = 0;

function creatNewToDo() {
  const newToDoText = document.getElementById('newToDoText');
  if (!newToDoText.value){return;}

  toDos.push({
    title: newToDoText.value,
    complete: false,
    id: idS
  });
  // console.log(toDos[0]);
  // console.log(toDos[1]);
// id is possibly not incrememnting...why? is it the object? Nope!!! id is incrememnting as it should
  idS++;

newToDoText.value = '';
renderTheUI();
}

function renderTheUI() {
  const toDoList = document.getElementById('toDoList');

  toDoList.textContent = '';

  toDos.forEach(function(toDo){
    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    const deleteToDo = document.createElement('button');

    checkbox.type = "checkbox";

    newLi.textContent = toDo.title;
    deleteToDo.innerText = 'Delete';

    toDoList.appendChild(newLi);
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteToDo);


     deleteToDo.addEventListener('click', removal =>{
      let removalList = toDos.filter(list => toDo.id == idS);
        toDos.splice(toDo.id);
        renderTheUI();
      });

  });



}

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    creatNewToDo();
  });

renderTheUI();
}



window.onload = function(){
  onReady();

};
