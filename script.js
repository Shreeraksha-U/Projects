const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const searchBox = document.getElementById("searchbox");

function addTask(){
    if(inputBox.value === ''){
        alert("Enter your task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); /*appendChild() method appends element as last child of an element. */
        let span = document.createElement("span"); 
        span.innerHTML="\u00d7";
        li.appendChild(span); /* adds a x mark*/
    }
    inputBox.value=""; 
    saveData();
} 
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){ 
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
         e.target.parentElement.remove();
         saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML); 
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();

searchBox.addEventListener('keyup', (e) =>{
    console.log(e.target.value);
});
