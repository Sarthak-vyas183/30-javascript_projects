const input_box = document.querySelector("#input-box");
const btn = document.querySelector(".btn");
const ul = document.querySelector("#task-container");
const taks = document.querySelector(".task");

btn.addEventListener("click" , ()=>{
    if(input_box.value != "") {
       let li = document.createElement('li');
       
       li.innerHTML = input_box.value;

       let span = document.createElement("span");
       span.innerHTML = "\u00d7";
      
       ul.appendChild(li)
       li.appendChild(span)
       
       input_box.value = "";

       saveData()
     } else {
        alert("you must write something")
     }
    
})

let lichecked = ()=>{
    console.log('li tag clicked')
}
   
ul.addEventListener("click" , (e)=>{
    console.log(e)
    console.log(e.target.tagName)
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData()
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
} , (false))

function saveData() {
    localStorage.setItem("data" , ul.innerHTML);
}

function showTask() {
    ul.innerHTML = localStorage.getItem("data");
}
showTask()