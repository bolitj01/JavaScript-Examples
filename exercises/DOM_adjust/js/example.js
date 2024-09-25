
function trash(e){
    let li = e.target.parentElement;
    document.querySelector("ul").removeChild(li);
}

// ADDING ITEMS TO START AND END OF LIST
function addItem(text){
    let li = document.createElement("li");
    li.textContent = text;
    li.class = "cool";
    let list = document.querySelector("ul");
    list.insertBefore(li, list.firstChild);
}
addItem("cream");

let items = document.querySelectorAll("li");
for (let li of items){
    li.innerHTML += "<button class='complete' onclick='trash(event)'></button>";
}



// ADD NEW ITEM TO END OF LIST


// ADD NEW ITEM START OF LIST


// ADD A CLASS OF COOL TO ALL LIST ITEMS


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
