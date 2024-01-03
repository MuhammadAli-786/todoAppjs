function todo(){
 var input = document.getElementById("todoapp"); // calling through id 
    // console.log(input.value);

    var list = document.getElementById("list-item"); 

    var listElement = document.createElement("li");

    var listText = document.createTextNode(input.value);

    listElement.appendChild(listText);

    // ********** Delete button in list *************

    var delBtn = document.createElement("button");

    var delText = document.createTextNode("Delete");

    delBtn.appendChild(delText);

    delBtn.setAttribute("onclick" , "delToDo(this)");
    delBtn.setAttribute("id" , "button");

    listElement.appendChild(delBtn);

     // ********** Edit button in list *************

     var editBtn = document.createElement("button");

     var editText = document.createTextNode("Edit");
 
     editBtn.appendChild(editText);
 
     listElement.appendChild(editBtn);

     editBtn.setAttribute("onclick" , "editToDo(this)");

     editBtn.setAttribute("id" , "button");

    list.appendChild(listElement);

    input.value = "";

}
function Deletetodo() {
    var del = document.getElementById("list-item");
    //del.innerHTML=""; // this first trick we can remove this but another way.

    del.remove(); // js built in function for delete.

}

function delToDo(e) {


    console.log(e.parentNode.remove());
    
}

function editToDo(e) {
    currentValue = e.parentNode.firstChild.nodeValue;
    var input = prompt("Enter updated Vale", currentValue);
    e.parentNode.firstChild.nodeValue = input;
    
}
