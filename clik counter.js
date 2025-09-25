let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("sceen")



let count = 0

function clickment() {
    count += 1
    countEl.textContent = count

}


function save() {

    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.innerText = 0

}


/*let name = "taha"
let greeting = "Hi , my name is "

let MyGreeting = greeting + name

console.log(MyGreeting)*/

const refreshBtn = document.getElementById("refresh-btn");

function handleClick() {
    window.location.reload();
}

// The same as onclick = "function()" on html
//refreshBtn.addEventListener("click", handleClick);


