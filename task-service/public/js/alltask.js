function logout() {
  // Redirect to the logout URL
  window.location.href = "http://127.0.0.1:1000/login";
}


function createTask() {
  // Redirect to the logout URL
  window.location.href = "http://127.0.0.1:2000/";
}

function deleteTask(taskId) {
  fetch(`http://127.0.0.1:2000/delete-task/${taskId}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (response.ok) {
        // Reload the page after successful deletion
        window.location.reload();
        console.log("Deleted Succesfull");
      } else {
        console.error('Failed to delete task.');
      }
    })
    .catch(error => console.error('Error:', error));
}

function updateTask(taskId) {
  fetch(`http://127.0.0.1:2000/update-task/${taskId}`, {
    method: 'PATCH'
  })
    .then(response => {
      if (response.ok) {
        // Reload the page after successful deletion
        window.location.reload();
        console.log("Updated Succesfull");
      } else {
        console.error('Failed to update task.');
      }
    })
    .catch(error => console.error('Error:', error));

}

function makeEditable(element, taskId) {
  const taskText = element.innerText;
  const inputElement = document.getElementById(`edit-task-${taskId}`);
  
  // Set the input value to the current task text
  inputElement.value = taskText;
  
  // Display the input field and hide the task text
  inputElement.style.display = 'block';
  element.style.display = 'none';
  
  // Focus on the input field
  
  // Add an event listener to handle the blur event on the input field
  inputElement.addEventListener('blur', () => {
    // Update the task text with the new input value
    element.innerText = inputElement.value;
  console.log(inputElement.value);

    
    // Display the task text and hide the input field
    element.style.display = 'block';
    inputElement.style.display = 'none';

    // Here you can update the task on the server if needed
    const updatedTask = inputElement.value;
    fetch(`http://127.0.0.1:2000/update-task/${taskId}?task=${encodeURIComponent(updatedTask)}`, {
  method: 'PATCH'
})
  .then(response => {
    if (response.ok) {
      console.log('Task updated successfully');
    } else {
      console.error('Failed to update task.');
    }
  })
  .catch(error => console.error('Error:', error));
  })}
