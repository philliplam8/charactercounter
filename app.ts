var userInput = document.getElementById("text-input") as HTMLInputElement;
var counter = document.getElementById("counter-value") as HTMLInputElement;

/**
 * Updates the display to show the total number of characters within the textarea
 */
function updateCounter(): void {
    // Get total
    let currentCount: number = userInput.value.length;
    counter.innerText = currentCount.toString();

    // Update display
    document.title = "Character Counter: " + currentCount;
}

userInput.addEventListener("input", updateCounter);