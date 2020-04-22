var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var div = document.querySelector("div");

function inputLength() {
    return input.value.length;
}

function addListAfterClick() {
    if (inputLength() > 0) {
        fetchTrivia();
    }
}

function addListAfterKeyPress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        fetchTrivia();
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);

async function fetchTrivia(){
    try{
        var address = "https://swapi.py4e.com/api/people/" + input.value;
        console.log(address);
        const response = await fetch(address);
        console.log(response);
        var people = await response.json();
        console.log(people);
        console.log(people.name);
        var p = document.createElement("p");
        console.log(people.name);
        p.appendChild(document.createTextNode("Name: " + people.name));
        div.appendChild(p);
        input.value = "";
    } catch(error){
        window.alert('Something went wrong', error);
    }
}

/**function createElement() {
    var li = document.createElement("li");
    console.log(people.name);
    li.appendChild(document.createTextNode(people.name));
    ul.appendChild(li);
    input.value = "";
}**/