document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("input");
  const list = document.getElementById("list");
  const add = document.getElementById("add");

  add.addEventListener("click", addTask);

  list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("check");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  });

  function addTask() {
    if (input.value === "") {
      alert("Tu dois écrire une tâche");
    } else {
      let li = document.createElement("li");
      li.innerHTML = input.value;
      list.appendChild(li);

      let span = document.createElement("span");
      span.innerHTML = "\u00d7"; // Caractère "×"
      li.appendChild(span);
    }

    input.value = "";
    saveData();
  }

  function saveData() {
    localStorage.setItem("data", list.innerHTML);
  }

  function showTask() {
    list.innerHTML = localStorage.getItem("data");
  }

  showTask();
});
