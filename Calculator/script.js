let string = "";

let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button)=> {
    button.addEventListener("click" , (e)=>{
       
        if(e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector(".input-box").value = string;

        } else if(e.target.innerHTML == "C") {
            console.log(e.target.innerHTML)
           string = "";
            document.querySelector(".input-box").value = string;
        } else {
            console.log(e.target)
            string += e.target.innerHTML;
            document.querySelector(".input-box").value = string;
        }
        
    })
})