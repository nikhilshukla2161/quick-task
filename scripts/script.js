const item = document.querySelector("#item"); // Select the input field
const toDoBox = document.querySelector("#to-do-box"); // Select the container for to-do items

// Add an event listener for when the user presses a key in the input field
item.addEventListener("keyup", function (event) {
  // Check if the pressed key is "Enter"
  if (event.key === "Enter") {
    const task = this.value.trim(); // Trim whitespace from the input value
    if (task) {
      // Check if the input is not empty
      addToDo(task); // Call addToDo to create a new task
      this.value = ""; // Clear the input field after adding the task
    }
  }
});

// Function to add a new to-do item
const addToDo = (item) => {
  const listItem = document.createElement("li"); // Create a new list item
  listItem.innerHTML = `
    ${item}
    <img id="deleteSVG" src="assets/icons/delete.svg" alt="delete_icon" style="cursor: pointer;"> 
  `; // Add the task text and a delete icon to the list item

  // Add a click event listener to toggle the "done" class
  listItem.addEventListener("click", function () {
    this.classList.toggle("done"); // Toggle the "done" class for strikethrough effect
  });

  // Select the delete icon inside the list item
  const deleteButton = listItem.querySelector("#deleteSVG");

  // Add a click event listener to the delete icon
  deleteButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent triggering the "done" toggle when deleting
    toDoBox.removeChild(listItem); // Remove the task from the list
  });

  toDoBox.appendChild(listItem); // Add the new list item to the to-do box
};
