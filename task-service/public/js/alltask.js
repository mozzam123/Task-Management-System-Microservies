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

