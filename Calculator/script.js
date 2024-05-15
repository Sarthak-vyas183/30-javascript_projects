let string = "";

let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button)=> {
    button.addEventListener("click" , (e)=>{
       
        if(e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector(".input-box").value = string;

        } else if(e.target.innerHTML == "C") {
           string = "";
           document.querySelector(".input-box").value = string;
           lastCharisOperator = false;
        } else {
           const isOperator = ["+", "-", "*", "/"].includes(e.target.innerHTML);
            if (isOperator && lastCharIsOperator) {
                alert("No Two operator can come together")
                 return;
            } 
           
            string += e.target.innerHTML;
            document.querySelector(".input-box").value = string;
            lastCharIsOperator = isOperator;
        }
         console.log( string.charAt(0))
       
        
    })
})