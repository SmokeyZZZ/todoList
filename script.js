
const todos = document.querySelector("#todos");
const addBtn = document.querySelector("#add");
const text = document.querySelector("#text")
const listOfTodo = [];
let todo ;

function isSumbittingPossible()
{
    if(text.value !="")return true;
    else
    {
        alert("You cannot create a task without a name!")
    }
    return false;
}
function addingATodo()
{
    if(isSumbittingPossible())
    {

        todo= document.createElement("div");
        todo.classList.add("card")
        todo.id = "todo";
        todo.innerHTML = '<h2 id="textOfTodo">'+text.value+'</h2><button class="Btn" id = "remove">X</button>'
        text.value ="";
        todos.appendChild(todo);
    }
    
}
addBtn.addEventListener("click",addingATodo);
document.addEventListener('keydown', function(event) {
    if(event.key == "Enter") 
    {
        if(text.value!="")
        {
            addingATodo();
        }
    }
    
});
todos.addEventListener("click",function(e){
    if(e.target.id =="remove")
    {
        todos.removeChild(e.target.parentElement);
    }
    else if(e.target.id=="textOfTodo")
    {
        if(e.target.style.textDecoration=="none")
        {
            e.target.style.textDecoration ="line-through";
        }
        else
        {
            e.target.style.textDecoration ="none";

        }
    }
    
});