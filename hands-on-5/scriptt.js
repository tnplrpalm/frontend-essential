main = () => {
  const todoList = document.getElementById("to-do-list");

  todoList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("keedmidline");
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
