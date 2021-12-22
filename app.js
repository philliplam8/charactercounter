var userInput = document.getElementById("text-input");
var counter = document.getElementById("counter-value");


function updateCounter() {
    let currentCount = userInput.value.length
    counter.innerText = currentCount;
    document.title = "Character Counter: " + currentCount;
}

userInput.addEventListener("input", updateCounter);