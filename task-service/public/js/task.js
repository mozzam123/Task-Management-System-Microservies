function logout() {
  // Redirect to the logout URL
  window.location.href = "http://127.0.0.1:1000/login";
}
const pushBtn = document.getElementById("push");
const newTask = document.getElementById("newTask");
const taskInput = document.getElementById("taskInput");
const tasks = document.getElementById("tasks");

const createNewTask = (value) => {
  return `
  <div class="task">
    <span class="task-name">${value}</span>
    <button class="delete">
      <i class='fas'>&#xf2ed;</i>
    </button>
  </div>
`;
};
const deleteTask = (e) => {
  e.currentTarget.parentNode.remove();
  const task = document.querySelectorAll(".task");
  if (!task.length) tasks.style.display = "none";
};
const toggleTask = (e) => e.currentTarget.classList.toggle("completed");

(() => taskInput.focus())();
pushBtn.addEventListener("click", () => {
  if (!taskInput.value) {
    alert("Please Enter a Task");
  } else {
    // task 추가
    tasks.innerHTML += createNewTask(taskInput.value);
    const task = document.querySelectorAll(".task");
    if (task.length) tasks.style.display = "block";

    // task 삭제
    const deleteBtns = document.querySelectorAll(".delete");
    deleteBtns.forEach((btn) => btn.addEventListener("click", deleteTask));

    // task 완료/미완료 토글
    const taskList = document.querySelectorAll(".task");
    taskList.forEach((task) => task.addEventListener("click", toggleTask));

    taskInput.value = "";
  }
  taskInput.focus();
});
taskInput.addEventListener(
  "keydown",
  (e) => e.keyCode === 13 && pushBtn.click()
);
