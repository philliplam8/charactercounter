var userInput = document.getElementById("text-input");
var counter = document.getElementById("counter-value");
/**
 * Updates the display to show the total number of characters within the textarea
 */
function updateCounter() {
    // Get total
    var currentCount = userInput.value.length;
    counter.innerText = currentCount.toString();
    // Update display
    document.title = "Character Counter: " + currentCount;
}
userInput.addEventListener("input", updateCounter);
